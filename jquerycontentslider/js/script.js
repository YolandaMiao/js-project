$(document).ready(function(){
	//Set options
	var speed = 500; //fade speed in milliseconds
	var autoswitch = false; //auto slider options
	var autoswitch_speed = 3000; //auto slider speed
	
	//Add initial active class
	$(".slide:first").addClass("active");
	
	//Hide all slides
	$(".slide").hide();
	
	//Show first slide
	$(".active").show();
	
	//Click "next"
	$("#next").click(function(){nextSlide()});
	
	//Click "prev"
	$("#prev").click(function(){prevSlide()});
	
	//Auto slider
	if(autoswitch == true){
		setInterval(function(){nextSlide()},autoswitch_speed);
	}
	
	//Create function that switch to the next slide
	function nextSlide(){
		$(".active").removeClass("active").addClass("oldActive");
		if($(".oldActive").is(":last-child")){
			$(".slide:first").addClass("active");
		}
		else{
			$(".oldActive").next().addClass("active");
		}
		
		$(".oldActive").removeClass("oldActive");
		$(".slide").fadeOut(speed);
		$(".active").fadeIn(speed);
	}
	
	function prevSlide(){
		$(".active").removeClass("active").addClass("oldActive");
		if($(".oldActive").is(":first-child")){
			$(".slide:last").addClass("active");
		}
		else{
			$(".oldActive").prev().addClass("active");
		}
		
		$(".oldActive").removeClass("oldActive");
		$(".slide").fadeOut(speed);
		$(".active").fadeIn(speed);
	}
});