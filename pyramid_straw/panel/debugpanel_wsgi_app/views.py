from pyramid.httpexceptions import HTTPBadRequest
from pyramid.view import view_config

from pyramid_debugtoolbar.views import SQLAlchemyViews
from pyramid_debugtoolbar.utils import format_sql


class StrawSQLAlchemyViews(SQLAlchemyViews):

    @view_config(
        route_name='debugtoolbar.sql_explain',
        request_param='type=pev',
        renderer='json',
    )
    @view_config(
        route_name='debugtoolbar.sql_explain',
        renderer='pyramid_straw.panel.debugpanel_wsgi_app:templates/sqlalchemy_explain.dbtmako',  # noqa
    )
    def sql_explain(self):
        query_dict = self.find_query()
        stmt = query_dict['statement']
        engine_id = query_dict['engine_id']
        params = query_dict['parameters']

        if not engine_id:
            raise HTTPBadRequest('No valid database engine')

        engines = self.request.registry.parent_registry.pdtb_sqla_engines
        engine = engines[int(engine_id)]()

        pev = None
        if engine.name.startswith('postgresql'):
            query = 'EXPLAIN (ANALYZE, COSTS, VERBOSE, BUFFERS, FORMAT JSON) %s' % stmt  # noqa
            pev = engine.execute(query, params).fetchall()

        if engine.name.startswith('sqlite'):
            query = 'EXPLAIN QUERY PLAN %s' % stmt
        else:
            query = 'EXPLAIN %s' % stmt
        result = engine.execute(query, params)

        if self.request.params.get('type') == 'pev':
            return {
                'headers': result.keys(),
                'sql': stmt % params,
                'duration': float(query_dict['duration']),
                'pev': pev[0][0],
            }

        return {
            'result': result.fetchall(),
            'headers': result.keys(),
            'sql': format_sql(stmt),
            'str': str,
            'duration': float(query_dict['duration']),
            'is_pev_applicable': bool(pev),
        }
