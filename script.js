function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random()*options.length)].toLowerCase();
}

let playerSelection = "";
let computerSelection = ""; 

let user_score = 0;
let computer_score = 0;

function playRound(playerSelection, computerSelection) {
    
    playerSelection = prompt("Enter your selection:").toLowerCase();
    computerSelection = getComputerChoice();
    
    if (playerSelection === "rock" && computerSelection === "rock") {
        return result = "DRAW!";
    }

    else if (playerSelection === "rock" && computerSelection === "paper") {
        computer_score += 1;
        return result = "You lose! Paper beats rock :(";
    }

    else if (playerSelection === "rock" && computerSelection === "scissors") {
        user_score += 1;
        return result = "You win! Rock beats scissors";
    }

    else if (playerSelection === "paper" && computerSelection === "rock") {
        user_score += 1;
        return result = "You win! Paper beats rock!";
    }

    else if (playerSelection === "paper" && computerSelection === "paper") {
        return result = "DRAW!";
    }

    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computer_score += 1;
        return result = "You lose! Scissors beat paper :(";
    }

    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computer_score += 1;
        return result = "You lose! Rock beats scissors :(";
    }

    else if (playerSelection === "scissors" && computerSelection === "paper") {
        user_score += 1;
        return result = "You win! Scissors beat paper!";
    }

    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return result = "DRAW!";
    }

    else {
        return "Please make a valid selection!"
    }

    

}



function game() {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
        console.log(result);
    }
    console.log(`Computer score: ${computer_score}`)
    console.log(`User score: ${user_score}`)

    if (user_score > computer_score) {
        console.log("You win!!!")
    }

    else if (computer_score > user_score) {
        comsole.log("You lose :(((")
    }

    else {
        console.log("It's a draw...")
    }

    user_score = 0;
    computer_score = 0;

}