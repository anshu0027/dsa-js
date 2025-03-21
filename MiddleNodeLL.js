class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function findMiddleNode(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;  // Move one step
        fast = fast.next.next;  // Move two steps
    }

    return slow; // Middle node
}

// Helper function to print linked list
function printList(head) {
    let current = head;
    let result = [];
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

// Example Usage
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Original List:");
printList(head);

let middleNode = findMiddleNode(head);
console.log("Middle Node:", middleNode.val); // Output: 3







// Or






function findMiddleNodeBruteForce(head) {
    let count = 0, current = head;

    // Count total nodes
    while (current) {
        count++;
        current = current.next;
    }

    // Traverse again to the middle node
    current = head;
    for (let i = 0; i < Math.floor(count / 2); i++) {
        current = current.next;
    }

    return current;
}
