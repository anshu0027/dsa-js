function infixToPrefix(expression) {
    const precedence = { "+": 1, "-": 1, "*": 2, "/": 2, "^": 3 };

    function reverseExpression(expr) {
        return expr
            .split("")
            .reverse()
            .map((char) => (char === "(" ? ")" : char === ")" ? "(" : char))
            .join("");
    }

    function infixToPostfix(expression) {
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
                stack.pop();
            } else {
                while (
                    stack.length &&
                    precedence[char] < precedence[stack[stack.length - 1]]
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

    let reversedExpression = reverseExpression(expression);
    let postfix = infixToPostfix(reversedExpression);
    return postfix.split("").reverse().join("");
}

// Example usage
console.log(infixToPrefix("(A+B)*C")); // Output: *+ABC
console.log(infixToPrefix("A+B*C")); // Output: +A*BC
