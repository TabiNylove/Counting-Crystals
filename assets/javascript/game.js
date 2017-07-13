$(document).ready(function(){

// VARIABLES

	var randomNum; // random number to be guessed (between 19-120)
	var userNum; // number the user adds together to reach random number
	var randomValue; // random value assigned to the buttons (between 1-12)
	var parseValue; // the 'randomValue' in integer form
	var gemButtons; // var to hold the buttons from html class
	var wins = 0; // number of wins
	var losses = 0; // number of losses
//===============================================================================

//RANDOM NUMBER

// for the top half of the randomNum div, set a random number between 19 and 120
// (if this is in a function will it work?)
	
	randomNum = Math.floor(Math.random() * (120 - 19) + 19);

		// show it in console
		console.log(randomNum);

		// show it in html
		$('#randomNum').html(randomNum);

//===============================================================================

// USER NUMBER

// user number will start out as zero
	userNum = 0;

		// show it in html
		$('#userNum').html(userNum);

//===============================================================================

// RESET

function reset() {
	// reset buttons and userNum 
		userNum = 0;
		randomNum = Math.floor(Math.random() * (120 - 19) + 19);
			$('#randomNum').html(randomNum);
		gem1(); gem2(); gem3(); gem4();

}
//===============================================================================

// WIN / LOSE

	function winLose () {

		// if the user's number matches the random number, add 1 point to wins in html
		if (userNum == randomNum) {
				$('#userNum').html(userNum);
				wins++;
				$('#wins').html("Wins: " + wins);
				// alert
				alert("You Win!");

				// reset buttons and userNum 
				reset();

		// if user's number is greater than random number, add 1 point to wins in html
		} else if (userNum > randomNum) {
				$('#userNum').html(userNum);
				losses++;
				$('#losses').html("Losses: " + losses);
				// alert
				alert("You Lose!");

				// reset buttons and userNum 
				reset();
		}
	}
//===============================================================================

// BUTTONS

	// grab all buttons from document using a class
	gemButtons = document.getElementsByClassName('btn');

	// for each button, assign a random value
	for (var i = 0; i < gemButtons.length; i++) {
			randomValue = Math.floor(Math.random() * (10 - 1) + 1);
			gemButtons[i].setAttribute("value", randomValue);
	}
	
	
	// on click, parse the random value and add it to 'userNum'
	$(".btn").on("click", function gem1() {
			// parseInt the value
			parseValue = parseInt($(this).attr("value"));
			// add the value to the userNum
			userNum = userNum + parseValue;
			console.log(userNum);
			// show the result in html
			$('#userNum').html(userNum);

			// call the win or lose function
			winLose();
			})

});