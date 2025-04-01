const inputElm = document.querySelector('#date');
const btnElm = document.querySelector('.btn');

btnElm.addEventListener('click', () => {
  if (inputElm.value){
    const inputDate = new Date(inputElm.value);
    const inputMnth = inputDate.getMonth() + 1;
    const inputDay = inputDate.getDate();

    const today = new Date();
    const todayMnth = today.getMonth() + 1;
    const todayDate = today.getDate();
    
    const yearDiff =today.getFullYear() - inputDate.getFullYear();

    if ((inputMnth === todayMnth && inputDay <= todayDate) || inputMnth < todayMnth){
      displayAge(yearDiff);
    }else{
      displayAge(yearDiff - 1);
    } 

  }else{
    alert('Please enter date!');
   }
})

function displayAge(yearDiff){
  return document.querySelector('.js-age').innerText = `Your age is ${yearDiff} years old`;
}
