$(document).ready(function(){
	$("#submit").click(function(){
		var name = $("#name").val();
		var shout = $("#shout_text").val();
		var date = new Date();
		var dataString = "name=" + name + "&shout=" + shout + "&date=" + date;
	
		//validation
		if (name == "" || shout == "") {
			alert("Please fill the name and shout!");
		}
		else {
			$.ajax ({
				//Specifies the type of request. (GET or POST)
				type: "POST",
				//Specifies the URL to send the request to. Default is the current page
				url: "../jsshoutbox/shoutbox.php",
				//Specifies data to be sent to the server. Here pass the dataString to shoutbox.php
				data: dataString, 
				//A Boolean value indicating whether the browser should cache the requested pages. Default is true
				cache: false,
				//A function to be run when the request succeeds
				success: function(string){
					$("#sql_interface ul").prepend(string);
				}
		});
	}
	return false;
	});
});
