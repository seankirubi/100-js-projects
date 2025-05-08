const stepArr = document.querySelectorAll('.step');
const nxtBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const frontBar = document.querySelector('.progress-bar-front');

let i = 0;

nxtBtn.addEventListener('click', () => {
  
  if (i < stepArr.length - 1){ 
    i++;
    let step = stepArr[i];
    step.classList.add('checked');
    step.innerHTML = ` <i class="fas fa-check"></i>  <small>Step ${i}</small>`;

    frontBar.style.width = i/4 * 100 + '%'

    prevBtn.disabled = false
    
    console.log(stepArr.length - 1);
   } ;


  
})
prevBtn.addEventListener('click', () => {
  if (i >= 1){

  let step = stepArr[i];
  step.classList.remove('checked');
  step.innerHTML = ` <i class="fas fa-times"></i>`;
  i--;
  frontBar.style.width = i/4 * 100 + '%'
  
}

if(i < 1){
  prevBtn.disabled = true;
}
})

const array = ['Sean', 'Kirubi', 'Nganga']
console.log(array.length)
