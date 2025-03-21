class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return "Stack is empty";
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) return "Stack is empty";
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.join(" "));
    }
}

// Example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.print(); // Output: 10 20
console.log(stack.pop()); // Output: 20
console.log(stack.peek()); // Output: 10
