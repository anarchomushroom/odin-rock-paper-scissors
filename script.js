// global variables
let playerScore = 0
let computerScore = 0

// computer selection
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random() * options.length)]
}

let computerSelection = getComputerChoice()

// player selection
let playerSelection = prompt("Choose rock, paper, or scissors.").toLowerCase()

// play a round of rps
function playRound(playerSelection, computerSelection) {
    // playerSelection = "rock"
    if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("You both picked rock, try again!")
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore += 1
        console.log("Paper covers rock, you lose!")
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore += 1
        console.log("Rock smashes scissors, you win!")
    } 
    // playerSelection = "paper"
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1
        console.log("Paper covers rock, you win!")
    } else if (playerSelection == "paper" && computerSelection == "paper"){
        console.log("You both picked paper, try again!")
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1
        console.log("Scissors cuts paper, you lose!")
    }
    // playerSelection = "scissors"
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1
        console.log("Rock smashes scissors, you lose!")
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore += 1
        console.log("Scissors cuts paper, you win!")
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You both picked scissors, try again!")
    }
}

playRound(playerSelection, computerSelection)
// play a full match