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
    let userScore = 0;
    let computerScore = 0;

    const wantRules = confirm("Do i need to explain he rules?");
    if (wantRules) explainRules();

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
            userScore++;
        } else if (userChoice === "Paper" && computerChoice === "Rock") {
            alert(`You won! The computer chose rock.`);
            userScore++;
        } else if (userChoice === "Paper" && computerChoice === "scissor") {
            alert(`You lose. The computer chose scissor.`);
            computerScore++;
        } else if (userChoice === "Scissor" && computerChoice === "Rock") {
            alert(`You lose. The computer chose rock.`);
            computerScore++;
        } else if (userChoice === "Scissor" && computerChoice === "Paper") {
            alert(`You win! The computer chose Paper.`);
        }

        alert(`The score is: You ${userScore} / Computer ${computerScore}`);

        function getComputerChoice() {
            const moves = ["Rock", "Paper", "Scissor"];
            const randomNumber = Math.floor(Math.random() * 3);
            return moves[randomNumber];
        }

        function getUserChoice() {
            let userChoice = prompt("Ready to play? Choose wisely from: Rock, Paper or Scissor");
            userChoice = userChoice.toLowerCase();
            userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
            return userChoice;
        }
    }         
}