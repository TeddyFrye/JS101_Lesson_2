const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if (
    (choice === "rock" &&
      (computerChoice === "scissors" || computerChoice === "lizard")) ||
    (choice === "paper" &&
      (computerChoice === "rock" || computerChoice === "spock")) ||
    (choice === "scissors" &&
      (computerChoice === "paper" || computerChoice === "lizard")) ||
    (choice === "lizard" &&
      (computerChoice === "spock" || computerChoice === "paper")) ||
    (choice === "spock" &&
      (computerChoice === "scissors" || computerChoice === "rock"))
  ) {
    prompt("You win!");
    return "player";
  } else if (
    (choice === "rock" &&
      (computerChoice === "paper" || computerChoice === "spock")) ||
    (choice === "paper" &&
      (computerChoice === "scissors" || computerChoice === "lizard")) ||
    (choice === "scissors" &&
      (computerChoice === "rock" || computerChoice === "spock")) ||
    (choice === "lizard" &&
      (computerChoice === "rock" || computerChoice === "scissors")) ||
    (choice === "spock" &&
      (computerChoice === "paper" || computerChoice === "lizard"))
  ) {
    prompt("Computer wins!");
    return "computer";
  } else {
    prompt("It's a tie!");
    return "tie";
  }
}

let playerWins = 0;
let computerWins = 0;

function updateScore(winner) {
  if (winner === "player") {
    playerWins += 1;
  } else if (winner === "computer") {
    computerWins += 1;
  }
}

function displayScore() {
  prompt(`Player score: ${playerWins}, Computer score: ${computerWins}`);
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(", ")}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  let roundResult = displayWinner(choice, computerChoice);
  updateScore(roundResult);
  displayScore();

  if (playerWins === 3 || computerWins === 3) {
    if (playerWins === 3) {
      prompt("Player wins the game!");
    } else {
      prompt("Computer wins the game!");
    }
    playerWins = 0;
    computerWins = 0;

    prompt("Do you want to play again (y/n)?");
    let answer = readline.question().toLowerCase();
    while (answer[0] !== "n" && answer[0] !== "y") {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }

    if (answer[0] !== "y") break;
  }
}
