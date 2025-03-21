function rearrangeArray(arr) {
    let positives = [], negatives = [];

    for (let num of arr) {
        if (num >= 0) positives.push(num);
        else negatives.push(num);
    }

    let result = [], i = 0, j = 0;
    while (i < positives.length && j < negatives.length) {
        result.push(positives[i++]);
        result.push(negatives[j++]);
    }

    // Add remaining elements
    while (i < positives.length) result.push(positives[i++]);
    while (j < negatives.length) result.push(negatives[j++]);

    return result;
}

// Example
console.log(rearrangeArray([1, 2, -3, -4, 5, -6]));
// Output: [1, -3, 2, -4, 5, -6]
