import logging
import timeit
import os
import psutil
import requests
from pyramid.threadlocal import get_current_request

"""Provides an ``includeme`` function that lets developers configure the
  package to be part of their Pyramid application with::

      config.include('pyramid_straw')

"""

logger = logging.getLogger(__name__)


def re_query(query, params):
    """Replace query params with actual parameters."""
    for k,v in params.iteritems():
        query = query.replace('%({})s'.format(k), str(v))
    return query


def sizeof_fmt(num, suffix='B'):
    """Format the bytes."""
    for unit in ['', 'Ki', 'Mi', 'Gi', 'Ti', 'Pi', 'Ei', 'Zi']:
        if abs(num) < 1024.0:
            return '%3.1f%s%s'.format(num, unit, suffix)
        num /= 1024.0
    return '{}:.1f%s%s'.format(num, 'Yi', suffix)


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


def add_to_debug_toolbar(data):
    """Inject analyzed data in request."""
    request = get_current_request()
    if not request:
        return
    request.straw_data.append(data)


def includeme(config):
    settings = config.registry.settings

    # For example https://straw.io/060694b4b5cc2ed303db73f25ef604a8
    dsn = settings.get('pyramid_straw.dsn', None)

    # Enable or disable saving data to request based on debugtoolbar presence
    debug_toolbar = len(settings.get('debugtoolbar.panels', []))

    # For example src/my_project_name/models
    only_paths = settings.get('pyramid_straw.only_paths', [])

    try:
        import inspect
        from sqlalchemy import event
        from sqlalchemy.engine.base import Engine

        @event.listens_for(Engine, 'before_cursor_execute')
        def _before(conn, cursor, query, params, context, execmany):
            setattr(context, 'straw_start_timer', timeit.default_timer())
            setattr(context, 'straw_start_memory', get_used_memory())

        @event.listens_for(Engine, 'after_cursor_execute')
        def _after(conn, cursor, query, params, context, execmany):
            stop_timer = timeit.default_timer()
            duration = (stop_timer - context.straw_start_timer) * 1000
            memory = get_used_memory() - context.straw_start_memory
            lines = inspect.getouterframes(inspect.currentframe())

            data = {
                'duration': duration,
                'memory': sizeof_fmt(memory),
                'query': re_query(query, params),
                'parameters': params,
                'lines': humanize(lines, only_paths)
            }
            if dsn:
                requests.post(dsn, json=data)

            if debug_toolbar:
                add_to_debug_toolbar(data)

    except ImportError:
        logger.warning('SQLAlchemy is not installed.')

