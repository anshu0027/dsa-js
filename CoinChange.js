function coinChange(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0; // Base case: 0 coins needed to make amount 0

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}

// Example Usage
console.log(coinChange([1, 2, 5], 11)); // Output: 3 (5 + 5 + 1)
console.log(coinChange([2], 3)); // Output: -1 (Not possible)
