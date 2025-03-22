function twoSum(arr, target) {
    let numMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];

        if (numMap.has(complement)) {
            return [numMap.get(complement), i]; // Return indices of the pair
        }

        numMap.set(arr[i], i);
    }

    return []; // Return empty array if no pair found
}

// Example
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1] (2 + 7 = 9)
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2] (2 + 4 = 6)







// Initialize a Hash Map: Create an empty map to store numbers and their indices.

// Iterate Over the Array: Loop through each element in the array.

// Calculate Complement: Subtract the current number from the target.

// Check if Complement Exists in Map:

// If yes, return the stored index and the current index as a pair.

// If no, store the current number and its index in the map.

// Return Empty Array if No Pair Found.