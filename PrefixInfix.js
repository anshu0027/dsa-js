function prefixToInfix(expression) {
    let stack = [];

    for (let i = expression.length - 1; i >= 0; i--) {
        let char = expression[i];

        if (/[a-zA-Z0-9]/.test(char)) {
            stack.push(char);
        } else {
            let op1 = stack.pop();
            let op2 = stack.pop();
            let newExp = `(${op1}${char}${op2})`;
            stack.push(newExp);
        }
    }

    return stack[0];
}

// Example usage
console.log(prefixToInfix("*+AB-CD")); // Output: ((A+B)*(C-D))
