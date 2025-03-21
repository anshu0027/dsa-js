function countSubstrings(s) {
    let n = s.length;
    return (n * (n + 1)) / 2;
}

// Example
console.log(countSubstrings("abc")); // Output: 6 (["a", "b", "c", "ab", "bc", "abc"])
console.log(countSubstrings("abcd")); // Output: 10
