// import { $ } from '@core/dom'

// export class Excel {
//     constructor(selector, options) {
//         this.$el = $(selector)
//         this.components = options.components || []
//     }

//     getRoot() {

//         const $root = $.create('div', 'excel')

//         this.components.forEach(Component => {
//             const $el = $.create('div', Component.className)

//             const component = new Component($el)
//             $el.html(component.toHTML())
//             $root.append($el)
//         })
//         return $root
//     }

//     render() {
//         this.$el.append(this.getRoot())
//     }
// }
import { $ } from '@core/dom'

export class Excel {
    constructor(selector, options) {
        this.$root = $(selector) //самый главный компонент где выполняется render в нашем случае <div id="app"></div>
        this.components = options.components || [] // содержит компоненты
    }   

    toMainContentc() { // получает html всех детей и пушит в элемент с классом (сами определим) и вернём этот родительский элемент с дочерними для интеграции его в $root
        const $parentWrap = $.create('div', 'excel') 
        
        this.components = this.components.map(Component => {
            
            const $childWrap = $.create('div', Component.className) 
            const component = new Component($childWrap)

            $childWrap.html(component.toHTML())
            $parentWrap.append($childWrap)
            return component
        })
        console.log(this.components)
        return $parentWrap
    }

    render() {
        this.$root.append(this.toMainContentc())
        this.components.forEach(component => component.init())
    }
}

window.$ = $