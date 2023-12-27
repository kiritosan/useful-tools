import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { getObjState, getState } from './lib/stateBasic.js'
import EventManager from './lib/EventManager.js'
import { Renderer } from './lib/Renderer.js'
import { StateManager } from './lib/StateManager.js'

// const [state, setState] = getObjState('start')
// const [inputValue, setInputValue] = getObjState('')
// const [flag, setFlag] = getObjState(false)

const stateManager = new StateManager()
stateManager.add('state', 'start')
stateManager.add('inputValue', '')
stateManager.add('flag', false)

const eventManager = new EventManager()
eventManager.addEventHandler('#counter', [{
  eventName: 'click',
  handlerArr: [handler]
}])
eventManager.addEventHandler('#input', [{
  eventName: 'input',
  handlerArr: [inputHandler]
}])

function inputHandler(sm, e) {
  sm.set('inputValue', e.target.value)

  renderer.render()
}

// BUGFIX: 每执行一次，多执行一倍次数
function handler(sm, e) {
  console.log("🚀 ~ file: main.js:35 ~ handler ~ store:", sm)

  console.log("🚀 ~ file: main.js:40 ~ handler ~ !sm.get('flag'):", !sm.get('flag'))
  // debugger
  // change state
  if (!sm.get('flag')) {
    debugger
    sm.set('flag', true)
    sm.set('state', '+++')
  } else {
    debugger
    sm.set('flag', false)
    sm.set('state', '---')
  }

  // re render
  renderer.render()
}

const rootTemplate = `
  <div>
    <div class="card">
      <button id="counter" type="button"></button>
      <div id="text"></div>

      <input id="input"></input>
      <div id="inputText"></div>

    </div>
  </div>
  `;

const renderer = new Renderer(rootTemplate, stateManager, eventManager)
