$(document).ready(function(){
	$.ajax({
		url : server + '/api/section/team',
		crossDomain:true,
		success: function(data){
			if (data.success){
				var profiles = data.data;
				var div = '';
				for(i in profiles){
					div += '<div class="col-md-4">';
					div += '<div class="polaroid">';
					div += '<img src="'+ profiles[i]['user']['avatar'] +'" alt="' + profiles[i]['user']['name'] + '" style="width:100%;height:200px;">';
					div += '<div class="container">';
					div += '<p><b>'+ profiles[i]['user']['name'] +'</b></p>';
					div += '<p>'+ profiles[i]['position'] +'</p>';
					div += '</div>';
					div += '</div>';
					div += '</div>';
				}
				$("#team_row").html(div);
			}else{
				$("#info").html("<h1>Coming Soon!!!</h1>");
				console.log("Team details not present in the database");
			}
		},
		error: function(){
			$("#info").html("<h2>Sorry an error occured please try again later.</h2>");
			console.log("An error occured");
		}

	});
});