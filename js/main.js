var headers = ['Author', 'Title', 'Date Modified'];

function write_head(data){
	var th = $('<thead/>')
	var tr = $('<tr/>');
	jQuery.each(data, function(index, value) {
		tr.append('<th>'+this+'</th>');
	});
	$(th).append(tr);
    $('#books').append(th);
};

function write_table(json){
    var tr = $('<tbody/>');
    for (var i = 0; i < json.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + json[i].author + "</td>");
        tr.append("<td>" + json[i].title + "</td>");
        tr.append("<td>" + json[i].date + "</td>");
        $('#books').append(tr);
    }
};

function docready() {
	write_head(headers);
    write_table(books);
    $("#books").tablesorter( {sortList: [[2,0], [0,0]], widgets: ['zebra']} ); 
};