// global variables
let playerScore = 0
let computerScore = 0

// computer selection
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random() * options.length)]
}

// player selection

// play a round of rps
function playRound(playerSelection, computerSelection) {
    // playerSelection = "rock"
    if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("You both picked rock, try again!")
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore =+ 1
        console.log("Paper covers rock, you lose!")
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore =+ 1
        console.log("Rock smashes paper, you win!")
    }
}

const playerSelection = "rock"
const computerSelection = getComputerChoice()

playRound(playerSelection, computerSelection)
// play a full match