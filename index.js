const choices = ["Rock", "Paper", "Scissors"];
let rounds = 0;
let humanScore = 0;
let computerScore = 0;

const results = document.querySelector('#results');
const score = document.querySelector('#score');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

// Add event listeners for buttons
rock.addEventListener("click", function() { 
    getPlayerChoice("Rock");
});

paper.addEventListener("click", function() { 
    getPlayerChoice("Paper");
});

scissors.addEventListener("click", function() { 
    getPlayerChoice("Scissors");
});

function startNewGame() {
    rounds = 0;
    humanScore = 0;
    computerScore = 0;
    score.textContent = ''; 
    results.textContent = ''; 
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getPlayerChoice(humanChoice) {
    const computerChoice = getComputerChoice();

    // Clear previous results
    results.textContent = ''; 

    // Display computer choice
    const computerChoiceText = document.createElement('p');
    computerChoiceText.textContent = `Computer chose: ${computerChoice}`;
    results.appendChild(computerChoiceText);

    // Display player choice
    const playerChoiceText = document.createElement('p');
    playerChoiceText.textContent = `The player chose: ${humanChoice}`;
    results.appendChild(playerChoiceText);

    playRound(humanChoice, computerChoice); 
}

function getFinalScore() {
    let scoreMessage = `Final Scores - Player: ${humanScore}, Computer: ${computerScore}`;
    
    if (humanScore > computerScore) {
        scoreMessage += '\nThe player wins the game!';
    } else if (humanScore < computerScore) {
        scoreMessage += '\nThe computer wins the game!';
    } else {
        scoreMessage += '\nThe game is a tie!';
    }

    score.textContent = scoreMessage;

    // Style the score message
    score.style.color = "blue"; 
    score.style.fontSize = "20px"; 
    score.style.backgroundColor = "yellow"; 
    score.style.padding = "4px";

    // Reset the game after displaying the final score
    setTimeout(() => {
        results.textContent = '';
        score.textContent = 'Starting a new game...';
    }, 1000);

    setTimeout(() => {
        score.textContent = '';
        startNewGame();
    }, 3000);
}

function playRound(humanChoice, computerChoice) {
    let resultMessage;
    
    if (humanChoice === computerChoice) {
        resultMessage = 'This round is a draw.';
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Scissors" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Rock")
    ) {
        humanScore += 1; 
        resultMessage = `The player wins this round! The score is now: Player: ${humanScore} : Computer: ${computerScore}`;
    } else {
        computerScore += 1;
        resultMessage = `The computer wins this round! The score is now: Player: ${humanScore} : Computer: ${computerScore}`;
    }

    // Create a new paragraph for the round result
    const roundResultText = document.createElement('p');
    roundResultText.textContent = resultMessage;
    results.appendChild(roundResultText);

    rounds += 1; 

    if (rounds === 5) {
        getFinalScore();
    }
}