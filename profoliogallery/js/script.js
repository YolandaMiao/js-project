$(document).ready(function(){
	//click event and add class
	$("#tags li a").click(function(){		
		$("#tags li.current").removeClass("current");
		$(this).parent().addClass("current");
		
	//get the category name
	$("#heading").text($(this).text());
	
	//get and filter the image class name
	var category = $(this).text().toLowerCase().replace(" ","-");
	
	//filter the category
	if(category == "all-projects"){
		$("#gallery li.hidden").fadeIn("slow").removeClass("hidden");
	} else {
			$('#gallery li').each(function(){
				if(!$(this).hasClass(category)){
					$(this).hide().addClass("hidden");
				} else {
					$(this).fadeIn("slow").removeClass("hidden");
				}
			});
		}
		// Stop link behaviour
		return false;
	});
	
	//create mouse-enter event
	$("#gallery li").mouseenter(function(){
		//get data attributes
		var title = $(this).children().data("title");
		var desc = $(this).children().data("desc");
		
		//validation
		if (title == null) {
			title = "";
		}
		if (desc == null) {
			desc = "Click to enlarge";
		}
		
		//add overlay
		$(this).append("<div class = 'overlay'></div>");
		var overlay = $(this).children('.overlay');
		overlay.html("<h3>"+title+"</h3><p>"+desc+"</p>");
		overlay.fadeIn(800);
	});
	
	//create mouse-leave event
	$("#gallery li").mouseleave(function(){
		//get data attributes
		var title = $(this).children().data(title);
		var desc = $(this).children().data(desc);
		
		//add overlay
		$(this).children().append("<div class = 'overlay'></div>");
		var overlay = $(this).children('.overlay');
		overlay.fadeOut(800);
	});
});