function mergeSortedArrays(arr1, arr2) {
    let n = arr1.length, m = arr2.length;
    let gap = Math.ceil((n + m) / 2);

    while (gap > 0) {
        let i = 0, j = gap;

        while (j < (n + m)) {
            if (j < n && arr1[i] > arr1[j]) { // Swap in arr1
                [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
            } else if (j >= n && i < n && arr1[i] > arr2[j - n]) { // Swap between arr1 and arr2
                [arr1[i], arr2[j - n]] = [arr2[j - n], arr1[i]];
            } else if (j >= n && i >= n && arr2[i - n] > arr2[j - n]) { // Swap in arr2
                [arr2[i - n], arr2[j - n]] = [arr2[j - n], arr2[i - n]];
            }
            i++; j++;
        }

        gap = (gap === 1) ? 0 : Math.ceil(gap / 2);
    }
}

// Example
let arr1 = [1, 5, 9];
let arr2 = [2, 3, 7, 10];

mergeSortedArrays(arr1, arr2);
console.log(arr1, arr2); // Output: [1, 2, 3], [5, 7, 9, 10]
