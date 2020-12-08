import {DOMListener} from '@core/DomListener'

export class ExcelComponent extends DOMListener  {
    constructor($root, options = []) {
        super($root, options);
    }
    toHTML() {
        return ''
    }

    init() {
        this.initDOMListener()
    }

    destroy() {
        this.removeDOMListener()
    }
}

