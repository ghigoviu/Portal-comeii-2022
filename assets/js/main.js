$('.edica-header .dropdown').hover(function() {
  $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
}, function() {
  $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
});

$(document).ready(function(){
	$('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});
});

function displayHTMLTable(results) {
    var table = "<table class='table'>";
    var data = results.data;
	print("Este es el codigo de la tabla en javascript");
    for (i = 0; i < data.length; i++) {
        table += "<tr>";
        var row = data[i];
        var cells = row.join(",").split(",");

        for (j = 0; j < cells.length; j++) {
            table += "<td>";
            table += cells[j];
            table += "</td>";
        }
        table += "</tr>";
    }
    table += "</table>";

    $("#parsed_csv_list").html(table);
}

