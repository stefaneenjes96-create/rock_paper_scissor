const moveButtonsDiv = document.querySelector(".moveButtons");
const newGameButton = document.querySelector("#newGame");
let playerScore = 0;
let computerScore = 0;

moveButtonsDiv.addEventListener("click", (event) => {
    checkResult(event.target.id, computerMove());
})

newGameButton.addEventListener("click", () => resetScore());

function computerMove() {
    const rndNumber = Math.floor(Math.random() * 3);
    const moves = ["rock", "paper", "scissor"];
    
    return moves[rndNumber];
}

function checkResult(playerMove, computerMove) {
    const resultPara = document.getElementById("result");

    if (playerMove === computerMove) {
        resultPara.textContent = "Tied";
    } else if (playerMove === "rock" && computerMove === "paper") {
        lose();
    } else if (playerMove === "rock" && computerMove === "scissor") {
        win();
    } else if (playerMove === "paper" && computerMove === "rock") {
        win()
    } else if (playerMove === "paper" && computerMove === "scissor") {
        lose();
    } else if (playerMove === "scissor" && computerMove === "rock") {
        lose();
    } else if (playerMove === "scissor" && computerMove === "paper") {
        win();
    }

    function win() {
        resultPara.textContent = "You win";
        playerScore++;
        const playerScorePara = document.querySelector("#playerScore");
        playerScorePara.textContent = playerScore;
    }

    function lose() {
        resultPara.textContent = "Computer wins";
        computerScore++;
        const computerScorePara = document.querySelector("#computerScore");
        computerScorePara.textContent = computerScore;
    }
}
 
function resetScore() {
    playerScore = 0;
    computerScore = 0;
    const playerScorePara = document.querySelector("#playerScore");
    playerScorePara.textContent = playerScore;
    const computerScorePara = document.querySelector("#computerScore");
    computerScorePara.textContent = computerScore;
    const resultPara = document.querySelector("#result");
    resultPara.textContent = "";
}