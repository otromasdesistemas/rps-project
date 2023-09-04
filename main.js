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
  ) return "Player Win"
  else return "It's a Tie"
}

let playerPoints = 0;
let computerPoints = 0;

let game = () => {
  let round = 0;
  while (round < 5){
    const playerSelection = prompt("Choose: Rock, Paper or Scissors").toLocaleLowerCase();
    const computerSelection = getComputerChoice();

    const roundResult = playRound(playerSelection, computerSelection);

    if (roundResult == "Computer Win") {
      computerPoints += 1;
    }
    else if (roundResult == "Player Win") {
      playerPoints += 1;
    }
    round += 1;
  }

  if (playerPoints > computerPoints) return "Player Win";
  else if (playerPoints < computerPoints) return "Computer Win";
  else return console.log("It's a tie!");
}

console.log(game());
