function majorityElement(arr) {
    let candidate = null, count = 0;

    for (let num of arr) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    // Confirm the candidate appears > n/2 times
    let freq = arr.filter(num => num === candidate).length;
    return freq > arr.length / 2 ? candidate : -1;
}

// Example
console.log(majorityElement([3, 3, 4, 2, 3, 3, 3])); // Output: 3
console.log(majorityElement([1, 2, 3, 4])); // Output: -1 (No majority element)
