function maxDepth(s) {
    let depth = 0, maxDepth = 0;

    for (let char of s) {
        if (char === '(') {
            depth++;
            maxDepth = Math.max(maxDepth, depth);
        } else if (char === ')') {
            depth--;
        }
    }

    return maxDepth;
}

// Example
console.log(maxDepth("(1+(2*3)+((8)/4))+1")); // Output: 3
console.log(maxDepth("(1)+((2))+(((3)))"));   // Output: 3
