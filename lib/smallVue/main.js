import "./style.css";
import { Renderer } from "./lib/Renderer.js";
import stateOptions from "./options/state.js";
import eventOptions from "./options/event.js";

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

function domManipulate(sm) {
  document.querySelector("#counter").innerText = sm.get("state");
  document.querySelector("#text").innerText = sm.get("state");

  document.querySelector("#input").value = sm.get("inputValue");
  document.querySelector("#inputText").innerText = sm.get("inputValue");
}

const renderer = new Renderer(
  rootTemplate,
  domManipulate,
  stateOptions,
  eventOptions,
);
