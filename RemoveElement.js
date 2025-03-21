function removeElement(nums, val) {
    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[index] = nums[i];
            index++;
        }
    }

    return index; // New length of the array without the value
}

// Example usage:
let nums = [3, 2, 2, 3];
let newLength = removeElement(nums, 3);
console.log(nums.slice(0, newLength)); // Output: [2, 2]
