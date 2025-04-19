import { data } from "../5-data/12-tabs.js";

const imageEl = document.getElementById('image');
const btnOneEl = document.getElementById('one');
const btnTwoEl = document.getElementById('two');
const btnThreeEl = document.getElementById('three');
const tabContent = document.querySelector('.tab-content');

const allButtons = document.querySelectorAll('button');

allButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const btnID = event.target.id;

    switch (btnID){
      case 'one':
         toggleClass(btnOneEl);
         renderTab('one')
      break;

      case 'two':
          toggleClass(btnTwoEl)
          renderTab('two')
      break;

      case 'three':
          toggleClass(btnThreeEl)
          renderTab('three')
      break;
      default:
        console.log('error at event.target.id');
    }
   
    })
    
  })

function getTabDetails(id){
  const context = data.find(obj => obj.id === id);
  return context

}

function renderTab(id){
  const tabDetails = getTabDetails(id);
  console.log(id)
  console.log( tabDetails.content)
  imageEl.src = tabDetails.img;
  tabContent.innerText = tabDetails.content;
}

function toggleClass(el){
  allButtons.forEach(btn => btn.classList.remove('active'));
  el.classList.add('active');
}


