$(document).ready(function(){

// VARIABLES

	var randomNum; // random number to be guessed (between 19-120)
	var userNum; // number the user adds together to reach random number
	var randomValue; // random value assigned to the buttons (between 1-12)
	var parseValue; // the 'randomValue' in integer form
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

// BUTTONS

/* set a random number between 1 and 10 that will be used 
to determine the value of the crystals.*/

	randomValue = Math.floor(Math.random() * (10 - 1) + 1);

/*-------This ^^^ and the buttons are repeated so that randomValue will NOT be set as the
same number for all buttons. (i.e. don't use '.btn' instead of '#gem1', ect.)-------*/

	// FIRST
	// set the value attribute on the buttons as the randomValue
	$("#gem1").attr("value", randomValue);
	console.log("#1: " + randomValue);

		// on click, parse the value and add it to 'userNum'
		$("#gem1").on("click", function gem1() {
				// parseInt the value
				parseValue = parseInt($(this).attr("value"));
				// add the value to the userNum
				userNum = userNum + parseValue;
				console.log(userNum);
				// show the result in html
				$('#userNum').html(userNum);

				// WIN / LOSE

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

		})

	// SECOND
	// set the value attribute on the buttons as the randomValue
	randomValue = Math.floor(Math.random() * (10 - 1) + 1);
	$("#gem2").attr("value", randomValue);
	console.log("#2: " + randomValue);

		// on click, parse the value and add it to 'userNum'
			$("#gem2").on("click", function gem2() {
				// parseInt the value
				parseValue = parseInt($(this).attr("value"));
				// add the value to the userNum
				userNum = userNum + parseValue;
				console.log(userNum);
				// show the result in html
				$('#userNum').html(userNum);

				// WIN / LOSE

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
		})

	// THIRD
	// set the value attribute on the buttons as the randomValue
	randomValue = Math.floor(Math.random() * (10 - 1) + 1);
	$("#gem3").attr("value", randomValue);
	console.log("#3: " + randomValue);

		// on click, parse the value and add it to 'userNum'
			$("#gem3").on("click", function gem3() {
				// parseInt the value
				parseValue = parseInt($(this).attr("value"));
				// add the value to the userNum
				userNum = userNum + parseValue;
				console.log(userNum);
				// show the result in html
				$('#userNum').html(userNum);

				// WIN / LOSE

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
		})

	// FOURTH
	// set the value attribute on the buttons as the randomValue
	randomValue = Math.floor(Math.random() * (10 - 1) + 1);
	$("#gem4").attr("value", randomValue);
	console.log("#4: " + randomValue);

		// on click, parse the value and add it to 'userNum'
			$("#gem4").on("click", function gem4() {
				// parseInt the value
				parseValue = parseInt($(this).attr("value"));
				// add the value to the userNum
				userNum = userNum + parseValue;
				console.log(userNum);
				// show the result in html
				$('#userNum').html(userNum);

				// WIN / LOSE

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
			})
//===============================================================================

// RESET

function reset() {
	// reset buttons and userNum 
		userNum = 0;
		randomNum = Math.floor(Math.random() * (120 - 19) + 19);
			$('#randomNum').html(randomNum);
		gem1(); gem2(); gem3(); gem4();

}

});