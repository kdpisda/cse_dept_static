$(document).ready(function(){
	var final_div = '';
	$.ajax({
		url : server + '/api/profile/hod',
		crossDomain:true,
		success: function(data){
			if (data.success){
				var profiles = data.data;
				var div = '';
				for(i in profiles){
					div += '<div class="col-md-4">';
					div += '<div class="polaroid">';
					div += '<img src="'+ profiles[i]['avatar'] +'" alt="' + profiles[i]['name'] + '" style="width:100%;height:200px;">';
					div += '<div class="container">';
					div += '<p> <b>' + profiles[i]['name'] + '</b>';
					div += '<br>' + profiles[i]['bio'] + ' CSE(HOD)';
					div += '</p></div></div></div>';
				}
				final_div += div;
				// $("#permanent_faculties").html(div);
			}else{
				console.log("No hod present in the database");
			}
		},
		error: function(){
			console.log("An error occured");
		}

	});
	$.ajax({
		url : 'http://127.0.0.1:8000/api/profile/assistant',
		crossDomain:true,
		success: function(data){
			var div = '';
			if (data.success){
				var profiles = data.data;
				for(i in profiles){
					div += '<div class="col-md-4">';
					div += '<div class="polaroid">';
					div += '<img src="'+ profiles[i]['avatar'] +'" alt="' + profiles[i]['name'] + '" style="width:100%;height:200px;">';
					div += '<div class="container">';
					div += '<p> <b>' + profiles[i]['name'] + '</b>';
					div += '<br>' + profiles[i]['bio'];
					div += '</p></div></div></div>';
				}
				// var old  = $("#permanent_faculties").html()
				// old = '<div class="row">' + old + div + '</div>';
			}else{
				console.log("No assistant faculties present in the database");
			}
			final_div += div;
			final_div = '<div class="row">' + final_div + '</div>';
			console.log(final_div);
			$("#permanent_faculties").html(final_div);
		},
		error: function(){
			$("#permanent_faculties").html(final_div);	
			console.log("An error occured");
		}

	});
	$.ajax({
		url : 'http://127.0.0.1:8000/api/profile/temporary',
		crossDomain:true,
		success: function(data){
			if (data.success){
				var profiles = data.data;
				var div = '<div class="row">';
				for(i in profiles){
					div += '<div class="col-md-4">';
					div += '<div class="polaroid">';
					div += '<img src="'+ profiles[i]['avatar'] +'" alt="' + profiles[i]['name'] + '" style="width:100%;height:200px;">';
					div += '<div class="container">';
					div += '<p> <b>' + profiles[i]['name'] + '</b>';
					div += '<br>' + profiles[i]['bio'] + 'CSE(HOD)';
					div += '</p></div></div></div>';
				}
				div += '</div>';
				$("#temporary_faculties").html(div);
			}else{
				$("#temporary_faculties_heading").hide();
				console.log("No temporary faculties present in the database");
			}
		},
		error: function(){
			console.log("An error occured");
		}

	});
});