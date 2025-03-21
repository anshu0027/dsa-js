function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array
    let closest = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1, right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            // Update closest sum if it's closer to the target
            if (Math.abs(sum - target) < Math.abs(closest - target)) {
                closest = sum;
            }

            // Move pointers to find a closer sum
            if (sum < target) left++;
            else right--;
        }
    }

    return closest;
}

// Example usage:
console.log(threeSumClosest([-1, 2, 1, -4], 1)); // Output: 2
