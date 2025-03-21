function moveZeroes(nums) {
    let index = 0;

    for (let num of nums) {
        if (num !== 0) {
            nums[index] = num;
            index++;
        }
    }

    while (index < nums.length) {
        nums[index] = 0;
        index++;
    }
}

// Example usage:
let nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); // Output: [1, 3, 12, 0, 0]
