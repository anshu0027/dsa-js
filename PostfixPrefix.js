function postfixToPrefix(expression) {
    let stack = [];

    for (let char of expression) {
        if (/[a-zA-Z0-9]/.test(char)) {
            stack.push(char);
        } else {
            let op2 = stack.pop();
            let op1 = stack.pop();
            let newExp = char + op1 + op2;
            stack.push(newExp);
        }
    }

    return stack[0];
}

// Example usage
console.log(postfixToPrefix("AB+CD-*")); // Output: *+AB-CD
