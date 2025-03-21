function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

console.log(fibonacci(10));
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]




// Recursive
function fibonacciRecursive(n, fib = [0, 1]) {
    if (fib.length >= n) return fib;
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    return fibonacciRecursive(n, fib);
}

console.log(fibonacciRecursive(10));
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
