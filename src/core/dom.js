// class Dom {
//     constructor(selector) {
//         this.$el = typeof selector === 'string' 
//             ? document.querySelector(selector) 
//             : selector 
//     }

//     html(code) {
//         if (typeof code === 'string') {
//             this.$el.innerHTML = code
//             return this
//         }
//         return this.$el.outerHTML.trim()
//     }

//     clear() {
//         this.html('')
//         return this
//     }

//     append(node) {
//         console.log(node);
//         this.$el.appendChild(node.$el)
//     }

// }

// export function $(selector) {
//     return new Dom(selector)
// }

// $.create = (tagName, classes = '') => {
//     const el = document.createElement(tagName)
//     if (classes) {
//         el.classList.add(classes)
//     }
//     return $(el)
// }


class Dom {
    constructor(selector) {
        this.$el = typeof selector === 'string' 
            ?  document.querySelector(selector) 
            : selector
    }

    html(codeHTML) {
        this.$el.innerHTML = codeHTML
        return this
    }

    append(child) {
        this.$el.appendChild(child.$el)
        return this
    }

    on(eventType, cb) {
        this.$el.addEventListener(eventType, cb)
    }

    off(eventType, cb) {
        this.$el.removeEventListener(eventType, cb)
    }
}


export function $(selector) {
    return new Dom(selector)
}

$.create = (tagName = 'div', classes = []) => {
    const element = document.createElement(tagName)
    classes.length > 0
        ? classes.split(' ').forEach(className => element.classList.add(className))
        : ''
    return $(element);
}