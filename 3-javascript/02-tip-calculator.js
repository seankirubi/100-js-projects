const billElement = document.querySelector('.js-bill');
const tipElement = document.querySelector('.js-tip');
const buttonElement = document.querySelector ('.js-btn');



buttonElement.addEventListener('click', calculateTip)

function calculateTip(){
  const bilValue = Number(billElement.value);
  const tipValue = Number(tipElement.value);
  const totalValue =  bilValue + (bilValue * (tipValue / 100)) 
  document.querySelector('.js-totalPrice').innerText = totalValue.toFixed(2);
}


