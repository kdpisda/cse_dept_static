$(document).ready(function(){
	$.ajax({
		url : server + '/api/section/announcements',
		crossDomain:true,
		success: function(data){
			var announcements = data.data;
			var div = '';
			if(data.success){
				for(i in announcements){
					div += '<div class=\"row\">';
					div += '<div class="col-md-12 text-md-left text-center align-self-center my-10">';
					div += '<center><h2>' + announcements[i]['title'] + '</h2></center>';
					div += '<br><div class="media" id="mihir7">';
					div += '<div class="media-left">';
					div += '<img src="' + announcements[i]['meta'] + '" class="media-object" style="width:60px">';
					div += '</div><div class="media-body" id="mihir8">';
					div += '<h4 class="media-heading">'+ announcements[i]['title'] +'</h4>';
					div += '<p>' + announcements[i]['description'] + '</p>';
					div += '</div></div>';
				}
				$("#news_section").html(div);
			}else{
				console.log("Sorry no announcements");
				$("#news_section").hide();
				$("#info").html('<h3>Coming Soon</h3>');
			}
		},
		error: function(){
			console.log("An error occured");
			$("#news_section").hide();
			$("#info").html('<h3>Sorry an error occured!</h3>');
		}

	});
});