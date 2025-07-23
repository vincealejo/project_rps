let computerScore = 0;
let humanSCore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber === 0) {
        return "rock";
    } else if(randomNumber === 1) {
        return "paper";
    } else if(randomNumber === 2) {
        return "scissors";
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Choose: rock, paper or scissors"); 
    return humanChoice;
}

