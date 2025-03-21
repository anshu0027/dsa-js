function searchRange(nums, target) {
    function findIndex(isFirst) {
        let left = 0, right = nums.length - 1, index = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                index = mid;
                if (isFirst) right = mid - 1; // Search left side
                else left = mid + 1; // Search right side
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return index;
    }

    return [findIndex(true), findIndex(false)];
}

// Example usage:
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // Output: [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // Output: [-1, -1]
