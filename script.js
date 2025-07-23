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

function playRound(humanChoice, computerChoice) {
    const humanChoiceLowerCased = humanChoice.toLowerCase();
    const computerChoiceLowerCased = computerChoice.toLowerCase();
    if(
        humanChoiceLowerCased === "paper" && computerChoiceLowerCased === "rock" ||
        humanChoiceLowerCased === "rock" && computerChoiceLowerCased === "scissors" ||
        humanChoiceLowerCased === "scissors" && computerChoiceLowerCased === "paper" 
    ) {
        humanSCore++;
        console.log(`${humanChoiceLowerCased.toUpperCase()} (winner) vs ${computerChoiceLowerCased.toUpperCase()}`);
        console.log(`You: ${humanSCore} | Computer: ${computerScore}`);
    } else if(humanChoiceLowerCased === computerChoiceLowerCased) {
        console.log(`${humanChoiceLowerCased.toUpperCase()} (draw) vs ${computerChoiceLowerCased.toUpperCase()} (draw)`);
        console.log(`You: ${humanSCore} | Computer: ${computerScore}`);
    } else {
        computerScore++
        console.log(`${humanChoiceLowerCased.toUpperCase()} vs ${computerChoiceLowerCased.toUpperCase()} (winner)`);
        console.log(`You: ${humanSCore} | Computer: ${computerScore}`);
    }
}

function playGame() {
    const rounds = 5;
    for(let i = 0; i < rounds; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if(humanSCore > computerScore) {
        console.log("You Win!!")
    } else if(computerScore > humanSCore) {
        console.log("Computer Wins!!");
    } else {
        console.log("Draw!")
    }
}

playGame();