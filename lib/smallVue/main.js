class Vue {
    constructor(options) {
        this.$options = options
        this.$data = options.data
        this.$el = document.querySelector(options.el)
        this.$el.innerHTML = this.template()
        console.log("🚀 ~ file: main.js:7 ~ Vue ~ constructor ~ innerHTML:", innerHTML)
        this.init()
    }
    init() {
        this.proxyData(this.$data)
        // this.proxyEvents(this.$options.methods)
        // this.proxyEvents(this.$options.computed)
        // this.proxyEvents(this.$options.watch)
    }
    proxyData(data) {
        for (let key in data) { // 这里不用 hasOwnProperty嘛？
            Object.defineProperty(this, key, {
                get() {
                    return this.$data[key]
                }
            }
            )
        }
    }
    proxyEvents(methods) {
        for (let key in methods) {
            let method = methods[key]
            this.$el.addEventListener(key, () => {
                method.call(this)
            })
        }
    }
    template() {
        let reg = /{{(.*?)}}/g
        let template = this.$options.template
        console.log("🚀 ~ file: main.js:36 ~ Vue ~ template ~ template:", template)
        return template.replace(reg, (match, key) => {
            return this[key]
        })
    }
    update() {
        this.$el.innerHTML = this.template()
    }
    updateData(key, value) {
        this.$data[key] = value
        this.update()
    }
    updateMethods(key, value) {
        this.$options.methods[key] = value
        this.update()
    }
    updateComputed(key, value) {
        this.$options.computed[key] = value
        this.update()
    }
    updateWatch(key, value) {
        this.$options.watch[key] = value
        this.update()
    }
    updateAll() {
        this.update()
        this.updateData()
        this.updateMethods()
        this.updateComputed()
        this.updateWatch()
    }
}

export default Vue