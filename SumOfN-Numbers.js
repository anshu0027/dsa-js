function sumFirstN(n) {
    if (n === 0) return 0;
    return n + sumFirstN(n - 1);
}

console.log(sumFirstN(5)); // Output: 15 (1+2+3+4+5)


// Using Recursion
