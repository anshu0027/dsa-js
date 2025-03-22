function fourSum(arr, target) {
    arr.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < arr.length - 3; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue; // Skip duplicates

        for (let j = i + 1; j < arr.length - 2; j++) {
            if (j > i + 1 && arr[j] === arr[j - 1]) continue; // Skip duplicates

            let left = j + 1, right = arr.length - 1;

            while (left < right) {
                let sum = arr[i] + arr[j] + arr[left] + arr[right];

                if (sum === target) {
                    result.push([arr[i], arr[j], arr[left], arr[right]]);
                    while (arr[left] === arr[left + 1]) left++; // Skip duplicates
                    while (arr[right] === arr[right - 1]) right--; // Skip duplicates
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return result;
}

// Example
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
// Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]







// Sort the Array in ascending order.

// Initialize result as an empty list to store valid quadruplets.

// Loop Through the Array(i from 0 to length - 3):

// Skip duplicates if arr[i] == arr[i - 1].

// Nested Loop(j from i + 1 to length - 2):

// Skip duplicates if arr[j] == arr[j - 1].

// Use Two - Pointer Approach(left = j + 1, right = last index):

// Calculate sum = arr[i] + arr[j] + arr[left] + arr[right].

// If sum == target:

// Add[arr[i], arr[j], arr[left], arr[right]] to result.

// Skip duplicates for left and right.

// Move both pointers(left++, right--).

// If sum < target, move left++.

// If sum > target, move right--.

// Return result list.