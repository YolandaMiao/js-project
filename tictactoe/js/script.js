$(document).ready(function(){
	// declare variables
	var x = "x";
	var o = "o";
	var turn = 0;
	
	var spot1 = $("#spot1");
	var spot2 = $("#spot2");
	var spot3 = $("#spot3");
	var spot4 = $("#spot4");
	var spot5 = $("#spot5");
	var spot6 = $("#spot6");
	var spot7 = $("#spot7");
	var spot8 = $("#spot8");
	var spot9 = $("#spot9");
	
	// create click function of <li> items
	$("#board li").click(function(){
		// check conditions before "o" start to add turns
		if (turn%2 == 0 && !($(this).hasClass("disable")) && !($(this).hasClass("noplay"))) {
			turn++;
			$(this).text(o);
			$(this).addClass("o");
			$(this).addClass("disable");
			
			// list all possibilities "o" wins
			if(spot1.hasClass("o") && spot2.hasClass("o") && spot3.hasClass("o") ||
			spot4.hasClass("o") && spot5.hasClass("o") && spot6.hasClass("o") ||
			spot7.hasClass("o") && spot8.hasClass("o") && spot9.hasClass("o") ||
			spot1.hasClass("o") && spot5.hasClass("o") && spot9.hasClass("o") ||
			spot3.hasClass("o") && spot5.hasClass("o") && spot7.hasClass("o") ||
			spot2.hasClass("o") && spot5.hasClass("o") && spot8.hasClass("o") ||
			spot1.hasClass("o") && spot4.hasClass("o") && spot7.hasClass("o") ||
			spot3.hasClass("o") && spot6.hasClass("o") && spot9.hasClass("o") 
			) {
				alert("Winner: o!");
				turn = 0;
				$("li").addClass("noplay");
			}
			if (turn == 9) alert("Tie Game");
		}	
	
		// check conditions before "x" start to add turns
		else if (turn%2 != 0 && !($(this).hasClass("disable"))&& !($(this).hasClass("noplay"))){
			turn++;
			$(this).text(x);
			$(this).addClass("x");
			$(this).addClass("disable");
			
			// list all possibilities "x" wins
			if(spot1.hasClass("x") && spot2.hasClass("x") && spot3.hasClass("x") ||
			spot4.hasClass("x") && spot5.hasClass("x") && spot6.hasClass("x") ||
			spot7.hasClass("x") && spot8.hasClass("x") && spot9.hasClass("x") ||
			spot1.hasClass("x") && spot5.hasClass("x") && spot9.hasClass("x") ||
			spot3.hasClass("x") && spot5.hasClass("x") && spot7.hasClass("x") ||
			spot2.hasClass("x") && spot5.hasClass("x") && spot8.hasClass("x") ||
			spot1.hasClass("x") && spot4.hasClass("x") && spot7.hasClass("x") ||
			spot3.hasClass("x") && spot6.hasClass("x") && spot9.hasClass("x") 
			) {
				alert("Winner: x!");
				turn = 0;
				$("li").addClass("noplay");
			}
			if (turn == 9) alert("Tie Game");
		}
		
		// generate disable class
		else if ($(this).hasClass("disable")) {
			alert("This spot has been filled!");
		}
		
		// generate noplay class
		else if ($(this).hasClass("noplay")) {
			alert("Please reset the game!");
		}
	});
	
	// define the reset button functions
	$("#reset").click(function(){
		$("#board li").text("+");
		$("#board li").removeClass("x");
		$("#board li").removeClass("o");
		$("#board li").removeClass("disable");
		$("#board li").removeClass("noplay");
		turn = 0;
	});
});