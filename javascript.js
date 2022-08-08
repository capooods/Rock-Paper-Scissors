const choices = ["rock", "paper", "scissor"];
let computerScore = 0;
let playerScore = 0;
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
};

function scoreTotal(result) {
    if (result > 0) {
        playerScore = playerScore + 1;
    } else if (result < 0) {
        computerScore = computerScore + 1;
    } else {
    }
}

function playRound(playerSelection, computerSelection) {
    console.log(`Player plays ${playerSelection}`);
    console.log(`Computer plays ${computerSelection}`);
    if (playerSelection === computerSelection) {
        console.log("It's a tie!")
        return 0;
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            console.log("Computer wins!");
            return -1;
        } else {
            console.log("Player wins!");
            return 1;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("Player wins!");
            return 1;
        } else {
            console.log("Computer wins!");
            return -1;
        }
    } else if (playerSelection === "scissor") {
        if (computerSelection === "rock") {
            console.log("Computer wins!");
            return -1;
        } else {
            console.log("Player wins!");
            return 1;
        }
    }
}

function game() {
    for (let i=0; i<5; i++) {
        computerSelection = getComputerChoice();
        let roundResult = parseInt(playRound(playerSelection, computerSelection));
        scoreTotal(roundResult);
        console.log(`Player score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
    }
    if (playerScore>0) {
        console.log("Player 1 wins the game!");
    } else {
        console.log("Computer wins the game!");
    }
    
}
const playerSelection = "rock";
game();