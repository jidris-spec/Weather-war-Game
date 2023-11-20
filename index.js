const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choicebtn");
let player;
let computer;
let result;


function showPopup() {
  var modal = document.getElementById('myModal');
  modal.style.display = 'block';
}

function closePopup() {
  var modal = document.getElementById('myModal');
  modal.style.display = 'none';
}


choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "SUN";
        break;
      case 2:
        computer = "SNOW";
        break;
      case 3:
        computer = "RAIN";
        break;
    }
}
function checkWinner(){
    if(player == computer){
      return "Draw!";
    }
    else if(computer == "RAIN"){
        return (player == "SUN") ? "You Win!" : "You Lose!"
      }
    else if(computer == "SUN"){
      return (player == "PAPER") ? "You Win!" : "You Lose!"
    }
    else if(computer == "PAPER"){
      return (player == "RAIN") ? "You Win!" : "You Lose!"
    }
    
}

