//accordian
var action = "mouseenter";
var speed = "500";

$(document).ready(function (){
	//question handler
	$(".question").on(action,function (){
		$(this).next().slideToggle(speed).
		//select all other answers except the active
		siblings(".answer").slideUp();
	
		//get image for active question
		var img = $(this).children("img");
		//remove the 'rotate' class for all images except the active
		$("img").not(img).removeClass("rotate");
		//toggle rotate class
		img.toggleClass("rotate");
	});
});