import "./style.css";
import { Renderer } from "./lib/Renderer.js";
import stateOptions from "./src/options/state.js";
import eventOptions from "./src/options/event.js";
import domManipulate from "./src/domManipulate.js";
import rootTemplate from "./src/options/rootTemplate.js";

new Renderer(rootTemplate, domManipulate, stateOptions, eventOptions);
