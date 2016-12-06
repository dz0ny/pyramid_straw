<table class="table table-striped" id="stats">
	<thead>
		<tr>
			<th>Resources <button class="sort" data-sort="res" style="display: inline-block;">Sort</button></th>
			<th>Query <input class="search" placeholder="Search" /></th>
		</tr>
	</thead>
	<tbody class="list">
	% for query in queries:
		<tr>
			<td class="res">${'%.2f' % query['duration']}ms / ${query['memory']}</td>
			<td><span class="query">${query['query']}</span>
                <div class="traceback">
                    % for line in query['lines']:
                        <p><a href="file://${line['filename']}:${line['at']}">${line['filename']}:${line['at']}</a><br><span class="slide">${line['function']}</span></p>
                    % endfor
                </div></td>
		</tr>
	% endfor
	</tbody>
</table>
<style>
.traceback{
    background: rgba(169, 169, 169, 0.22);
}
.slide{
    padding-left: 3em;
}
.query{
    color: #0C5404;
    font-size: larger;
}
</style>
<script src="http://listjs.com/assets/javascripts/list.min.js"></script>
<script>
var options = {
  valueNames: [ 'res', 'query' ]
};

var userList = new List('stats', options);
</script>
