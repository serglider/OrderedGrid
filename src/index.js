import getCellOrder from './cellOrder';
import getGridData from './utils';

export function createOrderedGrid(dimensions, mode = 0, transpose = 0, sizeData = {}) {

    const {
        fullWidth,
        fullHeight,
        unitWidth,
        unitHeight,
        initX = 0,
        initY = 0,
        gap = 0
    } = sizeData;
    const isFull = fullWidth && fullHeight;
    const isUnit = unitWidth && unitHeight;
    checkArgumentssValidity(dimensions);

    const [columns, rows] = dimensions;
    const data = getGridData(columns, rows, mode);
    const boundGetOrder = getCellOrder.bind(null, data);

    let w, h;
    if (isFull) {
        h = Math.ceil((fullHeight - rows * gap + gap) / rows);
        w = Math.ceil((fullWidth - columns * gap + gap) / columns);
    } else if (isUnit) {
        h = unitHeight;
        w = unitWidth;
    }

    let ordered = Array.from(Array(columns * rows), getCell);
    if (transpose) {
        const orders = ordered.map(cell => cell.order);
        const transpOrders = transposeOrderMatrix(orders, columns, transpose);
        transpOrders.forEach((order, i) => {
            ordered[i].order = order;
        });
    }
    return ordered;

    function getCell(_, index) {

        let column = index % columns;
        let row = Math.floor(index / columns);
        const order = boundGetOrder(column, row, index, mode);
        // let column, row;
        // if (transpose) {
        //     column = _row;
        //     row = _column;
        // } else {
        //     column = _column;
        //     row = _row;
        // }
        const cell = {column, row, order, index};

        if (isFull || isUnit) {
            const x = initX + column * (w + gap);
            const y = initY + row * (h + gap);
            Object.assign(cell, {x, y, w, h});
        }

        return cell;
    }
}


function transposeOrderMatrix(grid, columns, times) {
    let matrix = chunk(grid, columns);
    console.log(matrix);
    while(times) {
        times--;
        matrix = transpose(matrix);
    }
    return matrix.reduce((result, arr) => [...result, ...arr], []);
}

function transpose(matrix) {
    const column = matrix[0];
    if (!column) return matrix;
    const columns = column.length;
    const rows = matrix.length;
    const result = new Array(columns);
    let columnIndex;
    let resultColumnIndex;
    let rowIndex;
    for (resultColumnIndex = 0, columnIndex = columns - 1; columnIndex >= 0; columnIndex--, resultColumnIndex++) {
        result[resultColumnIndex] = new Array(rows);
        for (rowIndex = 0; rowIndex < rows; rowIndex++) {
            result[resultColumnIndex][rowIndex] = matrix[rowIndex][columnIndex];
        }
    }
    return result;
}

function chunk(array, size) {

    const length = array == null ? 0 : array.length;
    if (!length || size < 1) {
        return [];
    }
    let index = 0,
        resIndex = 0,
        result = Array(Math.ceil(length / size));

    while (index < length) {
        result[resIndex++] = array.slice(index, (index += size));
    }
    return result;
}

function checkArgumentssValidity(dims) {

    const isValidArray = Array.isArray(dims) && dims.length === 2 && +dims[0] && +dims[1];

    if (!isValidArray) {
        throw new Error('The dimensions argument has to be an array containing two numbers greater than zero');
    }

}


