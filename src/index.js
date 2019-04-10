import getCellOrder from './cellOrder';
import getGridData from './utils';

export function createOrderedGrid(dimensions, mode = 0, sizeData = {}) {

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
    checkParametersValidity(dimensions);

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

    return Array.from(Array(columns * rows), getCell);

    function getCell(_, index) {

        const column = index % columns;
        const row = Math.floor(index / columns);
        const order = boundGetOrder(column, row, index, mode);
        const cell = {column, row, order, index};

        if (isFull || isUnit) {
            const x = initX + column * (w + gap);
            const y = initY + row * (h + gap);
            Object.assign(cell, {x, y, w, h});
        }

        return cell;
    }
}

function checkParametersValidity(dims) {

    const isValidArray = Array.isArray(dims) && dims.length === 2 && +dims[0] && +dims[1];

    if (!isValidArray) {
        throw new Error('The dimensions argument has to be an array containing two numbers greater than zero');
    }

}


