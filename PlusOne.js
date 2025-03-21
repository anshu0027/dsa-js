function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0; // If digit is 9, set to 0 and continue
    }

    digits.unshift(1); // If all digits were 9, add a new 1 at the beginning
    return digits;
}

// Example usage:
console.log(plusOne([1, 2, 3])); // Output: [1, 2, 4]
console.log(plusOne([9, 9, 9])); // Output: [1, 0, 0, 0]
