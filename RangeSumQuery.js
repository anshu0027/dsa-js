class NumArray {
    constructor(nums) {
        this.prefixSum = [0];

        for (let i = 0; i < nums.length; i++) {
            this.prefixSum[i + 1] = this.prefixSum[i] + nums[i];
        }
    }

    sumRange(left, right) {
        return this.prefixSum[right + 1] - this.prefixSum[left];
    }
}

// Example usage:
let numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2)); // Output: 1
console.log(numArray.sumRange(2, 5)); // Output: -1
