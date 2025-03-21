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
