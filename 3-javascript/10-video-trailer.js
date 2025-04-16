const btnEl = document.querySelector('.btn');
const icon = document.querySelector('.x-icon');
const trailerContainer = document.querySelector('.trailer-container');

btnEl.addEventListener('click', () => {
  trailerContainer.classList.remove('active')
})
icon.addEventListener('click', () => {
  trailerContainer.classList.add('active');
})