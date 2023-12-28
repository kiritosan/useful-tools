import { EventManager } from "./EventManager";
import { StateManager } from "./StateManager";

export class Renderer {
  rootTemplate;
  eventManager;
  stateManager;
  domManipulateFn;
  cnt = 0;

  constructor(rootTemplate, domManipulateFn, stateOptions, eventOptions) {
    this.rootTemplate = rootTemplate;
    this.domManipulateFn = domManipulateFn;
    this.stateManager = new StateManager(stateOptions);
    this.eventManager = new EventManager(eventOptions);

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
          const fn = handler.bind(null, this.stateManager);
          document.querySelector(selector).addEventListener(eventName, (e) => {
            fn(e);
            this.render();
          });
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
    this.domManipulateFn(this.stateManager);
  }
}
