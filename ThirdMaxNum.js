function thirdMax(nums) {
    let uniqueNums = [...new Set(nums)].sort((a, b) => b - a);
    return uniqueNums.length >= 3 ? uniqueNums[2] : uniqueNums[0];
}

// Example usage:
console.log(thirdMax([3, 2, 1])); // Output: 1
console.log(thirdMax([1, 2])); // Output: 2
console.log(thirdMax([2, 2, 3, 1])); // Output: 1
