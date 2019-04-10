export default function getCellOrder(data, col, row, index, mode) {

    const {vertHalf, horHalf, centerCells, snakeIndexes, spiralIndexes} = data;
    const [vert, hor] = centerCells;
    let dvert, dhor;

    switch (mode) {
        case 0:
            return index;
        case 1:
            return col; // columns
        case 2:
            return row; // rows
        case 3:
            return col % 2; // stripes vert.
        case 4:
            return row % 2; // stripes hor.
        case 5: // checkerboard
            if (row % 2) {
                return col % 2 ? col % 2 - 1 : col % 2 + 1;
            }
            return col % 2;
        case 6:
            return Math.floor(Math.abs(vertHalf - row)); // from center to top/bottom
        case 7:
            return Math.floor(Math.abs(horHalf - col)); // from center to left/right
        case 8: // from center
            dvert = Math.min(Math.abs(vert[0] - row), Math.abs(vert[1] - row));
            dhor = Math.min(Math.abs(hor[0] - col), Math.abs(hor[1] - col));
            return Math.max(dvert, dhor);
        case 9:
            return snakeIndexes[index]; // snake
        case 10:
            return spiralIndexes.indexOf(index);
    }

}