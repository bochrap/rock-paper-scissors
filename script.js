function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random()*options.length)].toLowerCase();
}

let playerSelection = "";
let computerSelection = ""; 

function playRound(playerSelection, computerSelection) {
    
    playerSelection = prompt("Enter your selection:").toLowerCase();
    computerSelection = getComputerChoice();
    
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "DRAW!"
    }

    else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock :("
    }

    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors"
    }

    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock!"
    }

    else if (playerSelection === "paper" && computerSelection === "paper") {
        return "DRAW!"
    }

    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beat paper :("
    }

    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors :("
    }

    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beat paper!"
    }

    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "DRAW!"
    }

    else {
        return "Please make a valid selection!"
    }

    

}