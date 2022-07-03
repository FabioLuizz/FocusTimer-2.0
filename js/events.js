import {
  buttonPlay,
  buttonStop,
  buttonAdd,
  buttonSub,
  fireButton,
  forestButton,
  marketButton,
  rainButton,
} from './elements.js'


export default function Events({ timer, sound }) {
  buttonPlay.addEventListener('click', function () {
    timer.countDown()
  })

  buttonStop.addEventListener('click', function () {
    timer.reset()
  })

  buttonAdd.addEventListener('click', function () {
    timer.increment()
  })

  buttonSub.addEventListener('click', function () {
    timer.decrement()
  })

  fireButton.addEventListener('click', function () {
    sound.toggleSounds(sound.fire)
    fireButton.classList.toggle('focus')
    forestButton.classList.remove('focus')
    marketButton.classList.remove('focus')
    rainButton.classList.remove('focus')
    sound.forest.pause()
    sound.market.pause()
    sound.rain.pause()
  })

  forestButton.addEventListener('click', function () {
    sound.toggleSounds(sound.forest)
    forestButton.classList.toggle('focus')
    marketButton.classList.remove('focus')
    rainButton.classList.remove('focus')
    fireButton.classList.remove('focus')
    sound.fire.pause()
    sound.market.pause()
    sound.rain.pause()
    
  })

  marketButton.addEventListener('click', function () {
    sound.toggleSounds(sound.market)
    marketButton.classList.toggle('focus')
    fireButton.classList.remove('focus')
    rainButton.classList.remove('focus')
    forestButton.classList.remove('focus')
    sound.fire.pause()
    sound.forest.pause()
    sound.rain.pause()
  })

  rainButton.addEventListener('click', function () {
    sound.toggleSounds(sound.rain)
    rainButton.classList.toggle('focus')
    forestButton.classList.remove('focus')
    marketButton.classList.remove('focus')
    fireButton.classList.remove('focus')
    sound.forest.pause()
    sound.fire.pause()
    sound.market.pause()
  })
}
