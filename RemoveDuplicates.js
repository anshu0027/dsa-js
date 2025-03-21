function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let index = 1; // Pointer for the next unique element position

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[index] = nums[i];
            index++;
        }
    }

    return index; // The length of the unique elements in the array
}

// Example usage:
let nums = [1, 1, 2, 2, 3, 3, 4, 5, 5];
let newLength = removeDuplicates(nums);
console.log(nums.slice(0, newLength)); // Output: [1, 2, 3, 4, 5]
