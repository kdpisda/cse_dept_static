$(document).ready(function(){
	$.ajax({
		url : server + '/api/profile/students',
		crossDomain:true,
		success: function(data){
			if (data.success){
				var students = data.data;
				var div = '';
				for(i in students){
					div += '<tr>';
					div += '<td>' + i+1 + '</td>';
					div += '<td>' + students[i]['name'] + '</td>';
					div += '<td>' + students[i]['email'] + '</td>';
					div += '</tr>';
				}
				$("#students_table").html(div);
			}else{
				console.log("No students data present in the database");
				$("#info_table").hide();
				$("#info").html('<h3>Coming Soon</h3>');
			}
		},
		error: function(){
			console.log("An error occured");
			$("#info_table").hide();
			$("#info").html('<h3>Sorry an error occured!</h3>');
		}

	});
});