function isArmstrong(num) {
    let digits = num.toString().split('').map(Number);
    let sum = digits.reduce((acc, d) => acc + Math.pow(d, digits.length), 0);
    return sum === num;
}

console.log(isArmstrong(153)); // Output: true
console.log(isArmstrong(123)); // Output: false
