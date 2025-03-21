function longestPalindrome(s) {
    if (s.length < 2) return s;

    let start = 0, maxLength = 1;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return [left + 1, right - 1];
    }

    for (let i = 0; i < s.length; i++) {
        let [l1, r1] = expandAroundCenter(i, i);       // Odd length palindrome
        let [l2, r2] = expandAroundCenter(i, i + 1);   // Even length palindrome

        if (r1 - l1 + 1 > maxLength) {
            start = l1;
            maxLength = r1 - l1 + 1;
        }

        if (r2 - l2 + 1 > maxLength) {
            start = l2;
            maxLength = r2 - l2 + 1;
        }
    }

    return s.substring(start, start + maxLength);
}

// Example
console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
console.log(longestPalindrome("cbbd"));  // Output: "bb"
