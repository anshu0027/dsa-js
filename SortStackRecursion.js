function sortStack(stack) {
    if (stack.length <= 1) return; // Base case

    let temp = stack.pop();
    sortStack(stack);
    insertSorted(stack, temp);
}

function insertSorted(stack, value) {
    if (stack.length === 0 || stack[stack.length - 1] <= value) {
        stack.push(value);
        return;
    }

    let temp = stack.pop();
    insertSorted(stack, value);
    stack.push(temp);
}

// Example
let stack = [3, 1, 4, 2];
sortStack(stack);
console.log(stack); // Output: [1, 2, 3, 4]
