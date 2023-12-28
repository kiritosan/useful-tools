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
