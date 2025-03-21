function reverseWords(s) {
    return s.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}

// Example
console.log(reverseWords("Hello World")); // Output: "olleH dlroW"
console.log(reverseWords("JavaScript is fun")); // Output: "tpircSavaJ si nuf"
