from pyramid.config import Configurator
from wsgiref.simple_server import make_server


class PyramidMicro(object):
    """PyramidMicro is supposed to setup minimal requirements
     that you can work on top of.

     Out of the box:
      - Jinja2
      - Bare HTTP server

    If the ``settings`` argument is passed, it should be a Python dictionary
    representing the :term:`deployment settings` for this application.  These
    are later retrievable using the
    :attr:`pyramid.registry.Registry.settings` attribute (aka
    ``request.registry.settings``).

     """
    def __init__(self, settings=None):
        self.config = Configurator()
        self.config.include("pyramid_jinja2")
        self.config.include("pyramid_sqlachemy")
        self.config.add_jinja2_renderer('.html')
        self.config.add_jinja2_search_path(
            'pyramid_straw:templates', name='.html')

    def run(self, port=8080, debug=True):
        httpd = self.config.make_wsgi_app()
        server = make_server('', port, httpd)
        sa = httpd.socket.getsockname()
        print('Serving HTTP on {0} port {1} ...'.format(*sa))
        import webbrowser
        webbrowser.open('http://localhost:{1}'.format(*sa))
        server.serve_forever()
