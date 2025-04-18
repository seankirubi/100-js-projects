import { data } from "../5-data/12-tabs.js";

const imageEl = document.getElementById('image');
const btnOneEl = document.getElementById('one');
const btnTwoEl = document.getElementById('two');
const btnThreeEl = document.getElementById('three');
const tabContent = document.querySelector('.tab-content');

const allButtons = document.querySelectorAll('button');

console.log(btnTwoEl.classList.value)

allButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    console.log(event.target.id);
    const btnID = event.target.id;

    switch (btnID){
      case 'one':
          btnOneEl.classList.add('active');
          btnTwoEl.classList.remove('active');
          btnThreeEl.classList.remove('active');
         renderTab('one')
      break;

      case 'two':
          btnTwoEl.classList.add('active');
          btnOneEl.classList.remove('active');
          btnThreeEl.classList.remove('active');
          renderTab('two')
      break;

      case 'three':
          btnThreeEl.classList.add('active');
          btnTwoEl.classList.remove('active');
          btnOneEl.classList.remove('active');
          renderTab('three')
      break;
      default:
        console.log('error at event.target.id')
        console.log(event.target.id)
    }
   
    })
    
  })

function getTabDetails(id){
  const context = data.find(obj => obj.id === id);
  console.log(context);
  return context

}

function renderTab(id){
  const tabDetails = getTabDetails(id);
  console.log(id)
  console.log( tabDetails.content)
  imageEl.src = tabDetails.img;
  tabContent.innerText = tabDetails.content;
}
// btnTwoEl.addEventListener('click', () => {
//   btnTwoEl.classList.add('active');
//   btnOneEl.classList.remove('active');
//   btnThreeEl.classList.remove('active');
// })

