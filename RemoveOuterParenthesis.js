function removeOuterParentheses(s) {
    let result = "";
    let balance = 0;

    for (let char of s) {
        if (char === '(' && balance++ > 0) result += char;
        if (char === ')' && --balance > 0) result += char;
    }

    return result;
}

// Example
console.log(removeOuterParentheses("(()())(())")); // Output: "()()()"
