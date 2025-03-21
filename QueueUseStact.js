class QueueUsingStack {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(element) {
        this.stack1.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }

    front() {
        if (this.isEmpty()) return "Queue is empty";
        if (this.stack2.length === 0) {
            return this.stack1[0];
        }
        return this.stack2[this.stack2.length - 1];
    }

    isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    size() {
        return this.stack1.length + this.stack2.length;
    }

    print() {
        console.log([...this.stack2.reverse(), ...this.stack1].join(" "));
    }
}

// Example usage
const queueStack = new QueueUsingStack();
queueStack.enqueue(10);
queueStack.enqueue(20);
queueStack.print(); // Output: 10 20
console.log(queueStack.dequeue()); // Output: 10
console.log(queueStack.front()); // Output: 20
