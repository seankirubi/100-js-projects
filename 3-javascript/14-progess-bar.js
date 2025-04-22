const containerEl = document.querySelector('.container');
const btnEl = document.querySelectorAll('button');
const progressIconEl = document.querySelectorAll('.progress-icon');
let i = 0;


btnEl.forEach(btn => {
  btn.addEventListener('click', (e) => {
    if(i < progressIconEl.length){
    console.log(progressIconEl[i], i)
    const progressEl = progressIconEl[i];
    progressEl.classList.add('progress-right')
    i++;
  }
    styleClick(btn, e.currentTarget.dataset.id)
  })

})

function styleClick(btn, side){
  btn.addEventListener('mousedown', () => {
    btn.classList.add(`click-${side}`)
  })
  btn.addEventListener('mouseup', () => {
    btn.classList.remove(`click-${side}`)
  })
}

console.log(btnEl)
// // btnEl.addEventListener('click', () => {
// //   containerEl.innerHTML = `
// //   <i class="fa-regular fa-circle-check" style="color: #9e9e9e;"></i>
// //   <p>
// //     Step 1
// //   </p>
// //   `
// //   setTimeout(() => {
// //     containerEl.innerHTML = `
// //     <i class="fa-regular fa-circle-check" style="color: #00a803;"></i>
// //     <p class="green">
// //     Step 1
// //     </p>
// //     `;
// //   }, 2000)
// // })
// btnEl.forEach(btn => {
//   btn.addEventListener('click', (e) => {
    
//     console.log(e.target.dataset.id)
//     changeState(e.target.dataset.id);
//   })
// })

// function changeState(btn){
//   let timeoutId = 0;
//   console.log(btn)
//   if(btn === 'right'){
//     clearTimeout(timeoutId);
//     containerEl.innerHTML = `
//     <i class="fa-regular fa-circle-check" style="color: #9e9e9e;"></i>
//     <p>
//       Step 1
//     </p>
//     `
//     timeoutId = setTimeout(() => {
//       containerEl.innerHTML = `
//       <i class="fa-regular fa-circle-check" style="color: #00a803;"></i>
//       <p class="green">
//       Step 1
//       </p>
//       `;
//     }, 2000)
//     }else{
//       containerEl.innerHTML = `
//       <i class="fa-regular fa-circle-xmark" style="color: #9e9e9e;"></i>
      
//     `
//     }

// }