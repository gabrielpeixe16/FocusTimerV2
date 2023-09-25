import state from "./state.js";
import * as el from './elements.js'

export function countDown(){
  if(!state.isRunning){
    return
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if(seconds < 0){
    seconds = 59
    minutes--
  }

  if(minutes < 0){
    return
  }



  updateDisplay(minutes, seconds)
  setTimeout(() => countDown(), 1000)
}

export function updateDisplay(minutes, seconds){
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}

export function plusFive(){
el.minutes.textContent = Number(el.minutes.textContent) + 5

if(el.minutes.textContent > 60){
  el.minutes.textContent = 60
}
}

export function minusFive(){
 el.minutes.textContent = Number(el.minutes.textContent) - 5

  if(el.minutes.textContent < 0){
    el.minutes.textContent = 0
  }
}