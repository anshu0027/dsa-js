function largestElement(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(largestElement([10, 20, 4, 45, 99]));
// Output: 99




// Smallest Element in Array
const arr = [10, 3, 5, 1, 8];
const minElement = Math.min(...arr);
console.log(minElement); // Output: 1
