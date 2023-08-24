
//function to return random choice for computer player
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*options.length)];
}

//variables to store celection of both players
let playerSelection = "";
let computerSelection = ""; 

//variables keeping track of the score
let user_score_track = 0;
let computer_score_track = 0;

//arrays holding X's as simple graphic for game played in console
let user_score_graphic = [];
let computer_score_graphic = [];

const results = document.getElementById('results');
results.textContent = "This is the space for results";

const whos_winner = document.getElementById('whos_winner');
whos_winner.textContent = "";

const user_score = document.getElementById("user_score");
const computer_score = document.getElementById("computer_score");

user_score.textContent = "USER SCORE: ";
computer_score.textContent = "COMPUTER SCORE: ";

const restart = document.getElementById("restart");
restart.style.visibility = "hidden";




//Play a round of game by taking selection for both players
function playRound(playerSelection, computerSelection) {

   // playerSelection = prompt("Enter your selection:").toLowerCase(); //make player's choics case insensitive
    computerSelection = getComputerChoice();

    console.log(playerSelection);
    console.log(computerSelection);
    
//define winning conditions for each of the combintions, return result, add score and score graphic 
    if (playerSelection === "rock" && computerSelection === "rock") {
        results.textContent = "DRAW!";
    }

    else if (playerSelection === "rock" && computerSelection === "paper") {
        computer_score.textContent += "X ";
        computer_score_track += 1;
        results.textContent = "You lose! Paper beats rock :(";
    }

    else if (playerSelection === "rock" && computerSelection === "scissors") {
        user_score.textContent += "X ";
        user_score_track += 1;
        results.textContent = "You win! Rock beats scissors";
    }

    else if (playerSelection === "paper" && computerSelection === "rock") {
        user_score.textContent += "X ";
        user_score_track += 1;
        results.textContent = "You win! Paper beats rock!";
    }

    else if (playerSelection === "paper" && computerSelection === "paper") {
        results.textContent = "DRAW!";
    }

    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computer_score.textContent += "X ";
        computer_score_track += 1;
        results.textContent = "You lose! Scissors beat paper :(";
    }

    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computer_score.textContent += "X ";
        computer_score_track += 1;
        results.textContent = "You lose! Rock beats scissors :(";
    }

    else if (playerSelection === "scissors" && computerSelection === "paper") {
        user_score.textContent += "X ";
        user_score_track += 1;
        results.textContent = "You win! Scissors beat paper!";
    }

    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        results.textContent = "DRAW!";
    }

 check_score();
    

};


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

const buttons = document.querySelectorAll('button');
const play_again = document.getElementById('restart');

play_again.addEventListener('click', (e) => {
    user_score_track = 0;
    computer_score_track = 0;

    user_score.textContent = "USER SCORE: ";
    computer_score.textContent = "COMPUTER SCORE: ";
    results.textContent = "This is the space for results";
    whos_winner.textContent = "";

    restart.style.visibility = "hidden";
    document.getElementById("interface").style.visibility = "visible";
});

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {

        playerSelection = `${e.target.id}`;
        //console.log(playerSelection)

        playRound(playerSelection, computerSelection);
    

    });
});

function check_score() {
    if (user_score_track == 5) {
        whos_winner.textContent = "You won!";
        document.getElementById("interface").style.visibility = "hidden";
        restart.style.visibility = "visible";

        }

    else if (computer_score_track == 5) {
        whos_winner.textContent = "Computer won!";
        document.getElementById("interface").style.visibility = "hidden";
        restart.style.visibility = "visible";

    }


};


