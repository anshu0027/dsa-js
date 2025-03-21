function nextPermutation(arr) {
    let i = arr.length - 2;

    // Find first decreasing element from the end
    while (i >= 0 && arr[i] >= arr[i + 1]) i--;

    if (i >= 0) {
        let j = arr.length - 1;

        // Find the next larger element than arr[i] and swap
        while (arr[j] <= arr[i]) j--;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    // Reverse the remaining elements after i
    arr.splice(i + 1, arr.length - (i + 1), ...arr.slice(i + 1).reverse());

    return arr;
}

// Example
console.log(nextPermutation([1, 2, 3])); // Output: [1, 3, 2]
console.log(nextPermutation([3, 2, 1])); // Output: [1, 2, 3] (last permutation, so reset)
