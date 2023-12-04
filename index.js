// let input = require('readline-sync');

//Creating two cards that hold a random number between 2 and 11
let firstCard = Math.floor(Math.random() * (11 - 2) + 2);
let secondCard = Math.floor(Math.random() * (11 - 2) + 2);
let nextCard = Math.floor(Math.random() * (11 - 2) + 2);

let isAlive = true;

let message = "";

let sum = firstCard + secondCard;
let hasBlackJack = false;
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector("#cards-el");
let newCard = document.querySelector("#new-card-el");
// console.log(messageEl);

function startGame(){
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Woohoo! You've got Blackjack";
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
    // console.log(message);
}

function newCard() {
    // console.log("Drawing a new card");
    // newCard.textContent = "New card: " + nextCard;
    sum += nextCard;
    startGame();
}

// console.log(sum);

// console.log(isAlive);



// console.log(firstCard, secondCard);

// console.log(sum);