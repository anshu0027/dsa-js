function leftRotateByOne(arr) {
    if (arr.length === 0) return arr;
    let first = arr.shift(); // Remove first element
    arr.push(first); // Add it to the end
    return arr;
}

console.log(leftRotateByOne([1, 2, 3, 4, 5]));
// Output: [2, 3, 4, 5, 1]







// Replace by N Places
function leftRotate(arr, n) {
    n = n % arr.length; // Handle cases where n > arr.length
    return arr.slice(n).concat(arr.slice(0, n));
}

// Example
console.log(leftRotate([1, 2, 3, 4, 5], 2)); // Output: [3, 4, 5, 1, 2]
