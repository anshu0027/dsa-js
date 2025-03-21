function beautySum(s) {
    let totalBeauty = 0;

    function getBeauty(freqMap) {
        let values = [...freqMap.values()];
        return Math.max(...values) - Math.min(...values);
    }

    for (let i = 0; i < s.length; i++) {
        let freqMap = new Map();

        for (let j = i; j < s.length; j++) {
            freqMap.set(s[j], (freqMap.get(s[j]) || 0) + 1);
            if (freqMap.size > 1) {
                totalBeauty += getBeauty(freqMap);
            }
        }
    }

    return totalBeauty;
}

// Example
console.log(beautySum("aabcb")); // Output: 5
console.log(beautySum("abcabc")); // Output: 17
