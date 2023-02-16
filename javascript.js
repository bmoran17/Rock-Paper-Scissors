function getComputerChoice(options){
    const randomIndex = Math.floor(Math.random() * options.length);
    const computerSelection = options[randomIndex];
    return computerSelection;
}

function singleRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a draw!"
    } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        return "You win! Rock beats scissors."
    } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        return "You lose! Scissors loses to rock."
    } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        return "You win! Paper beats rock."
    } else if ((playerSelection == "rock") && (computerSelection == "paper")) {
        return "You lose! Rock loses to rock."
    } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        return "You lose! Paper loses to scissors."
    } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        return "You win! Scissors beats paper."
    }
}

function game() {
    alert("Ready to play a 5 round game of Rock Paper Scissors?")
    let playerScore = 0, computerScore = 0;
    const options = ["rock", "paper", "scissors"];

    for (let i = 1; i <= 5; i ++) {
        computerSelection = getComputerChoice(options);
        let playerSelection;
        do {
            playerSelection = prompt(`Round ${i}: Make a selection (rock, paper, scissors): `).toLowerCase();
            console.log(options.indexOf(playerSelection))    

            if (options.includes(playerSelection)){
                break;
            } else {
                alert("Invalid input, make sure to input 'rock', 'paper', or 'scissors'.")
            }
        }
        while (true)


        roundResults = singleRound(playerSelection,computerSelection);

        if (roundResults.includes("You win!")) {
            playerScore += 1;
        } else if (roundResults.includes("You lose!")) {
            computerScore += 1;
        }

        alert(roundResults + "\nYour Score: " + playerScore);
    }
    if (playerScore == computerScore) {
        alert("Game is a draw! No winner.")
    } else if (playerScore > computerScore) {
        alert("Congrats! You have won this game of Rock Paper Scissors.\nYour score: " + playerScore+ " Computer score: " + computerScore); 
    } else if (playerScore < computerScore) {
        alert("You lost this game of Rock Paper Scissors, good luck next time.\nYour score: " + playerScore+ " Computer score: " + computerScore);
    }
}

game()