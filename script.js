let btns = document.querySelectorAll("button");
let results = document.querySelector("div");
let arr = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

// Single Round
function playRound(playerSelection, computerSelection) {
  // Player Winning Scenarios
  if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    ++playerScore;
    results.textContent = `You win! ${playerSelection} beats ${computerSelection}.\nPlayer: ${playerScore} Computer: ${computerScore}`;
    // Player Losing Scenarios
  } else if (
    (computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "paper" && playerSelection == "rock") ||
    (computerSelection == "scissors" && playerSelection == "paper")
  ) {
    ++computerScore;
    results.textContent = `You Lose! ${computerSelection} beats ${playerSelection}.\nPlayer: ${playerScore} Computer: ${computerScore}`;
  } else {
    results.textContent = `It's A Tie.\nPlayer: ${playerScore} Computer: ${computerScore}`;
  }
}

btns.forEach((button) =>
  button.addEventListener("click", () => {
    let computerPlay = () =>
      arr[Math.floor(Math.random() * arr.length)].toLowerCase();
    let computerSelection = computerPlay();
    playerSelection = button.id;
    playRound(playerSelection, computerSelection);
  })
);
