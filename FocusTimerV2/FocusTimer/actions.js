import state from "./state.js"
import * as timer from "./timer.js"
import * as audio from './sounds.js'

function pauseMusic(currentMusic){
const musics = [
  'forestSound',
  'rainSound',
  'coffeSound',
  'flameSound',
]

musics.forEach(music => {
  if(music !== currentMusic){
    audio[music].pause()
  }
})
}

export function toggleRunning(){
 state.isRunning = document.documentElement.classList.toggle('running')

 timer.countDown()
}


export function defaultTheme (){
  const app = document.body
  console.log('defaultheme')
 app.style.backgroundColor = 'white'
 pauseMusic()
}

export function forestSound(){
  const app = document.body
  if( app.style.backgroundColor == 'green'){
  defaultTheme()
 } else {
  
  app.style.backgroundColor = 'green'
  audio.forestSound.play()
  pauseMusic('forestSound')
 }
 
}

export function rainSound(){
  const app = document.body
if(app.style.backgroundColor == 'blue'){
  defaultTheme()
} else{
  app.style.backgroundColor = 'blue'
  audio.rainSound.play()
  pauseMusic('rainSound')
}

}

export function coffeSound(){
  const app = document.body
  if(app.style.backgroundColor == 'brown'){
    defaultTheme()
  }else{ app.style.backgroundColor = 'brown'
  audio.coffeSound.play()
  pauseMusic('coffeSound')}

}


export function flameSound(){
  const app = document.body
  if(app.style.backgroundColor == 'orange'){
    defaultTheme()
  } else{
    app.style.backgroundColor = 'orange'
    audio.flameSound.play()
    pauseMusic('flameSound')
  }
  
}

export function plusFive (){
  timer.plusFive()
  
}

export function minusFive (){
  timer.minusFive()

}