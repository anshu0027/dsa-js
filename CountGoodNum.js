function countGoodNumbers(n) {
    const MOD = 1e9 + 7;

    function power(base, exp) {
        if (exp === 0) return 1;
        let half = power(base, Math.floor(exp / 2)) % MOD;
        half = (half * half) % MOD;
        return exp % 2 === 0 ? half : (half * base) % MOD;
    }

    let evenPlaces = Math.ceil(n / 2);
    let oddPlaces = Math.floor(n / 2);

    return (power(5, evenPlaces) * power(4, oddPlaces)) % MOD;
}

// Example
console.log(countGoodNumbers(1)); // Output: 5
console.log(countGoodNumbers(4)); // Output: 400
