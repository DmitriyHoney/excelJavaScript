const CODES = { A: 65, Z: 90 }

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index )
}

function toColumn(content = '') {
    return `
        <div class="column">${content}</div>
    `
}

function createRow(content, idx = '') {
    return `
        <div class="row">
            <div class="row-info">${idx ? idx : ''}</div>
            <div class="row-data">${content}</div>
        </div>
    `
}

function toCell() {
    return `
        <div class="cell"></div>
    `
}

function createTable(rowsCount = 15) {
    let collsCount = CODES.Z - CODES.A + 1
    const rows = []
    let cols = new Array(collsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('')

    console.log(cols)
    rows.push(createRow(cols))
    for (let i = 0; i <= rowsCount; i++) {
        let cells = new Array(collsCount)
            .fill('')
            .map(toCell)
            .join('')
        rows.push(createRow(cells, i + 1))
    }
    return rows.join('')

}

module.exports = createTable
















