// Grab html elements
var generatedNumber = document.getElementById('generatedNumb');
console.log(generatedNumber);

var wins = document.getElementById('wins');
console.log(wins);

var losses = document.getElementById('losses');
console.log(losses);

var jewels = document.getElementsByClassName('jewel');
console.log(jewels);

var totalScore = document.getElementById('totalScore');
console.log(totalScore);

//globle variables
var winsCounter = 0;
var lossesCounter = 0;

var targetNumber;

var userScore = 0;




//functions!

function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * max) + min;
}

//generate random values for crystals from 1-12
function jewelNumberAssignment(jewelArray) {
    for (var i = 0; i < jewelArray.length; i++) {
        jewelArray[i].value = randomNumberGenerator(1, 12);
    }
//generate a random number from 19 to 120
    targetNumber = randomNumberGenerator(19, 120);
}

var updateDisplay = function() {
    generatedNumber.innerHTML = targetNumber;
    wins.innerHTML = winsCounter;
    losses.innerHTML = lossesCounter;
    totalScore.innerHTML = userScore;
}

function restartGame(){
		userScore=0;
		$("#userScore").html(userScore);
		
		//assigns a random value betwen 1 and 12 for each button variable
		//generate a random number from 19 to 120
		jewelNumberAssignment(jewels)

}


$(document).ready(function() {
    jewelNumberAssignment(jewels);
    updateDisplay();

    $(jewels).on("click", function() {
        console.log(this);
        console.log(this.value);
        userScore = userScore + this.value;
        console.log(userScore);
        updateDisplay();

        if (userScore == targetNumber) {

            alert("You're a Winner!'");
            winsCounter++;
            $("#wins").html(wins);
            restartGame();
            updateDisplay();

        } 
        else if (userScore > targetNumber) {

            alert("Better Luck Next Time, Champ");
            lossesCounter++;
            $("#losses").html(losses);
            restartGame();
            updateDisplay();

        }
    })

})

