function largestOddNumber(num) {
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] % 2 !== 0) return num.slice(0, i + 1);
    }
    return "";
}

// Example
console.log(largestOddNumber("42053")); // Output: "42053"
console.log(largestOddNumber("2468"));  // Output: ""
