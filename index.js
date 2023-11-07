let input = require('readline-sync');

//Creating two cards that hold a random number between 2 and 11
let firstCard = Math.floor(Math.random() * (11 - 2) + 2);
let secondCard = Math.floor(Math.random() * (11 - 2) + 2);
let nextCard = Math.floor(Math.random() * (11 - 2) + 2);

let isAlive = true;

let message = "";

let sum = firstCard + secondCard;
let hasBlackJack = false;

// function blackjackCalc() {
//     let hitOrStand = input.question("Would you like to hit or stand?");
//     // let nextSum = 0;
//     if (sum <= 20) {
//         console.log("Your hand total is " + (sum + nextSum));
//         hitOrStand;
//         if (hitOrStand.toLowerCase() === "Hit"){
//             sum = sum + nextCard;
//             blackjackCalc;
//         }
//     } else if (sum === 21) {
//         console.log("Nice! Blackjack! 🎉");
//         hasBlackJack = true;
//         return;
//     } else {
//         console.log("Bust!");
//     }

if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
} else if (sum === 21) {
    message = "Woohoo! You've got Blackjack! 🎉";
} else {
    message = "You're out of the game!";
    isAlive = false;
}

console.log(sum);
console.log(message);
console.log(isAlive);



// console.log(firstCard, secondCard);

// console.log(sum);