function longestSubarrayWithSumK(arr, K) {
    let sumMap = new Map();
    let sum = 0, maxLength = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sum === K) {
            maxLength = i + 1;
        }

        if (sumMap.has(sum - K)) {
            maxLength = Math.max(maxLength, i - sumMap.get(sum - K));
        }

        if (!sumMap.has(sum)) {
            sumMap.set(sum, i);
        }
    }

    return maxLength;
}

// Example
console.log(longestSubarrayWithSumK([1, 2, 3, -2, 5], 5)); // Output: 4
console.log(longestSubarrayWithSumK([-1, 2, 3, -4, 5, 1], 3)); // Output: 3
