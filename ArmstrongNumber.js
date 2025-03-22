function isArmstrong(num) {
    let digits = num.toString().split('').map(Number);  // Convert number to an array of digits
    let sum = 0;

    // Iterate over each digit
    for (let i = 0; i < digits.length; i++) {
        sum += Math.pow(digits[i], digits.length);  // Add the digit raised to the power of number of digits
    }

    return sum === num;  // Return true if the sum equals the original number, else false
}

console.log(isArmstrong(153)); // Output: true
console.log(isArmstrong(123)); // Output: false
