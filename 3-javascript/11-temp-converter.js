
const celciusEl = document.getElementById('cel');
const fahrenheitEl = document.getElementById('fahrenheit');
const kelvinEl = document.getElementById('kelvin');
const gradientEl = document.querySelector('.gradient');
const stickerEl = document.querySelector('.sticker-img');


let C;
let F;
let K;


celciusEl.addEventListener('change', (event) => {  
  C = Number(celciusEl.value);
  if(C > 100){
    gradientEl.classList.add('hot')
    gradientEl.classList.remove('cold');
    stickerEl.src ='../4-images/hot-stiker.gif';
  }else if(C < 10){
    gradientEl.classList.add('cold')
    gradientEl.classList.remove('hot');
    stickerEl.src ='../4-images/cold-sticker.gif';
  }else{
    gradientEl.classList.remove('hot');
    gradientEl.classList.remove('cold');
    stickerEl.src ='';
  }
  F = ((C * 9/5) + 32).toFixed(2);
  K = (C + 273.15).toFixed(2);


  fahrenheitEl.value = F;
  kelvinEl.value = K;

  console.log(C, F, K);
})
fahrenheitEl.addEventListener('change', () => {
  F = Number(fahrenheitEl.value);
  if(F > 212){
    gradientEl.classList.add('hot');
    gradientEl.classList.remove('cold');
    stickerEl.src ='../4-images/hot-stiker.gif';
  }else if(C < 50){
    gradientEl.classList.add('cold')
    gradientEl.classList.remove('hot');
    stickerEl.src ='../4-images/cold-sticker.gif';
  }else{
    gradientEl.classList.remove('hot');
    gradientEl.classList.remove('cold');
    stickerEl.src ='';
  }
  C = ((F - 32) * 5/9).toFixed(2);
  K =  (((F - 32) * 5/9) + 273.15).toFixed(2);

  celciusEl.value = C;
  kelvinEl.value = K;

  console.log(F, C, K);
})
kelvinEl.addEventListener('change', () => {
  K = kelvinEl.value;
  if(K > 373.15){
    gradientEl.classList.add('hot');
    gradientEl.classList.remove('cold');
    stickerEl.src ='../4-images/hot-stiker.gif';
  }else if(K < 283.15){
    gradientEl.classList.add('cold');
    gradientEl.classList.remove('hot');
    stickerEl.src ='../4-images/cold-sticker.gif';
  }else{
    gradientEl.classList.remove('hot');
    gradientEl.classList.remove('cold');
    stickerEl.src ='';
  }
  C = (K - 273.15).toFixed(2);
  F = ((K - 273.15) * 9/5 + 32).toFixed(2);

  celciusEl.value = C;
  fahrenheitEl.value = F;

  console.log(K , F, C);
})


