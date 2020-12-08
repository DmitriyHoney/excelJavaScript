export class DOMListener {
    constructor($root, options) {
        if (!$root) throw new Error('No $root provided for DomListener!')
        this.$root     = $root
        this.listeners = options.listeners || []
        this.name      = options.name
    }

    initDOMListener() {
        this.listeners.forEach(eventType => {
            let method = getMethodName(eventType)
            //DEBUG
            window['c' + this.name] = this
            //END DEBUG
            if (!this[method]) {
                console.warn(`Inside Component: <<${this.name || ''}>> not method - ${method}`)
            } else {
                this[method] = this[method].bind(this)
                this.$root.on(eventType, this[method])
            }
        })
    }

    removeDOMListener() {
        this.listeners.forEach(eventType => {
            let method = getMethodName(eventType)
            if (!this[method]) {
                console.warn(`Inside Component: <<${this.name || ''}>> not method - ${method}`)
            } else {
                this.$root.off(eventType, this[method])
            }
        })
    }
}

function getMethodName(name) {
    return `on${capitalize(name)}`
}

//input => onInput
function capitalize(str) {
    if (typeof str !== 'string') {
        return ''
    }
    return str[0].toLocaleUpperCase() + str.slice(1)
}