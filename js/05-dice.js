const btnEl = document.getElementById('.btn');
const diceEl = document.getElementById('dice');
const rollHistoryEl = document.getElementById('roll-history');
let historyList = [];

let diceGotten = '';
let i = 0;
let timeoutId;

function rollDice(){
  const rollResult = Math.floor(Math.random() * 6) + 1
  const diceFace = getDiceFace(rollResult);
  diceEl.innerHTML = diceFace;
  historyList.push(rollResult);

  updateRollHistory();
}

function updateRollHistory(){
  rollHistoryEl.innerHTML = "";
  for(let i = 0; i < historyList.length; i++){
    const listEl = document.createElement('li');
    listEl.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`

    rollHistoryEl.appendChild(listEl)
  }
 
}

function getDiceFace(rollResult){
  switch(rollResult){
    case 1:
    return "?#9856;";
    case 2:
    return "?#9857;";
    case 3:
    return "?#9858;";
    case 4:
    return "?#9859;";
    case 5:
    return "?#9860;";
    case 6:
    return "?#9861;";
    default:
      return "";
  }
}


btnEl.addEventListener('click', () => {
  diceEl.classList.add('animateDice');

  setTimeout(() => {
    diceEl.classList.remove('animateDice');
  }, 1000);
})


