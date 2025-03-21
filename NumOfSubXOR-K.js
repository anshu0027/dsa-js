function countSubarraysWithXor(arr, k) {
    let xorMap = new Map();
    let xor = 0, count = 0;
    xorMap.set(0, 1); // Base case

    for (let num of arr) {
        xor ^= num;

        if (xorMap.has(xor ^ k)) {
            count += xorMap.get(xor ^ k);
        }

        xorMap.set(xor, (xorMap.get(xor) || 0) + 1);
    }

    return count;
}

// Example
console.log(countSubarraysWithXor([4, 2, 2, 6, 4], 6)); // Output: 4
