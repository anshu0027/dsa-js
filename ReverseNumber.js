function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}

console.log(reverseNumber(12345)); // Output: 54321




// or



function reverseArrayLoop(arr) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

console.log(reverseArrayLoop([1, 2, 3, 4, 5]));
// Output: [5, 4, 3, 2, 1]
