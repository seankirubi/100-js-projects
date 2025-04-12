
const clickEffects = [
  {selector: "rock", className: 'click-rock',},
  {selector: "paper", className: 'click-paper'},
  {selector: "scissors", className: 'click-scissors'}
];

// let userChoice;
// let compChoice;
let score = {comp:0, user:0};
const messageEl = document.querySelector('.message');
const compScoreEl = document.querySelector('.compScore');
const userScoreEl = document.querySelector('.userScore');
const compChoiceEl = document.querySelector('.computer-choice');
const userChoiceEl = document.querySelector('.your-choice');

clickEffects.forEach(({selector, className}) => {
  const element = document.querySelector(`.${selector}`);
  element.addEventListener('mousedown', () => element.classList.add(className)
  )
  element.addEventListener('mouseup', () => {
    setTimeout(() => {
      element.classList.remove(className)
    }, 500)
    
  })

  // element.addEventListener('click', () => {
  //   userChoice = element.dataset[selector]
  //   renderChoices()
  // })
})

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const compMove = computerChoice();
    userChoiceEl.innerHTML = '&#129308;'
    compChoiceEl.innerHTML = '&#129307;'
    setTimeout(() => {
      userChoiceEl.innerHTML = getEmoji(button.id)
      compChoiceEl.innerHTML = getEmoji(compMove);
      const result = playGame(button.id, compMove);
      messageEl.textContent = result;
    }, 500)
    

  })
})

function computerChoice(){
  const choices = ['rock', 'paper', 'scissors']
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
 }

function playGame(playerChoice, computerChoice){
  
  if (computerChoice === playerChoice){
    return `It's a tie!`
  }else if(
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ){
    score.user++;
    userScoreEl.textContent = score.user;

    return `${playerChoice} beats ${computerChoice} you win`

  }else{
    score.comp++;
    compScoreEl.textContent = score.comp;
    return `${playerChoice} doesn't beat ${computerChoice} you lose`;
  }
}

function getEmoji(value){
 switch(value){
  case 'rock':
    return '&#x1F44A;';
  case 'paper':
    return '&#x1f590;';
  case 'scissors':
    return '&#x270c;';
  default:
    return 'invalid value, .i.e value is not rock, paper or scissors'
 }
}

// function renderChoices(){
//   compChoice = computerChoice();
//   const message = compareChoices();
  
//   let user;
//   let comp;
//   if (message === 'win'){
//     score.user++;
//     console.log(score.user)
//   }else if(message === 'lose'){
//     score.comp++;
//   }

//   if (userChoice === 'rock'){
//     user = '&#128074;';
//   }else if (userChoice === 'paper'){
//     user = '&#9995;';
//   }else if (userChoice === 'scissors'){
//     user = '&#9996;';
//   }

//   if(compChoice === 'rock'){
//     comp = '&#128074;';
//   }else if(compChoice === 'paper'){
//     comp = '&#9995;';
//   }else if(compChoice === 'scissors'){
//     comp = '&#9996;';
//   }


//   document.querySelector('.your-choice')
//     .innerHTML = `&#129308;`;
//     document.querySelector('.computer-choice')
//     .innerHTML = `&#129307;`;
  
  
//   setTimeout(() => {
//     document.querySelector('.your-choice')
//     .innerHTML = user;
//     document.querySelector('.computer-choice')
//     .innerHTML = comp;
//     document.querySelector('.message')
//       .innerText = `You ${message}`;
//     document.querySelector('.compScore')
//       .innerText = score.comp;
//     document.querySelector('.userScore')
//       .innerText = score.user;
//   }, 500)
  
// }

// function compareChoices(){
//   console.log(userChoice, compChoice);
//   switch(userChoice){
//     case 'rock':
//       switch (compChoice) {
//         case 'rock':
//           return 'tie';
//         case 'paper':
//           return 'lose'
//         case 'scissors':
//           return 'win'
//           }
//       break;

//     case 'paper':
//       switch (compChoice) {
//         case 'rock':
//           return 'win';
//         case 'paper':
//           return 'tie'
//         case 'scissors':
//           return 'lose'
//           }
//       break;

//     case 'scissors':
//       switch (compChoice) {
//         case 'rock':
//           return 'lose';
//         case 'paper':
//           return 'win'
//         case 'scissors':
//           return 'tie'
//           }
//       break;
//   default:
//     console.log('invalid input');
