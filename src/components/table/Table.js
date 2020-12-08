import {ExcelComponent} from '@core/ExcelComponent'
import createTable from '@/utils/table.utils'

export class Table extends ExcelComponent {
    static className = 'excel__table'
    constructor($root) {
        super($root, {
            name: 'Table'
        })
    }

    toHTML() {
        return createTable()
    }
}