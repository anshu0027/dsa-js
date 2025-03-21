function findLeaders(arr) {
    let leaders = [], maxRight = -Infinity;

    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > maxRight) {
            leaders.push(arr[i]);
            maxRight = arr[i];
        }
    }

    return leaders.reverse();
}

// Example
console.log(findLeaders([16, 17, 4, 3, 5, 2])); // Output: [17, 5, 2]
console.log(findLeaders([10, 9, 8, 7])); // Output: [10]
