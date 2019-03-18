var alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;
var lives = 9;
var loses = 0;
var cpuGuessEle = document.getElementById("cpuGuess");
var humGuessEle = document.getElementById("humGuess");
var winsEle = document.getElementById("wins");
var losesEle = document.getElementById("loses");
var livesEle = document.getElementById("lives");

document.onkeyup = function (event) {
    var humGuess = event.key;
    var cpuGuess = alph[Math.floor(Math.random() * alph.length)];
    cpuGuessEle.innerHTML = cpuGuess;
    humGuessEle.innerHTML = humGuess;
    if (humGuess === cpuGuess) {
        wins++;
        console.log("You guessed correctly!");
        winsEle.innerHTML = wins;
    } else if (lives > 1) {
        lives--;
        console.log("You guessed incorrectly!");
        livesEle.innerHTML = lives;
    } else{
        lives = 9;
        loses++;
        console.log("You guessed incorrectly!");
        livesEle.innerHTML = lives;
        losesEle.innerHTML = loses;
    }
    }