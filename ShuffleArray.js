class ShuffleArray {
    constructor(nums) {
        this.original = [...nums]; // Store original array
        this.array = nums;
    }

    reset() {
        this.array = [...this.original]; // Reset to original state
        return this.array;
    }

    shuffle() {
        let shuffled = [...this.array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // Pick a random index
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap
        }
        return shuffled;
    }
}

let obj = new ShuffleArray([1, 2, 3, 4, 5]);
console.log(obj.shuffle()); // Output: Random shuffle of array
console.log(obj.reset()); // Output: [1, 2, 3, 4, 5]
