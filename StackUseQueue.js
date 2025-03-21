class StackUsingQueue {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(element) {
        this.queue1.push(element);
    }

    pop() {
        if (this.isEmpty()) return "Stack is empty";
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());
        }
        const poppedElement = this.queue1.shift();
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
        return poppedElement;
    }

    peek() {
        if (this.isEmpty()) return "Stack is empty";
        return this.queue1[this.queue1.length - 1];
    }

    isEmpty() {
        return this.queue1.length === 0;
    }

    size() {
        return this.queue1.length;
    }

    print() {
        console.log(this.queue1.join(" "));
    }
}

// Example usage
const stackQueue = new StackUsingQueue();
stackQueue.push(10);
stackQueue.push(20);
stackQueue.print(); // Output: 10 20
console.log(stackQueue.pop()); // Output: 20
console.log(stackQueue.peek()); // Output: 10
