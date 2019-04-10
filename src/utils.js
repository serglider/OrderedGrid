export default function getGridData(columns, rows, mode) {

    const vertHalf = (rows - 1) / 2;
    const horHalf = (columns - 1) / 2;

    const data = {
        vertHalf,
        horHalf,
        centerCells: [],
        snakeIndexes: [],
        spiralIndexes: [],
    };

    switch (mode) {

        case 8:
            if (columns % 2) {
                if (rows % 2) {
                    data.centerCells = [[vertHalf, vertHalf], [horHalf, horHalf]];
                } else {
                    data.centerCells = [[Math.floor(vertHalf), Math.ceil(vertHalf)], [horHalf, horHalf]];
                }
            } else {
                if (rows % 2) {
                    data.centerCells = [[vertHalf, vertHalf], [Math.floor(horHalf), Math.ceil(horHalf)]];
                } else {
                    data.centerCells = [[Math.floor(vertHalf), Math.ceil(vertHalf)], [Math.floor(horHalf), Math.ceil(horHalf)]];
                }
            }
            break;

        case 9:
            data.snakeIndexes = getSnakeOrder(columns, rows);
            break;

        case 10:
            data.spiralIndexes = getSpiralOrder(columns, rows);
            break;
    }

    return data;
}

function spiral(matrix, columns, rows) {
    let row, index = 0;
    const result = new Array(columns * rows);

    while (matrix.length) {
        row = matrix.shift();
        while (row.length) {
            result[index++] = row.shift();
        }
        matrix = transpose(matrix);
    }
    return result;
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

function getSnakeOrder(columns, rows) {
    const base = Array.from(Array(columns * rows), (_, i) => i);
    const matrix = chunk(base, columns);
    const bbf = matrix.map((arr, i) => i % 2 ? arr.reverse() : arr);
    return bbf.reduce((result, arr) => [...result, ...arr], [])
}

function getSpiralOrder(columns, rows) {
    const base = Array.from(Array(columns * rows), (_, i) => i);
    const matrix = chunk(base, columns);
    return spiral(matrix, columns, rows);
}