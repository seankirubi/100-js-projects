import { testimonial } from "../data/01-testimonial-data.js";

let imageElement = document.querySelector('img');
let textElement = document.querySelector('.text');
let nameE1ement = document.querySelector('.name')
let i = 0;
updateTestimony()

function updateTestimony(){
  let {name, profile, text} = testimonial[i];
  

  imageElement.src = profile;
  nameE1ement.innerText = name;
  textElement.innerText = text;
  i++; 
  
  if (i === testimonial.length){
    i = 0;
  }
}

setInterval(() => {
  updateTestimony();
}, 5000)

