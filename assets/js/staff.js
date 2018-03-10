$(document).ready(function(){
	$.ajax({
		url : server + '/api/profile/staff',
		crossDomain:true,
		success: function(data){
			if (data.success){
				var staff = data.data;
				var div = '';
				for(i in staff){
					div += '<tr>';
					div += '<td>' + i+1 + '</td>';
					div += '<td>' + staff[i]['name'] + '</td>';
					div += '<td>' + staff[i]['email'] + '</td>';
					div += '</tr>';
				}
				$("#staff_table").html(div);
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