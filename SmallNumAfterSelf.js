function countSmaller(nums) {
    let counts = new Array(nums.length).fill(0);
    let sorted = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        let left = 0, right = sorted.length;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (sorted[mid] < nums[i]) left = mid + 1;
            else right = mid;
        }

        counts[i] = left;
        sorted.splice(left, 0, nums[i]);
    }

    return counts;
}

console.log(countSmaller([5, 2, 6, 1])); // Output: [2,1,1,0]
console.log(countSmaller([3, 1, 2, 5])); // Output: [2,0,1,0]
