let arr = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function game() {
  for (let i = 0; i < 5; i++) {
    let computerPlay = () =>
      arr[Math.floor(Math.random() * arr.length)].toLowerCase();
    let computerSelection = computerPlay();
    let playerSelection = prompt("Choose: Rock, Paper, or Scissors?");
    playerSelection = playerSelection.toLowerCase();

    // Runs playRound function
    console.log(playRound(playerSelection, computerSelection));
  }
  // After last loop, checks to see who has higher score; Outputs winner
  playerScore > computerScore
    ? console.log(
        `You won the game!\nPlayer: ${playerScore} Computer: ${computerScore}`
      )
    : playerScore < computerScore
    ? console.log(
        `You lost the game. Better luck next time!\nPlayer: ${playerScore} Computer: ${computerScore}`
      )
    : console.log(
        `Tie game. Play again.\nPlayer: ${playerScore} Computer: ${computerScore}`
      );
}

// Single Round
function playRound(playerSelection, computerSelection) {
  // Player Winning Scenarios
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    console.log(++playerScore);
    console.log(
      `You win! ${playerSelection} beats ${computerSelection}.\nPlayer: ${playerScore} Computer: ${computerScore}`
    );

    // Player Losing Scenarios
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    console.log(++computerScore);
    console.log(
      `You Lose! ${computerSelection} beats ${playerSelection}.\nPlayer: ${playerScore} Computer: ${computerScore}`
    );
  } else {
    console.log(
      `It's A Tie.\nPlayer: ${playerScore} Computer: ${computerScore}`
    );
  }
}

console.log(game());