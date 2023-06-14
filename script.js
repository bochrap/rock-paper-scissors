function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    return options[Math.floor(Math.random()*options.length)].toLowerCase();
}

let playerSelection = prompt("Enter your selection:").toLowerCase();
let computerSelection = getComputerChoice(); 

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
}