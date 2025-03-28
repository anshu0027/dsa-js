function minCostClimbingStairs(cost) {
    let n = cost.length;
    for (let i = 2; i < n; i++) {
        cost[i] += Math.min(cost[i - 1], cost[i - 2]);
    }

    return Math.min(cost[n - 1], cost[n - 2]);
}

// Example usage:
console.log(minCostClimbingStairs([10, 15, 20])); // Output: 15
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // Output: 6
