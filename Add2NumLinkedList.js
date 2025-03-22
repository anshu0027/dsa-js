class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode();
    let current = dummyHead;
    let carry = 0;

    while (l1 || l2 || carry) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return dummyHead.next;
}





// Create a Dummy Head Node to store the result list.

// Initialize carry to 0 for handling sums greater than 9.

// Loop While l1, l2, or carry Exists:

// Compute sum = (l1 value or 0) + (l2 value or 0) + carry.

// Update carry = sum / 10(integer division).

// Create a new node with sum % 10 and attach it to the result list.

// Move l1 and l2 to their next nodes if they exist.

// Return the Next Node of Dummy Head(as the actual result list).