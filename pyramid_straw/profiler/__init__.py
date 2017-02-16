import logging
import threading
import timeit
import os
import psutil
import inspect
from pyramid.threadlocal import get_current_request

lock = threading.Lock()


"""Provides an ``includeme`` function that lets developers configure the
  package to be part of their Pyramid application with::

      config.include('pyramid_straw')

"""

logger = logging.getLogger(__name__)


def re_query(query, params):
    """Replace query params with actual parameters."""
    if type(params) is dict:
        for k, v in params.items():
            query = query.replace('%({})s'.format(k), str(v))
    if type(params) is tuple:
        for v in params:
            query = query.replace('?', str(v), 1)
    return query


def sizeof_fmt(num, suffix='B'):
    """Format the bytes."""

    for unit in ['', 'Ki', 'Mi', 'Gi', 'Ti', 'Pi', 'Ei', 'Zi']:
        if abs(num) < 1024.0:
            return '{:.1f}{}{}'.format(num, unit, suffix)
        num /= 1024.0
    return '{:.1f}{}{}'.format(num, 'Yi', suffix)


def humanize(lines, only_paths):
    """Yield dict about location of calling function"""
    for x in lines:
        (f, filename, at, function, l, i) = x
        # Will skip any lines that are not included
        if not any([x in filename for x in only_paths]):
            continue

        yield {
            'filename': filename.strip(),
            'at': at,
            'function': function.strip()
        }


def get_used_memory():
    """Gets the non-shared memory about process."""
    process = psutil.Process(os.getpid())
    return process.memory_info().rss


def to_toolbar(data):
    """Inject analyzed data in request."""
    request = get_current_request()

    if not request and not getattr(request, 'straw_data', None):
        return

    with lock:
        request.straw_data.append(data)


def includeme(config):
    settings = config.registry.settings

    # Custom sender for reports, needs to be callable
    dsn_factory = settings.get('pyramid_straw.report_hook', None)

    # Enable or disable saving data to request based on debugtoolbar presence
    debug_toolbar = len(settings.get('debugtoolbar.panels', []))

    # Control the inspection of query
    disable_inspect = settings.get('pyramid_straw.disable_inspect', False)

    # For example src/my_project_name/models
    only_paths = settings.get('pyramid_straw.only_paths', [])

    try:
        from sqlalchemy import event
        from sqlalchemy.engine.base import Engine

        def _before(conn, cursor, query, params, context, execmany):
            setattr(context, 'straw_start_timer', timeit.default_timer())
            setattr(context, 'straw_start_memory', get_used_memory())

        def _after(conn, cursor, query, params, context, execmany):
            stop_timer = timeit.default_timer()
            duration = (stop_timer - context.straw_start_timer) * 1000
            memory = get_used_memory() - context.straw_start_memory
            data = {
                'type': 'cursor',
                'duration': duration,
                'memory': sizeof_fmt(memory),
                'query': re_query(query, params),
                'parameters': params,
                'lines': []
            }
            if not disable_inspect:
                lines = inspect.getouterframes(inspect.currentframe())
                # NOTE: introspection takes a bit so it will add about .3-.5ms
                # to query timing
                data['lines'] = humanize(lines, only_paths)
            if dsn_factory and callable(dsn_factory):
                dsn_factory(data)
            if debug_toolbar:
                to_toolbar(data)
        if dsn_factory or debug_toolbar:
            event.listen(Engine, 'before_cursor_execute', _before)
            event.listen(Engine, 'after_cursor_execute', _after)

            # Flow events
            event.listen(Engine, 'begin', lambda x: to_toolbar({'type': 'begin'}))  # noqa
            event.listen(Engine, 'commit', lambda x: to_toolbar({'type': 'commit'}))  # noqa
            event.listen(Engine, 'rollback', lambda x: to_toolbar({'type': 'rollback'}))  # noqa

    except ImportError:
        logger.warning('SQLAlchemy is not installed.')
