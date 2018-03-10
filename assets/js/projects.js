$(document).ready(function(){
	$.ajax({
		url : server + '/api/section/projects',
		crossDomain:true,
		success: function(data){
			if (data.success){
				var projects = data.data;
				var div = '';
				for(i in projects){
					div += '<tr>';
					div += '<td>' + i+1 + '</td>';
					div += '<td>' + projects[i]['user']['name'] + '</td>';
					div += '<td>' + projects[i]['description'] + '</td>';
					div += '<td>' + projects[i]['start_date'] + '</td>';
					div += '<td>' + projects[i]['end_date'] + '</td>';
					div += '<td>' + projects[i]['ongoing'] + '</td>';
					div += '</tr>';
				}
				$("#projects_table").html(div);
			}else{
				$("#info_table").hide();
				$("#info").html('<h3>No Porjects in the database</h3>');
				console.log("No projects data present in the database");
			}
		},
		error: function(){
			console.log("An error occured");
			$("#info_table").hide();
			$("#info").html('<h3>Sorry an error occured!</h3>');
		}

	});
});