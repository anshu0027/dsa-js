function findMissingAndRepeating(arr) {
    let n = arr.length;
    let sumN = (n * (n + 1)) / 2; // Sum of first N numbers
    let sumN2 = (n * (n + 1) * (2 * n + 1)) / 6; // Sum of squares of first N numbers
    let sumArr = 0, sumArr2 = 0;

    for (let num of arr) {
        sumArr += num;
        sumArr2 += num * num;
    }

    let diff1 = sumArr - sumN; // x - y
    let diff2 = (sumArr2 - sumN2) / diff1; // (x^2 - y^2) / (x - y) = x + y

    let repeating = (diff1 + diff2) / 2;
    let missing = repeating - diff1;

    return [missing, repeating];
}

// Example
console.log(findMissingAndRepeating([4, 3, 6, 2, 1, 1])); // Output: [5, 1]
