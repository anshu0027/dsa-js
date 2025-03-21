function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
// Output: [11, 12, 22, 25, 34, 64, 90]




// Recursive Bubble Sort
function bubbleSortRecursive(arr, n = arr.length) {
    if (n === 1) return arr;

    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap
        }
    }

    return bubbleSortRecursive(arr, n - 1);
}

console.log(bubbleSortRecursive([5, 1, 4, 2, 8]));
// Output: [1, 2, 4, 5, 8]
