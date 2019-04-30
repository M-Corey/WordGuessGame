//@ts-check
//when page loads game start
//user sees place holder for each letter they need to guess
//also see letters they have guessed so far
//how many guesses they have left

//game text
//press any key to start
//Game over, press any key to start over
//Congrats, press any key to start a again
var guessesRemaining = 10;
var currentletter;
var questionMarks = [];
var possibleWords = ["mercedes", "audi", "bmw", "toyota", "honda", "porsche", "mitsubishi", "volkswagen", "chevrolet"];
//var arrayOfBlanks = [];
var wordArray = [];
var guessesSoFar = [];
var previousGuesses = [];
//var computerChoice;
var playerChoice;

function computerChoice() {
    guessesRemaining = 10

    wordArray = possibleWords[Math.floor(Math.random() * possibleWords.length)].split("")
    arrayOfBlanks = []
    for (var i = 0; i < wordArray.length; i++) {
        arrayOfBlanks.push("_")
    }
    console.log(wordArray, arrayOfBlanks);
}
computerChoice();

function createQuestionMarks() {
    for (var i = 0; i < computerChoice.length; i++) {
        if (computerChoice[i] === "") {
            questionMarks.push("")
        }
    }
}
document.onkeyup = function (event) {
    var input = event.key;
    console.log(input);
    var match = false;

    if (input.length === 1 && /[a-z]/.test(input)) {
        for (var i = 0; i < computerChoice.length; i++) {
            if (input === computerChoice[i]) {
                questionMarks[i] = computerChoice[i];
                match = true;
            }
        }
        if (match) {
            if (playerChoice.includes(input)) {
                guessesRemaining--;
                guessesSoFar.push(input);
            }
        }
        //checkWin(); create function to see if last winning letter is played
        // updateScreen(); create function to see if you lost lass life
    }
}
function updateScreen() {
    document.getElementById("wins").textContent = wins;
    document.getElementById("guessesReamaing").textcontent = guessesRemaining;
    document.getElementById("losses").textcontent = losses;
    document.getElementById("questionMarks").textContent = questionMarks.join("");
    document.getElementById("guessesSoFar").textContent = guessesSoFar.join("");
}
function gameReset() {
    guessesRemaining = 10;
    questionMarks = [];
    createQuestionMarks();
    guessesSoFar = [];

    updateScreen();
}

function checkWin() {
    if (guessesRemaining === 0) {
        alert("Try Again");
        losses++;
        gameReset();
    }
    if (possibleWords === questionMarks.join("")) {
        alert("Congradulations! You Win!");
        wins++;
        gameReset();
    }

}





















//function computer() {
    //wordArray = possibleWords[Math.floor(Math.random() * possibleWords.length)].split("")
    //console.log(wordArray);
//}


//document.onkeyup = function (event) {
    //var userChoice = event.key;
    //console.log(userChoice);
//}


//f (userChoice === wordArray) {
    //alert(correct);
//}

//computer chooses from an array of anwsers randonly
//then displays  the placeholders in accordance with corrent anwser
//updates the DOM



//onkeyup reacts to key pressed and decided if its right or wrong

//figure out what key is pressed
//make sure user hit a letter key 
//check and see if its in the anwser (if key pressed)
//if it is in anwser change * to correct letter
//if last * turns in to last letter say congrats!
//start new game
// if not in anwser check lives remaing
// if lives remain, take one away and put in "wrong letter box"
//if no lives remain, say game over and play funny tune
// start new game


//when the user chooses a letter,
//do a for loop over wordArray
//compare eact letter in the array to the chosen letter
//if they are the same, change arrayOfBlanks[i] to the letter and wordArray[i] to a black
