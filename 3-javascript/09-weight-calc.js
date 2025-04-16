const inputEl = document.getElementById('input');
const weight = document.querySelector('.weight');
const errorMsg = document.querySelector('.error');

inputEl.addEventListener('input', (event) => {
  let inputValue = inputEl.value;
  if (inputValue < 0 || inputValue === '-'){
    errorMsg.innerText = 'Please enter a valid number';
    setTimeout(() => {
      errorMsg.innerText = ''
    }, 3000)
  }else{
  
  weight.innerText = intoKg(inputValue);
  setTimeout(() => {
    inputEl.value = '';
    weight.innerText = ''
  }, 10000);
}
   
} )

function intoKg(pounds){
  console.log('function -'+ pounds)
  const number = Number(pounds);
  
  let kg = (number * 0.45455).toFixed(2);
  console.log(kg);
  return kg;
 }
