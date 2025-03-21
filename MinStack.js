class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(element) {
        this.stack.push(element);
        if (this.minStack.length === 0 || element <= this.getMin()) {
            this.minStack.push(element);
        }
    }

    pop() {
        if (this.isEmpty()) return "Stack is empty";
        let removed = this.stack.pop();
        if (removed === this.getMin()) {
            this.minStack.pop();
        }
        return removed;
    }

    peek() {
        if (this.isEmpty()) return "Stack is empty";
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        if (this.minStack.length === 0) return "Stack is empty";
        return this.minStack[this.minStack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    print() {
        console.log(this.stack.join(" "));
    }
}

// Example usage
const minStack = new MinStack();
minStack.push(5);
minStack.push(3);
minStack.push(7);
console.log(minStack.getMin()); // Output: 3
minStack.pop();
console.log(minStack.getMin()); // Output: 3
minStack.pop();
console.log(minStack.getMin()); // Output: 5
