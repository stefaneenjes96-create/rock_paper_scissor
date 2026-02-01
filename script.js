
/* 
Create a rock-paper-scissor game in the console.

1. Welcome player and ask if the user wants to play.
2. use a prompt thats ask for a yes or a no.
3. if user says no taunt the user into playing anyway.
4. if user says yes ask if he knows the rules.
5. explain rules if necesary.
6. start game 
done -------- ask user for move.
Done -------- 7. create a random move for the computer.
8. compare the moves and decide the result.
9. show result to user.
10. ask if they want to play again.
11. if yes repeat steps 6 trhough 10. 
12. else say goodbye.
*/

const moves = ["Rock", "Paper", "Scissor"];

//create random move for computer//
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    return moves[randomNumber];
}

//get users choice//
function getUserChoice() {
    let userChoice = prompt("Choose wisely from: Rock, Paper or Scissor");
    userChoice = userChoice.toLowerCase();
    userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
    console.log(userChoice);
}
