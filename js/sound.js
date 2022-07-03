export default function Sound() {
  let fire = new Audio('./Audio/fire.wav')
  let forest = new Audio('./Audio/forest.wav')
  let market = new Audio('./Audio/market.wav')
  let rain = new Audio('./Audio/Rain.wav')
  let end = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")


  function toggleSounds(sound) {
    let paused = sound.paused

    if (paused) {
      sound.play()
    } else {
      sound.pause()
    }
  }

  function finalSound() {
    end.play()
  }

  fire.loop = true
  forest.loop = true
  market.loop = true
  rain.loop = true


  return {
    fire,
    forest,
    market,
    rain,
    toggleSounds,
    finalSound
  }
}
