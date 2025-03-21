function singleNumber(nums) {
    let result = 0;

    for (let num of nums) {
        result ^= num; // XOR cancels out duplicates
    }

    return result;
}

// Example usage:
console.log(singleNumber([2, 2, 1])); // Output: 1
console.log(singleNumber([4, 1, 2, 1, 2])); // Output: 4
