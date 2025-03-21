function countPrimes(n) {
    if (n < 2) return 0;
    let primes = new Array(n).fill(true);
    primes[0] = primes[1] = false;
    let count = 0;

    for (let i = 2; i < n; i++) {
        if (primes[i]) {
            count++;
            for (let j = i * i; j < n; j += i) {
                primes[j] = false;
            }
        }
    }

    return count;
}

// Example usage:
console.log(countPrimes(10)); // Output: 4 (Primes: [2,3,5,7])
