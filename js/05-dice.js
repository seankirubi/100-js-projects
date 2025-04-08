const btnEl = document.getElementById('.btn');
const diceEl = document.getElementById('dice');
let diceGotten = '';
let i = 0;
let timeoutId;


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