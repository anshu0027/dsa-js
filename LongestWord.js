function longestWord(words) {
    words.sort(); // Sort alphabetically
    let wordSet = new Set([""]);
    let longest = "";

    for (let word of words) {
        if (wordSet.has(word.slice(0, -1))) { // Check if prefix exists
            wordSet.add(word);
            if (word.length > longest.length) longest = word;
        }
    }

    return longest;
}

console.log(longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"])); // Output: "apple"
console.log(longestWord(["cat", "bat", "rat", "cattle", "batter"])); // Output: "batter"
