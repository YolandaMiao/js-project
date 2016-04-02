$(document).one("pagecreate",function(){
	//show run
	showRun();
	
	// add handler
	$("#submitAdd").tap(addRun);
	
	// edit handler
	$("#submitEdit").tap(editRun);
	
	// set current handler, child selector is list, which is parent of editLink 
	$(".editLink").tap(setCurrentRun);
	
	// delete list item 
	$(".deleteLink").tap(deleteRun);

	// clear handler
	$("#clearRuns").tap(clearRuns);
	
	// create function to get the runs objects
	function getRunsObject() {
		// set runs array
		var runs = [];
		// get current runs from localStorage
		var currentRuns = localStorage.getItem("runs");
		
		// check localStorage
		if(currentRuns != null) {
			// set to runs
			var runs = JSON.parse(currentRuns);
		}
		
		// return runs object
		return runs.sort(function(a,b) {return new Date(b.date)-new Date(a.date)});
	}
	
	// create function to set the current run
	function setCurrentRun() {
		// get index of <li> element
		//var idx = $(this).index();
		
		// set local storage items
		localStorage.setItem("currentDate", $(this).data("date"));
		localStorage.setItem("currentMile", $(this).data("mile"));
		
		//insert form field
		$("#editDate").val(localStorage.getItem("currentDate"));
		$("#editMile").val(localStorage.getItem("currentMile"));
	}
	
	// create add function
	function addRun(){
		// get form values
		var mile = $("#addMile").val();
		var date = $("#addDate").val();
		
		// create run object
		var run ={
			mile: parseFloat(mile),
			date: date
		};
		
		// get the sorted runs objects
		var runs = getRunsObject();
		
		// add run object to runs array
		runs.push(run);
		
		alert("Run Added!");
		
		// set stringified run object to local storage(has to be string)
		localStorage.setItem("runs",JSON.stringify(runs));
		
		// redirect index page
		window.location.href = "index.html";
		
		return false;
	};
	
	//create show run function
	function showRun() {
		// get the sorted runs objects
		var runs = getRunsObject();
		
		//check if empty
		if (runs !="" && runs != null ) {
			// add list after filter table
			for(var i = 0; i < runs.length; i++) {
				$("<li class = 'ui-body-inherit ui-li-static'><strong>Distances: </strong>" + 
				runs[i]["mile"] + " mile <br><strong>Date: </strong>" + runs[i]["date"] + "<div class = control>" +
				"<a href = '#edit' class = 'editLink' data-mile = '"+ runs[i]["mile"]+ "' data-date = '" + runs[i]["date"]+
				"'>Edit</a>|<a href = '#' class = 'deleteLink' data-mile = '"+ runs[i]["mile"]+ "' data-date = '" + runs[i]["date"]+
				"'>Delete</a></div></li>").appendTo($("#stats"));
			}
		} else {
			$("#stats").html("<p>You have no logged runs</p>");
		}
	};
	
	function editRun() {
		// get current mile and date
		var runs = getRunsObject();
		
		var currentDate = localStorage.getItem("currentDate");
		var currentMile = localStorage.getItem("currentMile");
		
		// delete the current mile and date in the runs array
		for (var i = 0; i < runs.length; i++){
			if (currentDate == runs[i]["date"] && currentMile == runs[i]["mile"]) {
				runs.splice(i,1);
			}
		}
		
		// get form values
		var mile = $("#editMile").val();
		var date = $("#editDate").val();
		
		// create run object
		var updateRun ={
			mile: parseFloat(mile),
			date: date
		};
		
		// add run object to runs array
		runs.push(updateRun);
		
		alert("Run Edited!");
		
		// set stringified run object to local storage(has to be string)
		localStorage.setItem("runs",JSON.stringify(runs));
		
		// redirect index page
		window.location.href = "index.html";
		
		return false;
	};
	
	function deleteRun() {
		// set local storage items
		localStorage.setItem("currentDate", $(this).data("date"));
		localStorage.setItem("currentMile", $(this).data("mile"));
		
		// get current mile and date
		var runs = getRunsObject();
		
		var currentDate = localStorage.getItem("currentDate");
		var currentMile = localStorage.getItem("currentMile");
		
		// delete the current mile and date in the runs array
		for (var i = 0; i < runs.length; i++){
			if (currentDate == runs[i]["date"] && currentMile == runs[i]["mile"]) {
				runs.splice(i,1);
			}
		}
		
		alert("Run Deleted!");
		
		// set stringified run object to local storage(has to be string)
		localStorage.setItem("runs",JSON.stringify(runs));
		
		// redirect index page
		window.location.href = "index.html";
		
		return false;
	};
	
	function clearRuns() {
		localStorage.removeItem("runs");
		$('#stats').html('<p>You have no logged runs</p>');
	};
});