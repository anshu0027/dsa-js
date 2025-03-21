function shortestDistance(words, word1, word2) {
    let index1 = -1, index2 = -1, minDist = Infinity;

    for (let i = 0; i < words.length; i++) {
        if (words[i] === word1) index1 = i;
        if (words[i] === word2) index2 = i;

        if (index1 !== -1 && index2 !== -1) {
            minDist = Math.min(minDist, Math.abs(index1 - index2));
        }
    }

    return minDist;
}

// Example usage:
console.log(shortestDistance(["practice", "makes", "perfect", "coding", "makes"], "coding", "practice")); // Output: 3
console.log(shortestDistance(["a", "b", "c", "a", "d"], "a", "d")); // Output: 1
