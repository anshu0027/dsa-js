function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    return s.split("").sort().join("") === t.split("").sort().join("");
}

// Example
console.log(isAnagram("listen", "silent")); // Output: true
console.log(isAnagram("hello", "world"));   // Output: false
