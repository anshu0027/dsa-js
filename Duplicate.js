function containsDuplicate(nums) {
    let seen = new Set();

    for (let num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }

    return false;
}

// Example usage:
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false



// Q-1 Which numbers are duplicated in the array?
// Q-2 How many times is each number duplicated?
// Q-3 Print the duplicated numbers.
// Q-4 Print the duplicated numbers and the number of times they are duplicated.
