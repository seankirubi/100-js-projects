const startEl = document.querySelector('.start');
const stopEl = document.querySelector('.stop');
let isStartBtnClicked = false;
let isStopBtnClicked = false;




startEl.addEventListener("click", () => {
  startEl.disabled = true;
  stopEl.disabled = false;

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

  console.log(stopEl);
  console.log('stop button clicked')
})

console.log(startEl);
console.log(stopEl);