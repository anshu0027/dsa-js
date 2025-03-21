function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // Shift element
            j--;
        }
        arr[j + 1] = key; // Insert at the right position
    }
    return arr;
}

console.log(insertionSort([9, 5, 1, 4, 3]));
// Output: [1, 3, 4, 5, 9]
