function mostCommonWord(paragraph, banned) {
    let words = paragraph.toLowerCase().replace(/[^a-z ]/g, "").split(" ");
    let bannedSet = new Set(banned);
    let wordCount = new Map();

    for (let word of words) {
        if (!bannedSet.has(word) && word !== "") {
            wordCount.set(word, (wordCount.get(word) || 0) + 1);
        }
    }

    return [...wordCount.entries()].reduce((a, b) => (b[1] > a[1] ? b : a))[0];
}

// Example usage:
console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"])); // Output: "ball"
