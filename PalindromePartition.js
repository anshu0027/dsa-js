function partitionPalindrome(s) {
    let result = [];

    function isPalindrome(str) {
        return str === str.split("").reverse().join("");
    }

    function backtrack(start, path) {
        if (start === s.length) {
            result.push([...path]);
            return;
        }

        for (let end = start; end < s.length; end++) {
            let substr = s.slice(start, end + 1);
            if (isPalindrome(substr)) {
                path.push(substr);
                backtrack(end + 1, path);
                path.pop(); // Backtrack
            }
        }
    }

    backtrack(0, []);
    return result;
}

// Example
console.log(partitionPalindrome("aab"));
// Output: [["a","a","b"], ["aa","b"]]
