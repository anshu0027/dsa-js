function sumOfDigits(num) {
    if (num === 0) return 0;
    return (num % 10) + sumOfDigits(Math.floor(num / 10));
}

console.log(sumOfDigits(1234)); // Output: 10





// Or




function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10; // Extract last digit and add to sum
        num = Math.floor(num / 10); // Remove last digit
    }
    return sum;
}

console.log(sumOfDigits(1234)); // Output: 10
