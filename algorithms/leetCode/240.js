const searchMatrix = (matrix, target) => {
    let col = 0;
    let row = matrix[col].length - 1;

    while (col < matrix.length && row >= 0) {
        if (matrix[col][row] === target) {
            return true;
        }
        if (matrix[col][row] > target) {
            row--
        }
        if (matrix[col][row] < target) {
            col++
        }
    }

  return false;
};

const matrix = [[-5]];
console.log(searchMatrix(matrix, 29));