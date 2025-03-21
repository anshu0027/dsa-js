function missingNumbers(nums) {
    let n = nums.length;
    let sum = (n * (n + 1)) / 2; // Sum of first n numbers
    let actualSum = nums.reduce((acc, num) => acc + num, 0);

    return sum - actualSum;
}

// Example usage:
console.log(missingNumbers([3, 0, 1])); // Output: 2
console.log(missingNumbers([0, 1])); // Output: 2
