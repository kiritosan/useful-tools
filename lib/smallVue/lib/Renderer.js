export class Renderer {
  rootTemplate;
  eventManager;
  stateManager;
  cnt = 0;

  constructor(rootTemplate, stateManager, eventManager) {
    this.rootTemplate = rootTemplate;
    this.stateManager = stateManager;
    this.eventManager = eventManager;

    this.render();
  }

  render() {
    this.renderTemplate();

    // 执行完上面，才能执行这行，否则获取不到
    this.stateToTemplate();

    // 事件绑定函数也要放在这里面，否则重新渲染一次后事件绑定就会解除
    this.eventBinding();
  }

  eventBinding() {
    // only call once
    if (this.cnt > 0) {
      return;
    }
    const handlerOptionArrMap = this.eventManager.handlerOptionArrMap;
    const iter = handlerOptionArrMap.keys();
    for (const selector of iter) {
      const handlerOptionArr = handlerOptionArrMap.get(selector);
      handlerOptionArr.forEach(({ eventName, handlerArr }) => {
        handlerArr.forEach((handler) => {
          // event binding core
          document
            .querySelector(selector)
            .addEventListener(eventName, handler.bind(null, this.stateManager));
        });
      });
    }
    this.cnt++;
  }

  renderTemplate() {
    if (document.querySelector("#app").innerHTML === "") {
      // avoid render at each time
      document.querySelector("#app").innerHTML = this.rootTemplate;
    }
  }

  stateToTemplate() {
    // TODO:
    const stateManager = this.stateManager;

    document.querySelector("#counter").innerText = stateManager.get("state");
    document.querySelector("#text").innerText = stateManager.get("state");

    document.querySelector("#input").value = stateManager.get("inputValue");
    document.querySelector("#inputText").innerText =
      stateManager.get("inputValue");
  }
}
