function longestConsecutive(nums) {
    let numSet = new Set(nums);
    let longestStreak = 0;

    for (let num of nums) {
        if (!numSet.has(num - 1)) { // Start of a new sequence
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}

// Example usage:
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // Output: 4 ([1,2,3,4])
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // Output: 9
