function shortestPalindrome(s) {
    let rev = s.split("").reverse().join("");
    let combined = s + "#" + rev;
    let lps = new Array(combined.length).fill(0);

    for (let i = 1, j = 0; i < combined.length;) {
        if (combined[i] === combined[j]) {
            lps[i++] = ++j;
        } else if (j > 0) {
            j = lps[j - 1];
        } else {
            i++;
        }
    }

    return rev.substring(0, s.length - lps[lps.length - 1]) + s;
}

// Example usage
console.log(shortestPalindrome("abcd")); // Output: "dcbabcd"
console.log(shortestPalindrome("aacecaaa")); // Output: "aaacecaaa"
