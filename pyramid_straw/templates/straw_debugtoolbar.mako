<table class="table table-striped" id="stats">
    <thead>
    <tr>
        <th><a class="sort" data-sort="res" href="#">Resources</a></th>
        <th><input class="search query-input" placeholder="Filter query"/></th>
    </tr>
    </thead>
    <tbody class="list">
        % for query in queries:
            % if query['type'] == 'begin':
                <tr><td></td><td><span class="label label-success" style="width: 100%;">Begin</span></td></tr>
            % endif
            % if query['type'] == 'commit':
                <tr><td></td><td><span class="label label-success" style="width: 100%;">Commit</span></td></tr>
            % endif
            % if query['type'] == 'rollback':
                <tr><td></td><td><span class="label label-success" style="width: 100%;">Rollback</span></td></tr>
            % endif
            % if query['type'] == 'cursor':
            <tr>
                <td class="res">${'%.2f' % query['duration']}ms
                    / ${query['memory']}<br><br><br>
                    <button class="copy btn btn-xs" data-clipboard-text="${query['query'] | n}">
                        Copy
                    </button>
                    <button class="explain btn btn-xs" href="${route_url('debugtoolbar.sql_explain', request_id='1', query_index='1')}" data-target="#ExplainModal" data-toggle="modal">
                        Explain
                    </button>
                </td>
                <td>
                    <span class="highlight">
                        <div class="query">${format_sql(query['query']) | n}</div>
                    </span>

                    <div class="traceback">
                        % for line in query['lines']:
                            <p>
                                <a href="file://${line['filename']}:${line['at']}">${line['filename']}:${line['at']}</a><br><span
                                    class="slide">${line['function']}</span></p>
                        % endfor
                    </div>
                </td>
            </tr>
            % endif
        % endfor
    </tbody>
</table>
<style>
    .btn.copy, .btn.explain{
        margin-top: -1.7em;
    }
    .traceback {
        background: rgba(169, 169, 169, 0.22);
    }

    .slide {
        padding-left: 3em;
    }

    .query {
        color: #0C5404;
        font-size: larger;
    }

    .search.query-input {
        border: none;
        font-size: 1.2em
    }
</style>
<script src="${static_path}clipboard.min.js"></script>
<script src="${static_path}list.min.js"></script>
<script>
    var options = {
        valueNames: ['res', 'query']
    };

    new List('stats', options);
</script>
