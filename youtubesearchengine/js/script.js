//searchbar handler
$(document).ready(function (){
	var searchText = $("#search-text");
	var icon = $("#submit-btn");
	
	//Focus event handler
	$(searchText).focus(function(){
        $(this).animate({width: '55%'},500);
		$(icon).animate({right:"330px"},500);
    });
	
	//Blur event handler
	$(searchText).blur(function(){
		if(searchText.val() == ""){
        $(this).animate({width: '45%'},500);
		$(icon).animate({right:"400px"},500);
		}
    });
	
	//stop the form from submitting
	$("#search-form").submit(function (event){
		event.preventDefault();
	});
});

//called after submitting search form
function search(){
	//clear results 
	$("#results").html("");
	$("#buttons").html("");
	
	//get form input
	q = $("#search-text").val();
	
	//run GET request on API
	$.get(
		"https://www.googleapis.com/youtube/v3/search",{
		q: q,
		part: 'snippet, id',
		type:'video',
		key:"AIzaSyC_sKFuTGuHJN7g3vDSX-fDDsn1je8Ce0w"},
		function(data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;
			
			//log data
			console.log(data);
			
			$(data.items).each(function(i,items){
				//get each output
				var output = getOutput(items);
				
				//display results
				$("#results").append(output);
			});
			
			//get and display buttons
			var buttons = getButtons(prevPageToken, nextPageToken);
			$("#buttons").append(buttons);
		}
	);
};
	
//build video output, called by search()
function getOutput(item){
	var videoId = item.id.videoId;
	var title = item.snippet.title;
	var description = item.snippet.description;
	var thumb = item.snippet.thumbnails.high.url;
	var channelTitle = item.snippet.channelTitle;
	var videoDate = item.snippet.publishedAt;
	
	//build output string
	var output = "<li>"+ "<div id = 'thumb'>" + 
	"<img src = '"+thumb+"'>" + "</div>" +
	"<div id = 'info'>"+ 
	"<h3><a class='fancybox fancybox.iframe' href='https://www.youtube.com/embed/"+videoId+"'>" +
	title + "</a></h3>" + "</h3>" + "<p><small>By <span id = 'cTitle'>" + channelTitle + "</span> on " +
	videoDate + "</small>" + "<br>" + description +"</p>" + "</div>" +
	"</li>" + " ";
	
	return output;
};
	
//build the buttons, called by search()	
function getButtons(prev, next){
	if(prev == null){
		var btnoutput = '<div class="button-container">'+
		'<button id="next-button" class="paging-button" data-token="'+
		next+'" data-query="'+q+'" onclick="nextPage();">' + 'Next Page</button></div>';
	}
	else{
		var btnoutput = '<div class="button-container">'+
		'<button id="prev-button" class="paging-button" data-token="'+
		prev+'" data-query="'+q+'" onclick="prevPage();">' + 'Prev Page</button>' +
		'<button id="next-button" class="paging-button" data-token="'+
		next+'" data-query="'+q+'" onclick="nextPage();">' + 'Next Page</button></div>';
	}
	return btnoutput;
};

//build nextPage function, called by getButtons()
function nextPage(){
	//get next-button data-token(refer to the function (data){} appeared in search())
	var token = $("#next-button").data("token");//Returns attached data from a selected element.
	
	//get next-button query input
	var q = $("#next-button").data("query");
	
	//clear results 
	$("#results").html("");
	$("#buttons").html("");
	
	//run GET request on API
	$.get(
		"https://www.googleapis.com/youtube/v3/search",{
		q: q,
		pageToken: token,
		part: 'snippet, id',
		type:'video',
		key:"AIzaSyC_sKFuTGuHJN7g3vDSX-fDDsn1je8Ce0w"},
		function(data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;
			
			//log data
			console.log(data);
			
			$(data.items).each(function(i,items){
				//get each output
				var output = getOutput(items);
				
				//display results
				$("#results").append(output);
			});
			
			//get and display buttons
			var buttons = getButtons(prevPageToken, nextPageToken);
			$("#buttons").append(buttons);
		}
	)
}

//build prevPage function, called by getButtons()
function prevPage(){
	//get prev-button data-token
	var token = $("#prev-button").data("token");
	
	//get prev-button query input
	var q = $("#prev-button").data("query");
	
	//clear results 
	$("#results").html("");
	$("#buttons").html("");
	
	//run GET request on API
	$.get(
		"https://www.googleapis.com/youtube/v3/search",{
		q: q,
		pageToken: token,
		part: 'snippet, id',
		type:'video',
		key:"AIzaSyC_sKFuTGuHJN7g3vDSX-fDDsn1je8Ce0w"},
		function(data){
			var nextPageToken = data.nextPageToken;
			var prevPageToken = data.prevPageToken;
			
			//log data
			console.log(data);
			
			$(data.items).each(function(i,items){
				//get each output
				var output = getOutput(items);
				
				//display results
				$("#results").append(output);
			});
			
			//get and display buttons
			var buttons = getButtons(prevPageToken, nextPageToken);
			$("#buttons").append(buttons);
		}
	)
}



