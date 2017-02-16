from pyramid.config import Configurator
from pyramid_debugtoolbar.utils import (
    EXC_ROUTE_NAME,
    ROOT_ROUTE_NAME,
    STATIC_PATH,
)
from pyramid_debugtoolbar.toolbar import IToolbarWSGIApp


def includeme(config):
    # mainly magic from pyramid_debugtoolbar just to overide
    # views in debugtoolbar app
    config.include('pyramid_debugtoolbar')
    config.commit()
    introspection = getattr(config, 'introspection', True)
    origin_app = config.registry.getUtility(IToolbarWSGIApp)
    new_app = make_application(origin_app.registry.settings, config.registry)
    config.registry.registerUtility(new_app, IToolbarWSGIApp)
    config.introspection = introspection


# original config, only chages - returns config instead of app
def make_application(settings, parent_registry):
    """ WSGI application for rendering the debug toolbar."""
    config = Configurator(settings=settings)
    config.registry.parent_registry = parent_registry
    config.include('pyramid_mako')
    config.add_mako_renderer('.dbtmako', settings_prefix='dbtmako.')
    config.add_static_view('static', STATIC_PATH)
    config.add_route(ROOT_ROUTE_NAME, '/', static=True)
    config.add_route('debugtoolbar.sse', '/sse')
    config.add_route('debugtoolbar.source', '/source')
    config.add_route('debugtoolbar.execute', '/execute')
    config.add_route('debugtoolbar.console', '/console')
    config.add_route('debugtoolbar.redirect', '/redirect')
    config.add_route(EXC_ROUTE_NAME, '/exception')
    config.add_route(
        'debugtoolbar.sql_select',
        '/{request_id}/sqlalchemy/select/{query_index}')
    config.add_route(
        'debugtoolbar.sql_explain',
        '/{request_id}/sqlalchemy/explain/{query_index}')
    config.add_route('debugtoolbar.request', '/{request_id}')
    config.add_route('debugtoolbar.main', '/')
    config.scan('pyramid_debugtoolbar.views')

    # overriding
    config.commit()
    config.add_static_view('pev-static', 'pyramid_straw.panel.debugpanel_wsgi_app:static/pev')  # noqa
    config.scan('pyramid_straw.panel.debugpanel_wsgi_app.views')
    config.override_asset(
        to_override='pyramid_debugtoolbar.panels:templates/sqlalchemy.dbtmako',
        override_with='pyramid_straw.panel.debugpanel_wsgi_app:templates/sqlalchemy.dbtmako'  # noqa
    )

    config.add_static_view('/_debug_toolbar/straw/static', 'pyramid_straw:static/', static=True)  # noqa

    return config.make_wsgi_app()
