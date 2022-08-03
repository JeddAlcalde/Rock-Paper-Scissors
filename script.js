function getComputerChoice(){
    let num = Math.random() * (3-1) + 1;

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
    let cpuScore = 0;
    let playerScore = 0;
    for (let i = 0; i < 5; i++){
        console.log(i.toString());
        let rawInput = prompt("Please enter either \"rock\", \"paper\", or \"scissors\"");
        let computerSelection = getComputerChoice();
        let playerSelection = rawInput.toLowerCase();
        let win = playRound(playerSelection, computerSelection);
        
        if(win == "computer"){
            cpuScore++;
        }
        else if(win == "player"){
            playerScore++;
        }
        else{
        }
        console.log("The winner is " + win);
    }
    console.log("CPU Wins : " + cpuScore.toString());
    console.log("Player Wins : " + playerScore.toString());
}