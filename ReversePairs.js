function countReversePairs(arr) {
    function mergeAndCount(arr, left, mid, right) {
        let count = 0;
        let j = mid + 1;

        for (let i = left; i <= mid; i++) {
            while (j <= right && arr[i] > 2 * arr[j]) {
                j++;
            }
            count += (j - (mid + 1));
        }

        let sorted = [];
        let i = left, k = mid + 1;

        while (i <= mid && k <= right) {
            if (arr[i] <= arr[k]) {
                sorted.push(arr[i++]);
            } else {
                sorted.push(arr[k++]);
            }
        }

        while (i <= mid) sorted.push(arr[i++]);
        while (k <= right) sorted.push(arr[k++]);

        for (let p = left; p <= right; p++) {
            arr[p] = sorted[p - left];
        }

        return count;
    }

    function mergeSort(arr, left, right) {
        if (left >= right) return 0;
        let mid = Math.floor((left + right) / 2);
        let count = mergeSort(arr, left, mid) + mergeSort(arr, mid + 1, right);
        count += mergeAndCount(arr, left, mid, right);
        return count;
    }

    return mergeSort(arr, 0, arr.length - 1);
}

// Example
console.log(countReversePairs([1, 3, 2, 3, 1])); // Output: 2
