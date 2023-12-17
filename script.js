// global variables
let playerScore = 0
let computerScore = 0
let results = document.querySelector(".results");
let playerResult = document.createElement("div");
let computerResult = document.createElement("div");
let selections = document.querySelectorAll(".selection");
let announcement = document.querySelector(".announcement");


// computer selection
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random() * options.length)]
}

// play a round of rps
function playRound(playerSelection, computerSelection) {
    // playerSelection = "rock"
    if (playerSelection == "rock" && computerSelection == "rock") {
        announcement.textContent ="You both picked rock, try again!"
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore += 1
        announcement.textContent ="Paper covers rock, you lose!"
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore += 1
        announcement.textContent ="Rock smashes scissors, you win!"
    } 
    // playerSelection = "paper"
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore += 1
        announcement.textContent ="Paper covers rock, you win!"
    } else if (playerSelection == "paper" && computerSelection == "paper"){
        announcement.textContent ="You both picked paper, try again!"
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore += 1
        announcement.textContent ="Scissors cuts paper, you lose!"
    }
    // playerSelection = "scissors"
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore += 1
        announcement.textContent ="Rock smashes scissors, you lose!"
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore += 1
        announcement.textContent ="Scissors cuts paper, you win!"
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        announcement.textContent ="You both picked scissors, try again!"
    }
}

// =================================
// UI STUFF
// =================================

// === Buttons ===
selections.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.value, getComputerChoice());
        playerResult.textContent = `Player: ${playerScore}`
        computerResult.textContent = `Computer: ${computerScore}`

        if (playerScore == 5 ) {
            announcement.textContent = "You have beaten the computer!"
            selections.forEach(e => e.remove())
        } else if (computerScore == 5) {
            announcement.textContent = "You lost to a computer...yeesh"
            selections.forEach(e => e.remove())
        }
    })
})

// === Scores ===
playerResult.className = "player-result";
computerResult.className = "computer-result";

playerResult.textContent = `Player: ${playerScore}`
computerResult.textContent = `Computer: ${computerScore}`

results.appendChild(playerResult)
results.appendChild(computerResult)