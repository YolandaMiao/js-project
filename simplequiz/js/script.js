function submitAnswers(){
	var total = 5;
	var score =0;
	
	//get user input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;

	//validation; PHP can make better validation on server side
	for(var i = 1; i <= total; i++){
		if(eval("q"+i)== null || eval("q"+i)== ""){//correct way to express qi
			alert("You missed question "+i);
			return false;
		//we normally submit to server using PHP, so we are not really submit anything by JS 
		}
	}
	
	//set correct answers
	var answers = ["b", "a", "d", "b", "d"];
	
	//check answers
	for(i = 1; i <= total; i++){
		if (eval("q"+i)==answers[i-1]){
			score++;
		}	
	}
	
	//display results
	var results = document.getElementById("results");
	results.innerHTML = "<h3> Your score is <span>"+score+"</span> out of <span>"+total+"</span></h3>";
	//alert("Your score is "+score+" out of "+total);
	
	return false;
}