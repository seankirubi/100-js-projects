const startEl = document.querySelector('.start');
const stopEl = document.querySelector('.stop');
const resetEl = document.querySelector('.reset');
const timerEl = document.querySelector('.timer');


let intervalId = null;

let centiSec = 0;
let sec = 0;
let min = 0;
let hrs = 0;




startEl.addEventListener("click", () => {
  startEl.disabled = true;
  stopEl.disabled = false;

  intervalId = setInterval(() => {
    centiSec++
    let centiSecString = getString(centiSec);
    let secString = getString(sec);
    let minString = getString(min);
    let hrsString = getString(hrs);
  
    if(centiSec === 99){
      sec++;
      centiSec = 0;
    }
    if(sec === 60){
      min++;
      sec = 0
    }
    if (min === 60){
      hrs++;
      min = 0;
    }
    timerEl.textContent = `${hrsString}:${minString}:${secString}:${centiSecString}`;
  }, 10);

  
  startEl.classList.add('click');
  stopEl.classList.remove('click');

  console.log(startEl); 
  console.log('start button clicked')
})
stopEl.addEventListener("click", () => {
  stopEl.disabled = true;
  startEl.disabled = false;

  stopEl.classList.add('click');
  startEl.classList.remove('click');

  clearInterval(intervalId)
  console.log(stopEl);
  console.log('stop button clicked')
})

resetEl.addEventListener('click', () => {
  clearInterval(intervalId)
  startEl.disabled = false;
  stopEl.disabled = false;
  startEl.classList.remove('click');
  stopEl.classList.remove('click');

  centiSec = 0;
  sec = 0;
  min = 0;
  hrs = 0;
  
  timerEl.textContent = `00:00:00`;
})
console.log(startEl);
console.log(stopEl);

function getString(time){
  return time.toString().padStart(2, '0');
}
console.log(Date.now())