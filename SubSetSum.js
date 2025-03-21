function subsetSum(arr) {
    let result = [];

    function backtrack(index, sum) {
        if (index === arr.length) {
            result.push(sum);
            return;
        }

        backtrack(index + 1, sum + arr[index]); // Include element
        backtrack(index + 1, sum); // Exclude element
    }

    backtrack(0, 0);
    return result.sort((a, b) => a - b);
}

// Example
console.log(subsetSum([2, 3]));
// Output: [0, 2, 3, 5]



// Using Recursion