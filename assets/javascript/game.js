$(document).ready(function(){

// VARIABLES

	var randomNum; // random number to be guessed
	var showRandomNum; // randomNum in html
	var userNum = 0; // number the user adds together to reach random number
	var showUserNum; // userNum in html
	var randomValue; // random value assigned to the buttons
	var valueArray = []; // when buttons are pushed, they are added to here
	var parseValue;
//===============================================================================

//RANDOM NUMBER

// for the top half of the randomNum div, set a random number between 19 and 120
	randomNum = Math.floor(Math.random() * (120 - 19) + 19);

		// show it in console
		console.log(randomNum);

		// show it in html
		showRandomNum = $('#randomNum').html(randomNum);
//===============================================================================

// BUTTONS

/* set a random number between 1 and 10 that will be used 
to determine the value of the crystals.*/

	randomValue = Math.floor(Math.random() * (10 - 1) + 1);

/*-------This ^^^ and the buttons are repeated so that randomValue will NOT be set as the
same number for all buttons. (i.e. '.btn' instead of '#gem1')-------*/

	// FIRST
	// set the value attribute on the buttons as the randomValue
	$("#gem1").attr("value", randomValue);
	console.log("#1: " + randomValue);

		// on click, parse the value and send it to 'valueArray'
		$("#gem1").on("click", function() {
				// parseInt the value
				parseValue = parseInt($(this).attr("value"));
				// send to array
				valueArray.push(parseValue);
				console.log(valueArray);
		})

	// SECOND
	// set the value attribute on the buttons as the randomValue
	randomValue = Math.floor(Math.random() * (10 - 1) + 1);
	$("#gem2").attr("value", randomValue);
	console.log("#2: " + randomValue);

		// on click, parse the value and send it to 'valueArray'
			$("#gem2").on("click", function() {
				// parseInt the value
				parseValue = parseInt($(this).attr("value"));
				// send to array
				valueArray.push(parseValue);
				console.log(valueArray);
		})

	// THIRD
	// set the value attribute on the buttons as the randomValue
	randomValue = Math.floor(Math.random() * (10 - 1) + 1);
	$("#gem3").attr("value", randomValue);
	console.log("#3: " + randomValue);

		// on click, parse the value and send it to 'valueArray'
			$("#gem3").on("click", function() {
				// parseInt the value
				parseValue = parseInt($(this).attr("value"));
				// send to array
				valueArray.push(parseValue);
				console.log(valueArray);
		})

	// FOURTH
	// set the value attribute on the buttons as the randomValue
	randomValue = Math.floor(Math.random() * (10 - 1) + 1);
	$("#gem4").attr("value", randomValue);
	console.log("#4: " + randomValue);

		// on click, parse the value and send it to 'valueArray'
			$("#gem4").on("click", function() {
				// parseInt the value
				parseValue = parseInt($(this).attr("value"));
				// send to array
				valueArray.push(parseValue);
				console.log(valueArray);

				// for (var i = 0; i < valueArray.length; i++) {
    // 			userNum += valueArray[i]; 
    // 			console.log(userNum);
				// }
			})
//===============================================================================

// USER NUMBER


// add each number in 'valueArray'
for (var i = 0; i < valueArray.length; i++) {
    userNum += valueArray[i]; 
    console.log(userNum);
}


});