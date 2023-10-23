let input = require("readline-sync");

//Creating two cards that hold a random number between 2 and 11
let firstCard = Math.floor(Math.random()*(11-2)+2);
let secondCard = Math.floor(Math.random()*(11-2)+2);

let sum = firstCard + secondCard;

while (sum < 22){
    let hitCommand = "Hit";
    let stayCommand = "Stay";
    let playersChoice = input.question("Would you like to hit or stay?");
    if (playersChoice === hitCommand.toLowerCase()){
        sum += Math.floor(Math.random()*(11-2)+2);
    } else if(playersChoice === stayCommand.toLowerCase()){
        break;
    } else {
        console.log("Sorry, that is not a command I know. Type 'Hit' or 'Stay' to keep playing. Type 'Stop' to stop");
    }
    if (sum < 21){
        console.log("Do you want to draw a new card?");
        
    }
}


// console.log(firstCard, secondCard);

// console.log(sum);