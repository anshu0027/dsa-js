function prefixToPostfix(expression) {
    let stack = [];

    for (let i = expression.length - 1; i >= 0; i--) {
        let char = expression[i];

        if (/[a-zA-Z0-9]/.test(char)) {
            stack.push(char);
        } else {
            let op1 = stack.pop();
            let op2 = stack.pop();
            let newExp = op1 + op2 + char;
            stack.push(newExp);
        }
    }

    return stack[0];
}

// Example usage
console.log(prefixToPostfix("*+AB-CD")); // Output: AB+CD-*
