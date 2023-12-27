import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { getObjState, getState } from './counter.js'
import EventManager from './EventManager.js'
// import './lib/fsm.js'


function renderDecorator() {
  console.log('renderDecorator called')
}

class Renderer {
  AppTemplate = `
  <div>
    <div class="card">
      <button id="counter" type="button"></button>
      <div id="text"></div>

      <input id="input"></input>
      <div id="inputText"></div>

    </div>
  </div>
  `
  eventManager

  constructor(eventManager) {
    // if (template) {
    //   this.AppTemplate = template
    // }
    this.eventManager = eventManager
    this.render()
  }

  render() {
    this.renderTemplate()

    // 执行完上面，才能执行这行，否则获取不到
    this.stateToTemplate()


    // 事件绑定函数也要放在这里面，否则重新渲染一次后事件绑定就会解除
    this.eventBinding()
  }

  eventBinding() {
    const handlerOptionArrMap = this.eventManager.handlerOptionArrMap
    const iter = handlerOptionArrMap.keys()
    for (const selector of iter) {
      const handlerOptionArr = handlerOptionArrMap.get(selector)
      handlerOptionArr.forEach(({ eventName, handlerArr }) => {
        handlerArr.forEach((handler) => {
          // core
          document.querySelector(selector).addEventListener(eventName, handler)
        })
      })
    }
  }

  renderTemplate() {
    if (document.querySelector('#app').innerHTML === '') { // avoid render at each time
      document.querySelector('#app').innerHTML = this.AppTemplate
    }
  }

  stateToTemplate() {
    document.querySelector('#counter').innerText = state.value
    document.querySelector('#text').innerText = state.value

    document.querySelector('#input').value = inputValue.value
    document.querySelector('#inputText').innerText = inputValue.value
  }
}

// const AppTemplate = `
// <div>
//   <div class="card">
//     <button id="counter" type="button"></button>
//     <div id="text"></div>

//     <input id="input"></input>
//     <div id="inputText"></div>

//   </div>
// </div>
// `

const [state, setState] = getObjState({ value: 'start' })
const [inputValue, setInputValue] = getObjState({ value: '' })
const [flag, setFlag] = getObjState({ value: false })


const inputHandler = (e) => {
  // console.log("🚀 ~ file: main.js:49 ~ inputHandler ~ e.target.value:", e.target.value)
  setInputValue(e.target.value)

  renderer.render()
}

const handler = (e) => {
  // change state
  if (!flag.value) {
    setFlag(true)
    setState('+++')
  } else {
    setFlag(false)
    setState('---')
  }

  // re render
  renderer.render()
}

const eventManager = new EventManager()

eventManager.addEventHandler('#counter', [{
  eventName: 'click',
  handlerArr: [handler]
}])

eventManager.addEventHandler('#input', [{
  eventName: 'input',
  handlerArr: [inputHandler]
}])

const renderer = new Renderer(eventManager)
