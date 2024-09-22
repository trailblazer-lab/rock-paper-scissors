
const choices = ["Rock", "Paper", "Scissors"];
let rounds = 0;
let humanScore = 0;
let computerScore = 0;


function alertMessage(message) {
    const alertBox = document.createElement('div');
    alertBox.innerHTML = message;
    alertBox.style.fontFamily = 'Arial';
    alertBox.style.fontSize = '26px';
    alertBox.style.padding = '10px';
    alertBox.style.opacity = 0;
    alertBox.style.border = '1px solid #ccc';
    alertBox.style.background = '#f0f0f0';
    alertBox.style.color = '#333';
    alertBox.style.width = '300px';
    alertBox.style.height = 'auto'; // Changed to auto
    alertBox.style.position = 'fixed';
    alertBox.style.top = '50%';
    alertBox.style.left = '50%';
    alertBox.style.transform = 'translate(-50%, -50%)';
    alertBox.style.zIndex = '1000'; // Ensure it appears above other content
    setTimeout(() => {
        alertBox.style.opacity = 1;
      }, 500);
    
    document.body.appendChild(alertBox);

    setTimeout(() => {
        document.body.removeChild(alertBox);
    }, 3000);
}


document.addEventListener('DOMContentLoaded', () => {
    alertMessage('Please, press F12 or Option + ⌘ + I to start the game.');
});


function startNewGame() {
    // Reset for a new game
    rounds = 0;
    humanScore = 0;
    computerScore = 0;
    
    // Start the game
    playGame();
}


document.addEventListener("keydown", function(event) {
    if (event.key === 'F12' || (event.key ===  'i' && event.metaKey && event.altKey)) {
        setTimeout(() => {
            if (isConsoleOpen()) {
                console.log('%cStarting the game...', 'color: blue; font-size: 20px; background-color: yellow; padding: 4px;');
                setTimeout(() => {
                    startNewGame();
                }, 2000);
            } else {
                console.log('%cPlease open the console to start the game.', 'color: blue; font-size: 20px; background-color: yellow; padding: 4px;');
            }
        }, 500); // Wait for 1 second (1000 milliseconds)
    }
});

// Function to check if the console is open
function isConsoleOpen() {
    // This method is a workaround to check for console open
    const devtools = /./; // A regular expression that matches anything
    console.log(devtools); // Attempt to log something to check if console is open
    return true; // Return true since we assume the function is called when the console is open
}


function getComputerChoice() {
   let choice = choices[Math.floor(Math.random() * choices.length)];
    console.log('%cThe computer chose: ' + choice, 'color: blue; font-size: 20px; background-color: yellow; padding: 4px;');
    return choice;
}

function getHumanChoice() {
    let input = prompt("Enter Rock, Paper, or Scissors");
    if (input !== null) {
        input = input.toLowerCase();
        console.log('%cThe player chose: ' + input, 'color: blue; font-size: 20px; background-color: yellow; padding: 4px;');
        return input.charAt(0).toUpperCase() + input.slice(1); // Capitalizes the first letter
       }
    else {console.log('%cPlayer did not make a choice.', 'color: blue; font-size: 20px; background-color: yellow; padding: 4px;') 
    }
  }

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('%cThis round is a draw.', 'color: blue; font-size: 20px; background-color: yellow; padding: 4px;');
    } else if (humanChoice === "Rock") {
        if (computerChoice === "Scissors") {
            humanScore += 1;
            console.log(`%cThe player wins this round! The score is now: Player: ${humanScore} : Computer: ${computerScore}`,
                'color: blue; font-size: 20px; background-color: yellow; padding: 4px;');
        } else {
            computerScore += 1;
            console.log(`%cThe computer wins this round! The score is now: Player: ${humanScore} : Computer: ${computerScore}`,
                'color: blue; font-size: 20px; background-color: yellow; padding: 4px;');
        }
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            humanScore += 1;
            console.log(`%cThe player wins this round! The score is now: Player: ${humanScore} : Computer: ${computerScore}`,
                'color: blue; font-size: 20px; background-color: yellow; padding: 4px;');
        } else {
            computerScore += 1;
            console.log(`%cThe computer wins this round! The score is now: Player: ${humanScore} : Computer: ${computerScore}`,
                'color: blue; font-size: 20px; background-color: yellow; padding: 4px;');
        }
    } else if (humanChoice === "Scissors") {
        if (computerChoice === "Paper") {
            humanScore += 1;
            console.log(`%cThe player wins this round! The score is now: Player: ${humanScore} : Computer: ${computerScore}`,
                'color: blue; font-size: 20px; background-color: yellow; padding: 4px;');
        } else {
            computerScore += 1;
            console.log(`%cThe computer wins this round! The score is now: Player: ${humanScore} : Computer: ${computerScore}`,
                'color: blue; font-size: 20px; background-color: yellow; padding: 4px;');
        }
    }
    
    rounds += 1; // Increment rounds after a complete round
}


function maxRounds() {
    if (rounds === 5) {
      console.log(`Final Scores - Player: ${humanScore}, Computer: ${computerScore}`);
      if (humanScore > computerScore) {
        console.log('%cThe player wins the game!', 'color: blue; font-size: 20px; background-color: yellow; padding: 4px;');
      } else if (humanScore < computerScore) {
        console.log('%cThe computer wins the game!', 'color: blue; font-size: 20px; background-color: yellow; padding: 4px;');
      } else if (humanChoice === computerChoice) {
        console.log('%cThe game is a tie!', 'color: blue; font-size: 20px; background-color: yellow; padding: 4px;');
      } setTimeout(() => {
        console.clear();
         }, 2000);
      }
  }



function playGame() {
    while (rounds < 5) {
        let humanChoice = getHumanChoice();
        if (humanChoice) { // Proceed only if a choice was made
            let computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
            maxRounds(); 
        }
    }
}