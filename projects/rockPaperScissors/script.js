const message = document.querySelector('.message');
const resultbox = document.querySelector('.resultbox');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
const winnerScores = [0, 0];
//add event listeners to buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', playGame);
}
function playGame(e) {
    //setup player's selection
    let playerSelection = e.target.innerText;
    //setup a random number to select for computer
    //selects a number between 0 and 1 (1 not-inclusive)
    let computerSelection = Math.random();
    //if computerSelection is less than .34, computer selects Rock
    if (computerSelection < .34) {
        computerSelection = 'Rock';
    } else if (computerSelection <= .67) {
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissors';
    }
    //setup a function to compare winners and return result
    let result = checkWinner(playerSelection, computerSelection);
    //output scores to the DOM
    if (result === 'Player') {
        result += ' wins!';
        winnerScores[0]++;
        resultbox.style.color = "#70ff1e"
    }
    if (result === 'Computer') {
        result += ' wins!';
        winnerScores[1]++;
        resultbox.style.color = "#ff1e70"
    }
    if (result === 'Draw') {
        result += '. It\'s a tie!'
        // resultbox.style.color = "#1e70ff"
        resultbox.style.color = "#ffffff"
    }
    //output player and computer's selections
    message.innerHTML = 'Player: <strong>' + playerSelection + '</strong> Computer: <strong>' + computerSelection + '</strong><br>';
    // messenger('Player: <strong>' + playerSelection + '</strong> Computer: <strong>' + computerSelection + '</strong><br>');
    //output result
    resultbox.innerHTML = result;
    //output score into Score DIV
    score.innerHTML = 'Player: [ ' + winnerScores[0] + ' ] Computer: [ ' + winnerScores[1] + ' ]';
    //change color
    if(winnerScores[0]==winnerScores[1]){
        score.style.color = "#ffffff";
    }else if(winnerScores[0]>winnerScores[1]){
        score.style.color = "#70ff1e";
    }else{
        score.style.color = "#ff1e70"
    }
}
function checkWinner(player, computer) {
    if (player === computer) {
        return 'Draw';
    }
    if (player === 'Rock') {
        if (computer === 'Paper') {
            return 'Computer';
        } else {
            return 'Player';
        }
    }
    if (player === 'Paper') {
        if (computer === 'Scissors') {
            return 'Computer';
        } else {
            return 'Player';
        }
    }
    if (player === 'Scissors') {
        if (computer === 'Rock') {
            return 'Computer';
        } else {
            return 'Player';
        }
    }
}
// function messenger(selectionMessage) {
//     message.innerHTML = selectionMessage;
// }