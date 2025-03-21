function targetSum(nums, target) {
    let map = new Map();

    for (let num of nums) {
        let complement = target - num;
        if (map.has(complement)) return true; // Found two numbers that sum up to target
        map.set(num, true);
    }

    return false;
}

console.log(targetSum([2, 7, 11, 15], 9)); // Output: true (2+7 = 9)
console.log(targetSum([3, 5, 1, 8], 10)); // Output: false
