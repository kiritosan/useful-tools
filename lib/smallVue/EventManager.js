class EventManager {
    handlerOptionArrMap = new Map()

    constructor(option) {
        // this.handlersMap
    }

    /**
     *
     * @param {string} selector
     * @param {object} handlerOptionArr [{eventName: string, handler: function | [function]}]
     * one element may contain plural handlers
     * each eventName may correspond to many handlers
     */
    addEventHandler(selector, handlerOptionArr) {
        if (arguments.length !== 2) {
            throw new Error('please pass right props')
        }

        if (typeof selector !== 'string') {
            throw new Error('selector should be a string')
        }

        if (!Array.isArray(handlerOptionArr)) {
            throw new Error('handlerOptionArr should be an Array')
        }

        handlerOptionArr.forEach((handlerOption) => {
            if (!handlerOption.eventName || !handlerOption.handlerArr) {
                throw new Error('handlerOption should own both eventName and handler properties')
            }
        })

        // process when handler properties of handlerOptionArr is not a function arr but a function
        if (typeof handlerOptionArr.handler === 'function') {
            // const handlerOptionArr = this.handlerOptionArrMap.get(selector)
            handlerOptionArr.handler = [handlerOptionArr.handler]
        }

        // TODO: when handler of a element has been defined before
        if (this.handlerOptionArrMap.get(selector)) {
            console.log('TODO: when handler of a element has been defined before')
        }

        this.handlerOptionArrMap.set(selector, handlerOptionArr)
    }
}

export default EventManager