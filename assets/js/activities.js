$(document).ready(function(){
	$.ajax({
		url : server + '/api/section/activities',
		crossDomain:true,
		success: function(data){
			if (data.success){
				var activities = data.data;
				var div = '';
				for(i in activities){
					div += '<div class="feed-item">';
					div += '<div class="date">' + activities[i]['date'] + '</div>';
					div += '<div class="text"><a href="' + activities[i]['link'] + '">“' + activities[i]['title'] + '”</a></div>';
					div += '</div>';
				}
				$("#activities_feed").html(div);
			}else{
				console.log("No activities present in the database");
				$("#info_feed").hide();
				$("#info").html('<h3>No activity in the database</h3>');
			}
		},
		error: function(){
			$("#info_feed").hide();
			$("#info").html('<h3>Sorry an error occured!</h3>');
			console.log("An error occured");
		}

	});
});