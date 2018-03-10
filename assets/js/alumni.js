$(document).ready(function(){
	$.ajax({
		url : server + '/api/profile/alumnies',
		crossDomain:true,
		success: function(data){
			if (data.success){
				var alumni = data.data;
				var div = '';
				for(i in alumni){
					div += '<tr>';
					div += '<td>' + i+1 + '</td>';
					div += '<td>' + alumni[i]['name'] + '</td>';
					div += '<td>' + alumni[i]['email'] + '</td>';
					div += '</tr>';
				}
				$("#alumni_table").html(div);
			}else{
				$("#info_table").hide();
				$("#info").html('<h3>Coming Soon</h3>');
				console.log("No students data present in the database");
			}
		},
		error: function(){
			console.log("An error occured");
			$("#info_table").hide();
			$("#info").html('<h3>Sorry an error occured!</h3>');
		}

	});
});