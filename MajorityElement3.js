function majorityElementN3(arr) {
    let count1 = 0, count2 = 0, candidate1 = null, candidate2 = null;

    for (let num of arr) {
        if (num === candidate1) {
            count1++;
        } else if (num === candidate2) {
            count2++;
        } else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }

    // Verify candidates
    count1 = count2 = 0;
    for (let num of arr) {
        if (num === candidate1) count1++;
        else if (num === candidate2) count2++;
    }

    let result = [];
    if (count1 > arr.length / 3) result.push(candidate1);
    if (count2 > arr.length / 3) result.push(candidate2);

    return result;
}

// Example
console.log(majorityElementN3([3, 2, 3])); // Output: [3]
console.log(majorityElementN3([1, 1, 1, 3, 3, 2, 2, 2])); // Output: [1, 2]
