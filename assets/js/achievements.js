$(document).ready(function(){
	$.ajax({
		url : server + '/api/section/achievements',
		crossDomain:true,
		success: function(data){
			if (data.success){
				var achievements = data.data;
				var div = '';
				for(i in achievements){
					div += '<tr>';
					div += '<td>' + i+1 + '</td>';
					div += '<td>' + achievements[i]['user']['name'] + '</td>';
					div += '<td>' + achievements[i]['description'] + '</td>';
					div += '<td>' + achievements[i]['date'] + '</td>';
					div += '</tr>';
				}
				$("#achievements_table").html(div);
			}else{
				$("#info_table").hide();
				$("#info").html('<h3>Coming Soon</h3>');
				console.log("No achievements data present in the database");
			}
		},
		error: function(){
			console.log("An error occured");
			$("#info_table").hide();
			$("#info").html('<h3>Sorry an error occured!</h3>');
		}

	});
});