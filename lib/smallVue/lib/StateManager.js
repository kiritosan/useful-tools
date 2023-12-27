import { getObjState } from "./stateBasic";

export class StateManager {
  store = new Map();

  constructor(stateOptions) {
    Object.keys(stateOptions).forEach((key) => {
      this.add(key, stateOptions[key]);
    });
  }

  add(name, initialValue) {
    const [objState, setState] = getObjState(initialValue);
    this.store.set(name, [objState, setState]);
  }

  _getStatePair(name) {
    return this.store.get(name);
  }

  get(name) {
    return this._getStatePair(name)[0].value;
  }

  set(name, value) {
    return this._getStatePair(name)[1](value);
  }
}
