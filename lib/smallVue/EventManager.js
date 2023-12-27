class EventManager {
    handlersMap = new Map()

    constructor() {
    }

    /**
     *
     * @param {string} selector
     * @param {object} handlerOption {eventName: string, handler: function}
     */
    addEventHandler(selector, handlerOption) {
        this.handlersMap.set(selector, handlerOption)
    }
}

export default EventManager