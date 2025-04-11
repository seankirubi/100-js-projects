
const clickEffects = [
  {selector: "rock", className: 'click-rock',},
  {selector: "paper", className: 'click-paper'},
  {selector: "scissors", className: 'click-scissors'}
];

let userChoice;
let compChoice;
let score = {comp:0, user:0}

clickEffects.forEach(({selector, className}) => {
  const element = document.querySelector(`.${selector}`);
  element.addEventListener('mousedown', () => element.classList.add(className)
  )
  element.addEventListener('mouseup', () => {
    setTimeout(() => {
      element.classList.remove(className)
    }, 500)
    
  })

  element.addEventListener('click', () => {
    userChoice = element.dataset[selector]
    renderChoices()
  })
})



function computerChoice(){
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  console.log(randomNumber)

  switch(randomNumber){
    case 1:
      return 'rock';
    case 2:
      return 'paper';
    case 3:
      return 'scissors';
    default:
      return "Invalid choice";
  }
}

function renderChoices(){
  compChoice = computerChoice();
  const message = compareChoices();
  
  let user;
  let comp;
  if (message === 'win'){
    score.user++;
    console.log(score.user)
  }else if(message === 'lose'){
    score.comp++;
  }

  if (userChoice === 'rock'){
    user = '&#128074;';
  }else if (userChoice === 'paper'){
    user = '&#9995;';
  }else if (userChoice === 'scissors'){
    user = '&#9996;';
  }

  if(compChoice === 'rock'){
    comp = '&#128074;';
  }else if(compChoice === 'paper'){
    comp = '&#9995;';
  }else if(compChoice === 'scissors'){
    comp = '&#9996;';
  }


  document.querySelector('.your-choice')
    .innerHTML = `&#129308;`;
    document.querySelector('.computer-choice')
    .innerHTML = `&#129307;`;
  
  
  setTimeout(() => {
    document.querySelector('.your-choice')
    .innerHTML = user;
    document.querySelector('.computer-choice')
    .innerHTML = comp;
    document.querySelector('.message')
      .innerText = `You ${message}`;
    document.querySelector('.compScore')
      .innerText = score.comp;
    document.querySelector('.userScore')
      .innerText = score.user;
  }, 500)
  
}

function compareChoices(){
  console.log(userChoice, compChoice);
  switch(userChoice){
    case 'rock':
      switch (compChoice) {
        case 'rock':
          return 'tie';
        case 'paper':
          return 'lose'
        case 'scissors':
          return 'win'
          }
      break;

    case 'paper':
      switch (compChoice) {
        case 'rock':
          return 'win';
        case 'paper':
          return 'tie'
        case 'scissors':
          return 'lose'
          }
      break;

    case 'scissors':
      switch (compChoice) {
        case 'rock':
          return 'lose';
        case 'paper':
          return 'win'
        case 'scissors':
          return 'tie'
          }
      break;
  default:
    console.log('invalid input');
  }
}