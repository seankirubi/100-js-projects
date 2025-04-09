const startEl = document.getElementById('start');
let sec = 0;
let min = 25;


startEl.addEventListener('click', () => {
  setInterval(() => {
    if(sec === 'undefined' || sec === 0){
      sec = 59;
      min--;
      displayTime();
    }else{
    sec--;
    displayTime()
    }
    
  }, 1000)
});

function displayTime(){
  const timerEl = document.getElementById('timer');
  console.log(timerEl)
  timerEl.innerText = `${min}:${sec}`;
}

