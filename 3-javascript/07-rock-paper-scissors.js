const rockEl = document.querySelector('.js-rock');
rockEl.addEventListener('mousedown', () => {
  rockEl.classList.add('click-rock')
})
rockEl.addEventListener('mouseup', () => {
  rockEl.classList.remove('click-rock')
})

const paperEl = document.querySelector('.js-paper');
paperEl.addEventListener('mousedown', () => {
  paperEl.classList.add('click-paper')
})
paperEl.addEventListener('mouseup', () => {
  paperEl.classList.remove('click-paper')
})

const scissorsEl = document.querySelector('.js-scissors');
scissorsEl.addEventListener('mousedown', () => {
  scissorsEl.classList.add('click-scissors')
})
scissorsEl.addEventListener('mouseup', () => {
  scissorsEl.classList.remove('click-scissors');
})