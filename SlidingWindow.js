function slidingWindowMax(nums, k) {
    let result = [];
    let deque = []; // Stores indexes of useful elements

    for (let i = 0; i < nums.length; i++) {
        while (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift(); // Remove elements not in window
        }

        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop(); // Remove smaller elements
        }

        deque.push(i);

        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}

// Example usage
console.log(slidingWindowMax([1, 3, -1, -3, 5, 3, 6, 7], 3)); // Output: [3, 3, 5, 5, 6, 7]
