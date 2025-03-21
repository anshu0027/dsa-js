function findMedianSortedArrays(nums1, nums2) {
    let merged = [...nums1, ...nums2].sort((a, b) => a - b);
    let mid = Math.floor(merged.length / 2);

    return merged.length % 2 === 0 ? (merged[mid - 1] + merged[mid]) / 2 : merged[mid];
}

console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5
