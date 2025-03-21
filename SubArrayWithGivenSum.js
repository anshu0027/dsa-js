function countSubarraysWithSum(arr, target) {
    let prefixSum = new Map();
    let sum = 0, count = 0;

    prefixSum.set(0, 1); // Handle case when sum itself equals target

    for (let num of arr) {
        sum += num;

        if (prefixSum.has(sum - target)) {
            count += prefixSum.get(sum - target);
        }

        prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1);
    }

    return count;
}

// Example
console.log(countSubarraysWithSum([1, 1, 1], 2)); // Output: 2
console.log(countSubarraysWithSum([3, 4, 7, 2, -3, 1, 4, 2, 1], 7)); // Output: 4
