function romanToInt(s) {
    const roman = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    let total = 0;

    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 1 && roman[s[i]] < roman[s[i + 1]]) {
            total -= roman[s[i]];
        } else {
            total += roman[s[i]];
        }
    }

    return total;
}

// Example
console.log(romanToInt("IX")); // Output: 9
console.log(romanToInt("MCMXCIV")); // Output: 1994




// Visa Versa
function intToRoman(num) {
    const values = [
        [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
        [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
        [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];

    let result = "";

    for (let [value, symbol] of values) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// Example
console.log(intToRoman(9)); // Output: "IX"
console.log(intToRoman(1994)); // Output: "MCMXCIV"
