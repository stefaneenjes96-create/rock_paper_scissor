const moves = ["Rock", "Paper", "Scissor"];

function askToPlay() {
    const wantsToPlay = confirm("Welcome! would you like to rock-paper-scissor?");
    if (wantsToPlay) {
        playGame();
    } else {
        alert("Goodbye.");
    }
}

function explainRules() {
    alert("The rules are simple. You choose between rock, paper, scissor. rock beats scissor, paper beats rock and scissor beats paper. Best out of 5 wins.");
}

function playGame() {
    let rounds = 5;
    let humanScore = 0;
    let computerScore = 0;

    const wantRules = confirm("Do i need to explain he rules?");
    if (wantRules) explainRules();

    for (let  i = 0; i < rounds; i++) {
        alert(`Round ${i + 1}.`);
        playRound();
        if (i === rounds - 1) {
            console.log("who won?");
            if (humanScore > computerScore) {
                alert("You won the game!");
            } else if (computerScore < computerScore) {
                alert("You lost the game!");
            } else if (humanScore === computerScore) {
                alert("You tied");
            }
        }
    }


    function playRound() {
        const userChoice = getUserChoice();
        const computerChoice = getComputerChoice();

        if (userChoice === computerChoice) {
            alert(`Tied. You both chose ${userChoice}.`);
        } else if (userChoice === "Rock" && computerChoice === "Paper") {
            alert(`You lose. The computer chose paper.`);
            computerScore++;
        } else if (userChoice === "Rock" && computerChoice === "Scissor") {
            alert(`You won! The computer chose scissor.`);
            humanScore++;
        } else if (userChoice === "Paper" && computerChoice === "Rock") {
            alert(`You won! The computer chose rock.`);
            humanScore++;
        } else if (userChoice === "Paper" && computerChoice === "scissor") {
            alert(`You lose. The computer chose scissor.`);
            computerScore++;
        } else if (userChoice === "Scissor" && computerChoice === "Rock") {
            alert(`You lose. The computer chose rock.`);
            computerScore++;
        } else if (userChoice === "Scissor" && computerChoice === "Paper") {
            alert(`You win! The computer chose Paper.`);
        }

        alert(`The score is: You ${humanScore} / Computer ${computerScore}`);

        function getComputerChoice() {
        const randomNumber = Math.floor(Math.random() * 3);
        return moves[randomNumber];
        }

        //get users choice//
        function getUserChoice() {
            let userChoice = prompt("Ready to play? Choose wisely from: Rock, Paper or Scissor");
            userChoice = userChoice.toLowerCase();
            userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
            return userChoice;
        }


    }
            
}

askToPlay();