function longestPalindrome(s) {
    if (s.length < 2) return s;

    let start = 0, maxLength = 0;

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }

    for (let i = 0; i < s.length; i++) {
        let oddLen = expandAroundCenter(i, i); // Odd-length palindrome
        let evenLen = expandAroundCenter(i, i + 1); // Even-length palindrome
        let len = Math.max(oddLen, evenLen);

        if (len > maxLength) {
            maxLength = len;
            start = i - Math.floor((len - 1) / 2);
        }
    }

    return s.substring(start, start + maxLength);
}

console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
console.log(longestPalindrome("cbbd")); // Output: "bb"
