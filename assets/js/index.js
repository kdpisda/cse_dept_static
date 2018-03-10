$(document).ready(function(){
	$.ajax({
		url : server+'/api/section/announcements',
		crossDomain:true,
		success: function(data){
			var announcements = data.data;
			var div = '<div class=\"row\">';
			for(i in announcements){
				div += '<div class="col-md-4 my-3">';
				div += '<img class="img-fluid d-block mb-4" src=" ' + announcements[i]['meta'] + ' ">';
				div += '<h5><b><a href="' + announcements[i]['link'] + '">' + announcements[i]['title'] + '</a></b></h5>';
				div += '<p class="mt-1">' + announcements[i]['description'] + '</p></div>';
			}
			div += "</div>";
			$("#news_section").html(div);
		},
		error: function(){
			console.log("An error occured");
		}

	});
});