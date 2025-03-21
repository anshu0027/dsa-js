function moveZerosToEnd(arr) {
    let nonZeroElements = arr.filter(num => num !== 0);
    let zeroCount = arr.length - nonZeroElements.length;
    return nonZeroElements.concat(Array(zeroCount).fill(0));
}

// Example
console.log(moveZerosToEnd([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]
