function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random()*options.length)].toLowerCase();
}

let playerSelection = "";
let computerSelection = ""; 

let round_n = 1;
let user_score = 0;
let computer_score = 0;

function playRound(playerSelection, computerSelection) {
    
    playerSelection = prompt("Enter your selection:").toLowerCase();
    computerSelection = getComputerChoice();
    
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "DRAW!"
    }

    else if (playerSelection === "rock" && computerSelection === "paper") {
        computer_score += 1;
        return "You lose! Paper beats rock :("
    }

    else if (playerSelection === "rock" && computerSelection === "scissors") {
        user_score += 1;
        return "You win! Rock beats scissors"
    }

    else if (playerSelection === "paper" && computerSelection === "rock") {
        user_score += 1;
        return "You win! Paper beats rock!"
    }

    else if (playerSelection === "paper" && computerSelection === "paper") {
        return "DRAW!"
    }

    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computer_score += 1;
        return "You lose! Scissors beat paper :("
    }

    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computer_score += 1;
        return "You lose! Rock beats scissors :("
    }

    else if (playerSelection === "scissors" && computerSelection === "paper") {
        user_score += 1;
        return "You win! Scissors beat paper!"
    }

    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "DRAW!"
    }

    else {
        return "Please make a valid selection!"
    }

    

}



function game() {

}