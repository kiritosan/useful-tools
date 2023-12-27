export function getState(initialValue) {
  // if (state) {
  //   return
  // }
  let state = initialValue || ''
  const setState = (count) => {
    state = count
  }

  return [state, setState]
}

/**
 * 只运行一次
 * @param {*} initialValue
 * @returns
 */
export function getObjState(initialValue) {
  // if (typeof initialObj !== 'object') {
  //   throw new Error('you should initialize a state with an object')
  // }

  let objState = initialValue ? { value: initialValue } : { value: '' }

  const setState = (count) => {
    objState.value = count
  }

  return [objState, setState]
}