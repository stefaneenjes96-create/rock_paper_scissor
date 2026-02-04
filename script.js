const moveButtonsDiv = document.querySelector(".moveButtons");
const newGameButton = document.querySelector("#newGame");
const rulesButton = document.querySelector("#rules");
let playerScore = 0;
let computerScore = 0;

moveButtonsDiv.addEventListener("click", (event) => {
    compMove = computerMove();

    checkResult(event.target.id, compMove);
    changePlayerIcon(event.target.id, compMove);
})

newGameButton.addEventListener("click", () => resetScore());
rulesButton.addEventListener("click", () => showRules())

function changePlayerIcon(playerMove, computerMove) {
    const playerIconDiv = document.querySelector(".playerMove");
    const computerIconDiv = document.querySelector(".computerMove");

    changeIcon(playerIconDiv, playerMove);
    changeIcon(computerIconDiv, computerMove);

    function changeIcon(entity, move) {
        entity.textContent = ""

        const img = document.createElement("img");

        if (move === "rock") {
            img.src = "images/coal.png";
        } else if (move === "paper") {
            img.src = "images/paper.png";
        } else if (move === "scissor") {
            img.src = "images/scissors.png";
        }

        entity.appendChild(img);
        shakeIcon(entity)
    }

    function shakeIcon(entity) {
        entity.classList.add("shake");
        entity.addEventListener("animationend", () => {
            entity.classList.remove("shake");
        }, { once: true})
    }

} 

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

function showRules() {
    const resultPara = document.querySelector("#result");
    resultPara.textContent = "Rock beats Scissor, Scissor beats Paper and Paper beats Rock."
}