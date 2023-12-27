import "./style.css";
import { EventManager } from "./lib/EventManager.js";
import { Renderer } from "./lib/Renderer.js";
import { StateManager } from "./lib/StateManager.js";

const stateOptions = {
  state: "start",
  inputValue: "",
  flag: false,
};

const eventOptions = {
  "#counter": [
    {
      eventName: "click",
      handlerArr: [handler],
    },
  ],
  "#input": [
    {
      eventName: "input",
      handlerArr: [inputHandler],
    },
  ],
};

const stateManager = new StateManager(stateOptions);

const eventManager = new EventManager(eventOptions);

function inputHandler(sm, e) {
  sm.set("inputValue", e.target.value);

  renderer.render();
}

function handler(sm, e) {
  // change state
  if (!sm.get("flag")) {
    sm.set("flag", true);
    sm.set("state", "heads");
  } else {
    sm.set("flag", false);
    sm.set("state", "tails");
  }

  // re render
  renderer.render();
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

const renderer = new Renderer(rootTemplate, stateManager, eventManager);
