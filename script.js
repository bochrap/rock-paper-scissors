
//function to return random choice for computer player
function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random()*options.length)].toLowerCase();
}

//variables to store celection of both players
let playerSelection = "";
let computerSelection = ""; 

//variables keeping track of the score
let user_score = 0;
let computer_score = 0;

//arrays holding X's as simple graphic for game played in console
let user_score_graphic = [];
let computer_score_graphic = [];

//Play a round of game by taking selection for both players
function playRound(playerSelection, computerSelection) {

    playerSelection = prompt("Enter your selection:").toLowerCase(); //make player's choics case insensitive
    computerSelection = getComputerChoice();
    
//define winning conditions for each of the combintions, return result, add score and score graphic 
    if (playerSelection === "rock" && computerSelection === "rock") {
        return result = "DRAW!";
    }

    else if (playerSelection === "rock" && computerSelection === "paper") {
        computer_score += 1;
        computer_score_graphic.push("X");
        return result = "You lose! Paper beats rock :(";
    }

    else if (playerSelection === "rock" && computerSelection === "scissors") {
        user_score += 1;
        user_score_graphic.push("X");
        return result = "You win! Rock beats scissors";
    }

    else if (playerSelection === "paper" && computerSelection === "rock") {
        user_score += 1;
        user_score_graphic.push("X");
        return result = "You win! Paper beats rock!";
    }

    else if (playerSelection === "paper" && computerSelection === "paper") {
        return result = "DRAW!";
    }

    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computer_score += 1;
        computer_score_graphic.push("X");
        return result = "You lose! Scissors beat paper :(";
    }

    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computer_score += 1;
        computer_score_graphic.push("X");
        return result = "You lose! Rock beats scissors :(";
    }

    else if (playerSelection === "scissors" && computerSelection === "paper") {
        user_score += 1;
        user_score_graphic.push("X");
        return result = "You win! Scissors beat paper!";
    }

    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return result = "DRAW!";
    }
//option in case player's selection is invalid
    else {
        return  result = "Please make a valid selection!";
    }

    

}


//plays 5 rounds of the game while displaying each round's resut and graphic plus the final result
function game() {
    clear();
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
        console.log(result);

        console.log(`User score: ${user_score_graphic}`)
        console.log(`Computer score: ${computer_score_graphic}`)
    }
    

    if (user_score > computer_score) {
        console.log("You win!!!")
    }

    else if (computer_score > user_score) {
        console.log("You lose :(((")
    }

    else {
        console.log("It's a draw...")
    }
//after game is finished reset all the scores
    user_score = 0;
    computer_score = 0;
    computer_score_graphic=[];
    user_score_graphic=[];

}