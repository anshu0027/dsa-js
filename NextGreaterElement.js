function nextGreaterElement(nums) {
    let stack = [];
    let result = new Array(nums.length).fill(-1);

    for (let i = 0; i < nums.length; i++) {
        while (stack.length > 0 && nums[i] > nums[stack[stack.length - 1]]) {
            let index = stack.pop();
            result[index] = nums[i];
        }
        stack.push(i);
    }

    return result;
}

console.log(nextGreaterElement([4, 5, 2, 10])); // Output: [5, 10, 10, -1]
console.log(nextGreaterElement([3, 1, 4, 2])); // Output: [4, 4, -1, -1]
