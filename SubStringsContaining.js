// Number of Substrings Containing All 3 Characters

function numberOfSubstrings(s) {
    let count = { a: 0, b: 0, c: 0 };
    let left = 0, total = 0;

    for (let right = 0; right < s.length; right++) {
        count[s[right]]++;

        while (count["a"] > 0 && count["b"] > 0 && count["c"] > 0) {
            total += s.length - right;
            count[s[left]]--;
            left++;
        }
    }

    return total;
}

console.log(numberOfSubstrings("abcabc")); // Output: 10
console.log(numberOfSubstrings("aaacb")); // Output: 3
