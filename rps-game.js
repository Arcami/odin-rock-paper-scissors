function getRandomNbr(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getComputerChoice() {
  let computerChoice = getRandomNbr(0, 2);
  if (computerChoice === 0) {
    return "Rock";
  } else if (computerChoice === 1) {
    return "Paper";
  } else if (computerChoice === 2) {
    return "Scissors";
  } else {
    throw new Error(
      "Unexpected choice: " +
        computerChoice +
        " <-- Values must fall between 0 and 2!"
    );
  }
}

function playRound(cC, pC) {
  switch (pC.toLowerCase()) {
    case "rock":
      if (cC.toLowerCase() === "rock") {
        return "It's a tie!";
      } else if (cC.toLowerCase() === "paper") {
        computerScore++;
        return "You lose this round. Paper beats Rock!";
      } else {
        playerScore++;
        return "You win this round. Rock beats Scissors!";
      }
    case "paper":
      if (cC.toLowerCase() === "rock") {
        playerScore++;
        return "You win this round. Paper beats Rock!";
      } else if (cC.toLowerCase() === "paper") {
        return "It's a tie!";
      } else {
        computerScore++;
        return "You lose this round. Scissors beats Paper!";
      }
    case "scissors":
      if (cC.toLowerCase() === "rock") {
        computerScore++;
        return "You lose this round. Rock beats Scissors!";
      } else if (cC.toLowerCase() === "paper") {
        playerScore++;
        return "You win this round. Scissors beats Paper!";
      } else {
        return "It's a tie!";
      }

    default:
      alert("Your input was unexpected! Finishing game...");
      throw new Error("Unexpected input");
  }
}
let playerScore = 0;
let computerScore = 0;
function game(turns) {
  if (isNaN(turns)) {
    alert("Unexpected number of rounds! Finishing the game...");
    throw new Error("Invalid input for rounds");
  } else if (turns === 0) {
    alert("Number of rounds can't be 0! Finishing the game...");
    throw new Error("Number of rounds was 0");
  }
  for (let i = 0; i < turns; i++) {
    alert(
      playRound(
        getComputerChoice(),
        prompt(`Round ${i + 1} out of ${turns}:\nRock, paper or scissors?`)
      )
    );
  }
  switch (true) {
    case playerScore === computerScore:
      alert(
        `Perfect tie! Neither wins or loses the game.\n\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`
      );
      break;
    case playerScore < computerScore:
      alert(
        `You've lost the game :(\n\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`
      );
      break;
    case playerScore > computerScore:
      alert(
        `You win the game! Congrats!\n\nPlayer score: ${playerScore}\nComputer score: ${computerScore}`
      );
      break;
    default:
      throw new Error("Error when counting the rounds!");
  }
}

game(
  parseInt(
    prompt(
      "Welcome to Rock-Paper-Scissors!\nHow many rounds do you want to play?"
    )
  )
);
