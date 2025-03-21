function maxProfit(prices) {
    if (prices.length === 0) return 0;

    let sold = 0, hold = -prices[0], rest = 0;

    for (let i = 1; i < prices.length; i++) {
        let prevSold = sold;
        sold = hold + prices[i];
        hold = Math.max(hold, rest - prices[i]);
        rest = Math.max(rest, prevSold);
    }

    return Math.max(sold, rest);
}

console.log(maxProfit([1, 2, 3, 0, 2])); // Output: 3
