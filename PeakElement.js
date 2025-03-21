function findPeakElement(arr, left = 0, right = arr.length - 1) {
    if (left === right) return arr[left]; // Base case: single element

    let mid = Math.floor((left + right) / 2);

    if (arr[mid] > arr[mid + 1]) {
        // Peak must be on the left side
        return findPeakElement(arr, left, mid);
    } else {
        // Peak must be on the right side
        return findPeakElement(arr, mid + 1, right);
    }
}

console.log(findPeakElement([1, 3, 20, 4, 1, 0])); // Output: 20
