function largestSubarrayZeroSum(arr) {
    let sum = 0, maxLen = 0;
    let sumIndexMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sum === 0) {
            maxLen = i + 1; // Subarray from 0 to i
        }

        if (sumIndexMap.has(sum)) {
            maxLen = Math.max(maxLen, i - sumIndexMap.get(sum));
        } else {
            sumIndexMap.set(sum, i);
        }
    }

    return maxLen;
}

// Example
console.log(largestSubarrayZeroSum([1, 2, -3, 3, 1, -4, 2, -2])); // Output: 5
