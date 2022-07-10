import Sound from "./sound.js"

export default function Timer({ minutesDisplay, secondsDisplay, minutes}) {

  let timeTimerout
  let newMinutes

  function updateDisplay(minutes, seconds) {
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function countDown() {
    timeTimerout = setTimeout(function () {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
      let finished = minutes <= 0 && seconds <= 0

      updateDisplay(minutes, 0)

      if (finished) {
        updateDisplay(minutes)
        Sound().finalSound()
        return
      }

      if (seconds <= 0) {
        seconds = 60  

        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      return countDown()
    }, 1000)
  }

  function reset() {
    clearTimeout(timeTimerout)
  }

  function increment() {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    minutes = minutes < 60 ? Number(minutes) + 5 : (minutes = 5)

    updateDisplay(minutes, seconds)
    updateMinutesDisplay(minutes)
  }

  function decrement() {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)

    minutes = minutes > 5 ? Number(minutes) - 5 : (minutes = 60)

    updateDisplay(minutes, seconds)
    updateMinutesDisplay(minutes)
  }

  function updateMinutesDisplay(minutes) {
    newMinutes = minutes
  }

  return {
    countDown,
    reset,
    increment,
    decrement,
    updateMinutesDisplay,
    newMinutes
  }
}
