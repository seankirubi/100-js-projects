const billElement = document.querySelector('.js-bill');
const tipElement = document.querySelector('.js-tip');
const buttonElement = document.querySelector ('.js-btn');



buttonElement.addEventListener('click', (event) => {
  let total = '';
 const totalValue = Number(billElement.value) + Number(tipElement.value);
 total = totalValue.toFixed(2);
 document.querySelector('.js-totalPrice').innerText = total
})




