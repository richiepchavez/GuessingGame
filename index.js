// Here is how the game operates:

// 1. A winning number between 1-100 will be randomly generated.
// 2. The player inputs their guess in a text input field.
// 3. The player clicks a button to submit their guess.
// 4. If the player guesses the winning number, they win! Otherwise, they are allowed to try again.
// 5. The game should give a hint after each guess, letting them know whether to guess higher or lower as well as how close they are.
// 6. After five unsuccessful guesses, the game is over and the player loses.


const randomNumber = Math.floor(Math.random() * 100 + 1);
const input = document.querySelector('#players-input');
const button = document.querySelector('#submit');
const guess = document.querySelector('.guess');

//winner inputs guess by clicking button
let guessCount = 1;
const maxTries = 5;
let remainingTries = maxTries;
let guessedNumbers = [];
button.addEventListener("click", guessCheck)
// button.addEventListener("click", endGame)

function guessCheck(){
    let userGuess = input.value;
// user guess will get compared to randomNumber
 if(userGuess === randomNumber) {
    alert("congrats! you guessed the answer!");
    endGame();
 }
 else if (userGuess > randomNumber) {
    guessCount++;
    alert("Wrong guess! Try a smaller number");
    endGame();
 }
 else
 {
    guessCount++;
    alert("Wrong guess! Try a greater number!");
    endGame();
 }
}
console.log(randomNumber);


function endGame(){
let attempts = input.value;
guessedNumbers.push(attempts);
guessCount++;
// remainingTries--;
// if (guessCount > maxTries){
//     alert("Out of guesses!");
//     resetGame();
// }
// else if (isNaN(attempts)){
//     alert(attempts + "is not a number!");
// }
// }
// function resetGame(){
if (guessCount > 6){
    alert("Game Over")
}
}



    


// for (let i = guessCount; i < 6; i++){
//     if (guessCount === 6){
//         alert("Game OVER!!!!")
//     }
// }
// }
