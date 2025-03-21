function stockSpan(prices) {
    let stack = [];
    let span = new Array(prices.length).fill(1);

    for (let i = 0; i < prices.length; i++) {
        while (stack.length > 0 && prices[stack[stack.length - 1]] <= prices[i]) {
            stack.pop();
        }
        span[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
        stack.push(i);
    }

    return span;
}

// Example usage
console.log(stockSpan([100, 80, 60, 70, 60, 75, 85])); // Output: [1, 1, 1, 2, 1, 4, 6]
