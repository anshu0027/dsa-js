function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1]; // Choosing last element as pivot
    let left = [], right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([10, 7, 8, 9, 1, 5]));
// Output: [1, 5, 7, 8, 9, 10]
