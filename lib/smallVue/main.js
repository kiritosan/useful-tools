import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { getObjState, getState } from './counter.js'
// import './lib/fsm.js'




const AppTemplate = `
<div>
  <div class="card">
    <button id="counter" type="button"></button>
    <div id="text"></div>

    <input id="input"></input>
    <div id="inputText"></div>

  </div>
</div>
`



const [state, setState] = getObjState({ value: 'start' })
const [inputValue, setInputValue] = getObjState({ value: '' })
const [flag, setFlag] = getObjState({ value: false })

const render = () => {
  if (document.querySelector('#app').innerHTML === '') { // avoid render at each time
    document.querySelector('#app').innerHTML = AppTemplate
  }

  // 执行完上面，才能执行这行，否则获取不到
  document.querySelector('#counter').innerText = state.value
  document.querySelector('#text').innerText = state.value

  document.querySelector('#input').value = inputValue.value
  document.querySelector('#inputText').innerText = inputValue.value


  // 事件绑定函数也要放在这里面，否则重新渲染一次后事件绑定就会解除
  document.querySelector('#counter').addEventListener('click', handler)
  document.querySelector('#input').addEventListener('input', inputHandler)

}

const inputHandler = (e) => {
  // console.log("🚀 ~ file: main.js:49 ~ inputHandler ~ e.target.value:", e.target.value)
  setInputValue(e.target.value)

  render()
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
  render()
}

render()
