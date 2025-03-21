function longestCommonPrefix(strs) {
    if (!strs.length) return "";

    let prefix = strs[0]; // Start with the first word

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1); // Remove the last character
            if (!prefix) return "";
        }
    }

    return prefix;
}

// Example
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));   // Output: ""
