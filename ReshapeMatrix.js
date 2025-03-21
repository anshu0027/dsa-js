function matrixReshape(mat, r, c) {
    let flat = mat.flat();
    if (flat.length !== r * c) return mat; // Return original matrix if reshaping isn't possible

    let newMat = [];
    for (let i = 0; i < r; i++) {
        newMat.push(flat.slice(i * c, i * c + c));
    }

    return newMat;
}

// Example usage:
console.log(matrixReshape([[1, 2], [3, 4]], 1, 4)); // Output: [[1, 2, 3, 4]]
console.log(matrixReshape([[1, 2], [3, 4]], 2, 4)); // Output: [[1, 2], [3, 4]] (unchanged)
