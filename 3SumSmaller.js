function threeSumSmaller(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array
    let count = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            if (nums[i] + nums[left] + nums[right] < target) {
                count += right - left; // All pairs (left, right), (left, right-1), etc. are valid
                left++;
            } else {
                right--;
            }
        }
    }
    return count;
}

console.log(threeSumSmaller([-2, 0, 1, 3], 2)); // Output: 2





// Sort the Array in ascending order.

// Initialize count to 0 to track valid triplets.

// Loop Through the Array: Iterate with an index i from 0 to length - 2.

// Set left pointer to i + 1 and right pointer to last index.

// Use Two - Pointer Approach:

// If nums[i] + nums[left] + nums[right] < target:

// Add(right - left) to count(all pairs between left and right are valid).

// Move left pointer right(left++).

//     Else, move right pointer left(right--).

// Return count of valid triplets.