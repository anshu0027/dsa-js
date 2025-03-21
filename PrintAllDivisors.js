function printDivisors(num) {
    let divisors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

console.log(printDivisors(12)); // Output: [1, 2, 3, 4, 6, 12]
