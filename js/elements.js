let buttonPlay = document.querySelector('.play')
let buttonStop = document.querySelector('.stop')
let buttonAdd = document.querySelector('.increment')
let buttonSub = document.querySelector('.decrement')
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let fireButton = document.querySelector('.fire')
let forestButton = document.querySelector('.forest')
let marketButton = document.querySelector('.market')
let rainButton = document.querySelector('.rain')
let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)

export {
  buttonPlay,
  buttonStop,
  buttonAdd,
  buttonSub, 
  minutesDisplay,
  secondsDisplay,
  fireButton,
  forestButton,
  marketButton,
  rainButton,
  minutes,
  seconds
}