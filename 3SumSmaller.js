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
