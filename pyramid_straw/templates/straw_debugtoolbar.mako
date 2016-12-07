<table class="table table-striped" id="stats">
    <thead>
    <tr>
        <th><a class="sort" data-sort="res" href="#">Resources</a></th>
        <th><input class="search" placeholder="Filter query"/></th>
    </tr>
    </thead>
    <tbody class="list">
        % for query in queries:
            <tr>
                <td class="res">${'%.2f' % query['duration']}ms
                    / ${query['memory']}</td>
                <td>
                    <span class="highlight">
                        <div class="query">${format_sql(query['query']) | n}</div>
                    <button class="copy btn btn-xs" data-clipboard-text="${query['query'] | n}">
                        Copy
                    </button>
                    <button class="explain btn btn-xs" data-rawsql="${query['query'] | n}">
                        Explain
                    </button>
                    </span>

                    <div class="traceback">
                        % for line in query['lines']:
                            <p>
                                <a href="file://${line['filename']}:${line['at']}">${line['filename']}
                                    :${line['at']}</a><br><span
                                    class="slide">${line['function']}</span></p>
                        % endfor
                    </div>
                </td>
            </tr>
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

    .search {
        border: none;
        font-size: 1.2em
    }
</style>
<--! TODO: vendor static assets ——>
<script src="//cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.13/clipboard.min.js"></script>
<script src="//listjs.com/assets/javascripts/list.min.js"></script>
<script>
    var options = {
        valueNames: ['res', 'query']
    };

    new List('stats', options);
</script>
