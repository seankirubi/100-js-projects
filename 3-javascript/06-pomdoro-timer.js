const startEl = document.getElementById('start');
const stopEl = document.getElementById('stop');
const resetEl = document.getElementById('reset');

let intervalId;
let isStartClicked = false;
let sec = '00';
let min = '25';


startEl.addEventListener('click', () => {
  if(!isStartClicked)startTimer();
  isStartClicked = true;
});

function displayTime(){
  const timerEl = document.getElementById('timer');
  console.log(timerEl)
  timerEl.innerText = `${min}:${sec}`;
}

function getTimeString(value){
   //.padStart - if the string is less than 2 characters pad/add 0 to the start.
  const valueInt = Number(value) - 1;
  const valueStr = valueInt.toString().padStart(2, '0');
  return valueStr
}

function startTimer(){

  intervalId = setInterval(() => {
    if (min === '00' && sec === '00'){
      alert('Time is up');
      resetTime();
      return null;
    }

    if(sec === 'undefined' || sec === '00'){
      sec = '59';
      min = getTimeString(min);
      displayTime();
    }else{
     sec = getTimeString(sec);
     displayTime()
    }
    
  }, 1000)
}

function resetTime(){
  sec = '00';
  min = '25';
  displayTime()
  clearInterval(intervalId);
  isStartClicked = false;
}

stopEl.addEventListener('click', () => {
  clearInterval(intervalId);
  isStartClicked = false;
})

resetEl.addEventListener('click', () => {
 resetTime();
})