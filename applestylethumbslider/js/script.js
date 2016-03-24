$(document).ready(function(){
	//variable declaration
	var totalWidth = 0;
	var position = new Array();
	
	//get width and position of each slides
	$(".slide").each(function(i){
		position[i] = totalWidth;
		totalWidth += $(this).width();
	});
	if(!$(this).width()) alert("Please add width to your image slide!");
	
	//set total width to the slider
	$("#slides").width(totalWidth);
	
	//animate the movement of each slide by click menu bar
	$(".product a").click(function(event){
		//set initial class as inactive
		$(".product").removeClass("active").addClass("inactive");
		
		//add active class to the parent <li class = "product"> of current menu element
		$(this).parent().addClass("active");
		
		//find the index of the parent of the current menu element in the position array
		var pos = $(this).parent().index(".product");
		//or use "var pos  = $(this).parent().prevAll('.product').length;"
		
		//animate the slides, use merginLeft due to the relation of position and totalWidth
		$("#slides").stop().animate({marginLeft: - position[pos]+"px"},500);
		//stop() prevent autoscroll
		
		//prevent from last click
		event.preventDefault();
	});
	
	//stop autoScroll interval
	if(!autoScroll()) clearInterval(interval);
	
	//build autoscroll function
	//set the first slide active
	$(".product:first").addClass("active").siblings().removeClass("active");
	//set initial value to generate sutoScroll
	var current = 1;
	function autoScroll(){
		if (current == -1) return false;
		$(".product a").eq(current%$(".product a").length).trigger("click",[true]);
		current++;
	}
	
	//generate autoScroll interval
	var duration = 8;
	var interval = setInterval(function(){autoScroll()},duration*1000);
});