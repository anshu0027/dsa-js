function setMatrixZeros(matrix) {
    let rows = new Set(), cols = new Set();

    // Identify rows and columns that need to be zeroed
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                cols.add(j);
            }
        }
    }

    // Set rows to zero
    for (let row of rows) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[row][j] = 0;
        }
    }

    // Set columns to zero
    for (let col of cols) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][col] = 0;
        }
    }

    return matrix;
}

// Example
console.log(setMatrixZeros([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
]));
// Output:
// [
//  [1, 0, 1],
//  [0, 0, 0],
//  [1, 0, 1]
// ]
