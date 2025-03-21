function minSubArrayLen(target, nums) {
    let left = 0, sum = 0, minLength = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

// Example usage:
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Output: 2 ([4,3])
