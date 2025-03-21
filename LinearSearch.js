function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return index of target
        }
    }
    return -1; // Return -1 if not found
}

// Example
console.log(linearSearch([10, 20, 30, 40, 50], 30)); // Output: 2
console.log(linearSearch([10, 20, 30, 40, 50], 60)); // Output: -1
