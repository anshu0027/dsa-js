function mergeIntervals(intervals) {
    if (intervals.length === 0) return [];

    intervals.sort((a, b) => a[0] - b[0]); // Sort by start time
    let merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let last = merged[merged.length - 1];

        if (last[1] >= intervals[i][0]) { // Overlapping case
            last[1] = Math.max(last[1], intervals[i][1]); // Merge
        } else {
            merged.push(intervals[i]);
        }
    }

    return merged;
}

// Example
console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]));
// Output: [[1, 6], [8, 10], [15, 18]]
