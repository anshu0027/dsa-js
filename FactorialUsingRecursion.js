function factorialRecursive(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorialRecursive(num - 1);
}

console.log(factorialRecursive(5)); // Output: 120
