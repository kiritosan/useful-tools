export default {
  "#counter": [
    {
      eventName: "click",
      handlerArr: [counterClickHandler],
    },
  ],
  "#input": [
    {
      eventName: "input",
      handlerArr: [inputInputHandler],
    },
  ],
  "#toggleColor": [
    {
      eventName: "click",
      handlerArr: [toggleColorClickHandler],
    },
  ],
};

function inputInputHandler(sm, e) {
  sm.set("inputValue", e.target.value);
}

function counterClickHandler(sm, e) {
  // change state
  if (!sm.get("flag")) {
    sm.set("flag", true);
    sm.set("state", "heads");
  } else {
    sm.set("flag", false);
    sm.set("state", "tails");
  }
}

function toggleColorClickHandler(sm, e) {
  if (!sm.get("flag")) {
    sm.set("flag", true);
    sm.set("color", "black");
  } else {
    sm.set("flag", false);
    sm.set("color", "#42a5f5");
  }
}
