function generate(numRows) {
    let result = [];

    for (let i = 0; i < numRows; i++) {
        let row = new Array(i + 1).fill(1);

        for (let j = 1; j < i; j++) {
            row[j] = result[i - 1][j - 1] + result[i - 1][j];
        }

        result.push(row);
    }

    return result;
}

// Example usage:
console.log(generate(5));
// Output:
// [
//   [1],
//   [1, 1],
//   [1, 2, 1],
//   [1, 3, 3, 1],
//   [1, 4, 6, 4, 1]
// ]
