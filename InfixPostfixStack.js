function infixToPostfix(expression) {
    const precedence = { "+": 1, "-": 1, "*": 2, "/": 2, "^": 3 };
    let stack = [];
    let output = "";

    for (let char of expression) {
        if (/[a-zA-Z0-9]/.test(char)) {
            output += char;
        } else if (char === "(") {
            stack.push(char);
        } else if (char === ")") {
            while (stack.length && stack[stack.length - 1] !== "(") {
                output += stack.pop();
            }
            stack.pop(); // Remove "("
        } else {
            while (
                stack.length &&
                precedence[char] <= precedence[stack[stack.length - 1]]
            ) {
                output += stack.pop();
            }
            stack.push(char);
        }
    }

    while (stack.length) {
        output += stack.pop();
    }

    return output;
}

// Example usage
console.log(infixToPostfix("A+B*C")); // Output: ABC*+
console.log(infixToPostfix("(A+B)*C")); // Output: AB+C*
