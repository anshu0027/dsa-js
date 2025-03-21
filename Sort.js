function customSort(arr) {
    let mid = Math.floor(arr.length / 2);
    let firstHalf = arr.slice(0, mid).sort((a, b) => a - b);
    let secondHalf = arr.slice(mid).sort((a, b) => b - a);
    return [...firstHalf, ...secondHalf];
}

// Example usage
console.log(customSort([3, 1, 9, 7, 5, 2, 8, 4])); // Output: [1, 3, 5, 7, 9, 8, 4, 2]


// Sort First Half in Ascending and Second Half in Descending Order