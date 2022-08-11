function getComputerChoice(){
    min = Math.ceil(1);
    max = Math.floor(3);
    let num = Math.floor(Math.random() * (max - min + 1)) + min;

    if (num == 1){
        return "rock";
    } 
    else if(num == 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){
    let winner = "";

    if(playerSelection == "rock"){
        if(computerSelection == "rock"){
            winner = "No one";
        }
        else if(computerSelection == "paper"){
            winner = "computer";
        }
        else{
            winner = "player";
        }
    }

    else if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            winner = "player";
        }
        else if(computerSelection == "paper"){
            winner = "No one";
        }
        else{
            winner = "computer";
        }
    }

    else{
        if(computerSelection == "rock"){
            winner = "computer";
        }
        else if(computerSelection == "paper"){
            winner = "player";
        }
        else{
            winner = "No one";
        }
    }

    return winner;
}

function game(){
    console.log("Play the Game")
    for (let i = 0; i < 5; i++){
        console.log(i.toString());
        let rawInput = prompt("Please enter either \"rock\", \"paper\", or \"scissors\"");
        let computerSelection = getComputerChoice();
        let playerSelection = rawInput.toLowerCase();
        console.log(playerSelection);
        console.log(computerSelection);
        let win = playRound(playerSelection, computerSelection);
        console.log("The winner is " + win);
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", function(e) {
        alert(button.id);
        console.log(e);
        console.log(button.id);

        let playerSelect = e.id.toLowerCase;

        console.log(playerSelect);

        return playRound(playerSelect, getComputerChoice());
    })
});