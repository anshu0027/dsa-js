function rightRotateByOne(arr) {
    let lastElement = arr.pop();
    arr.unshift(lastElement);
    return arr;
}

// Example
console.log(rightRotateByOne([1, 2, 3, 4, 5])); // Output: [5, 1, 2, 3, 4]








// Right Rotate by n places
function rightRotate(arr, n) {
    n = n % arr.length; // Handle cases where n > arr.length
    return arr.slice(-n).concat(arr.slice(0, -n));
}

// Example
console.log(rightRotate([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]
