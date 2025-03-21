function reverseStack(stack) {
    if (stack.length <= 1) return; // Base case

    let temp = stack.pop();
    reverseStack(stack);
    insertAtBottom(stack, temp);
}

function insertAtBottom(stack, value) {
    if (stack.length === 0) {
        stack.push(value);
        return;
    }

    let temp = stack.pop();
    insertAtBottom(stack, value);
    stack.push(temp);
}

// Example
let stack2 = [1, 2, 3, 4];
reverseStack(stack2);
console.log(stack2); // Output: [4, 3, 2, 1]
