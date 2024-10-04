
const choices = ["Rock", "Paper", "Scissors"];
let rounds = 0;
let humanScore = 0;
let computerScore = 0;

const results = document.querySelector('#results') 
const score = document.querySelector('#score')




rock.addEventListener("click", function() { 
    playerChoice("Rock");
});

paper.addEventListener("click", function() { 
    playerChoice("Paper");
});

scissors.addEventListener("click", function() { 
    playerChoice("Scissors");
});


function startNewGame() {
    // Reset for a new game
    rounds = 0;
    humanScore = 0;
    computerScore = 0;
}


function getComputerChoice() {
   let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playerChoice (humanChoice) {
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
} 

function getFinalScore (humanChoice, computerChoice) {
    let scoreMessage;
    
    if (rounds === 5) {
      scoreMessage = `Final Scores - Player: ${humanScore}, Computer: ${computerScore}`;
     if (humanScore > computerScore) {
        scoreMessage += '\nThe player wins the game!';
      } else if (humanScore < computerScore) {
        scoreMessage += '\nThe computer wins the game!';
      } else if (humanChoice === computerChoice) {
        scoreMessage += '\nThe game is a tie!';
      } 

      score.textContent = scoreMessage;
      
      score.style.color = "blue"; 
      score.style.fontSize = "20px"; 
      score.style.backgroundColor = "yellow"; 
      score.style.padding = "4px";

      setTimeout(() => {
        results.textContent = '';
        score.textContent = 'Starting a new game...';
        }, 1000);
    
       setTimeout(() => {
            score.textContent = '';
            startNewGame();
        }, 3000);


      }
    };


function playRound(humanChoice, computerChoice) {
    let resultMessage;
    if (humanChoice === computerChoice) {
        resultMessage = 'This round is a draw.';
    } else if (humanChoice === "Rock" && computerChoice === "Scissors" ||
              humanChoice === "Scissors" && computerChoice === "Paper" ||
              humanChoice === "Paper" && computerChoice === "Rock") {
                 humanScore += 1; 
                 resultMessage = `The player wins this round! The score is now: Player: ${humanScore} : Computer: ${computerScore}`;
                } else {
            computerScore += 1;
            resultMessage = `The computer wins this round! The score is now: Player: ${humanScore} : Computer: ${computerScore}`;
        }
    
        results.textContent = resultMessage;

        results.style.color = "blue"; 
        results.style.fontSize = "20px"; 
        results.style.backgroundColor = "yellow"; 
        results.style.padding = "4px";
    
    rounds += 1; // Increment rounds after a complete round

    if (rounds === 5) {getFinalScore(humanChoice, computerChoice);
    }
}