function intersection(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    return [...set1].filter(num => set2.has(num));
}

// Example usage:
console.log(intersection([1, 2, 2, 1], [2, 2])); // Output: [2]
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [4, 9]
