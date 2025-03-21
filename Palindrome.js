function isPalindrome(x) {
    if (x < 0) return false; // Negative numbers are not palindromes

    let str = x.toString();
    let reversedStr = str.split('').reverse().join('');

    return str === reversedStr;
}

console.log(isPalindrome("apa")); // Output: true
console.log(isPalindrome(-121)); // Output: false
