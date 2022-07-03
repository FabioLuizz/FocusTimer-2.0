import Sound from './sound.js'
import Events from './events.js'
import Timer from './timer.js'
import {
  minutesDisplay,
  secondsDisplay,
  minutes,
  seconds
} from './elements.js'

const sound = Sound()

const timer = Timer({ minutesDisplay, secondsDisplay, minutes, seconds })

Events({timer, sound})

