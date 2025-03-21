function findKthLargest(nums, k) {
    nums.sort((a, b) => b - a);
    return nums[k - 1];
}

// Example usage:
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Output: 5
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // Output: 4
