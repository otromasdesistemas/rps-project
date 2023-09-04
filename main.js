let getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3);
    if(choice == 0) {
      return "rock";
    }
    else if (choice == 1){
      return "paper";
    }
    else return "scissors";
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection == "rock" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "rock")
  ) return "Computer Win";

  else if (
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "rock" && computerSelection == "scissors")
  ) return "Player Win";

  else return "It's a Tie"
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
