function frequencySort(s) {
    let freq = new Map();

    for (let char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    return [...s].sort((a, b) => freq.get(b) - freq.get(a)).join("");
}

// Example
console.log(frequencySort("tree")); // Output: "eert" or "eetr"
console.log(frequencySort("cccaaa")); // Output: "cccaaa" or "aaaccc"
