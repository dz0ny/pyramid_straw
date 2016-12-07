from pyramid_straw.profiler import re_query

import unittest


class Test_helpers(unittest.TestCase):

    def test_query_rewriter(self):
        res = re_query('select %(key)s from db', {'key': 'id'})
        self.assertEquals(res, 'select id from db')

        res = re_query('select ? from db', ('id', 'port'))
        self.assertEquals(res, 'select id from db')
