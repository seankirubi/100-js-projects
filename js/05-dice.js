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
 
  clearTimeout(timeoutId);
  const randomNo = Math.random();
  
  diceEl.classList.add('animateDice');

  
   timeoutId = setTimeout(() => {
    diceEl.classList.remove('animateDice');

    if(randomNo >= 0 && randomNo <= 1/6){
      diceEl.innerText = '⚀';
      diceGotten = '⚀';
   }else if(randomNo > 2/6 && randomNo <= 3/6){
     diceEl.innerText = '⚁';
     diceGotten = '⚁';
    }else if(randomNo > 3/6 && randomNo <= 4/6){
      diceEl.innerText = '⚂';
      diceGotten = '⚂';
    }else if(randomNo > 4/6 && randomNo <= 5/6){
      diceEl.innerText = '⚃';
      diceGotten = '⚃';
   }else if(randomNo > 5/6 && randomNo <= 6/6){
      diceEl.innerText = '⚄';
      diceGotten = '⚄';
   }else{
      diceEl.innerText = '⚅';
      diceGotten = '⚅';
    }
    i++;
    displayHistory(diceGotten, i);
  }, 2000);


})

function displayHistory(dice, i){
  const historyEl = document.querySelector('.history');
  historyEl.innerHTML += `
   <div class="roll">
      <p class="histText">Roll ${i}:</p>
      <p class="diceHist">${dice}</p>
    </div>`;
}