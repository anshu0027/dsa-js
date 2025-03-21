function knapsack(weights, values, capacity) {
    let n = weights.length;
    let dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                // Include or exclude the item
                dp[i][w] = Math.max(
                    values[i - 1] + dp[i - 1][w - weights[i - 1]], // Include item
                    dp[i - 1][w] // Exclude item
                );
            } else {
                dp[i][w] = dp[i - 1][w]; // Cannot include the item
            }
        }
    }

    return dp[n][capacity]; // Maximum value that can be obtained
}

// Example Usage
console.log(knapsack([2, 3, 4, 5], [3, 4, 5, 6], 5)); // Output: 7
