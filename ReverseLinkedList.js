function reverseLinkedListRecursive(head) {
    if (!head || !head.next) return head; // Base case

    let newHead = reverseLinkedListRecursive(head.next);
    head.next.next = head; // Reverse pointer
    head.next = null; // Set current node's next to null

    return newHead;
}

// Example Usage (Use the same ListNode class from above)
let head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(3);
head2.next.next.next = new ListNode(4);
head2.next.next.next.next = new ListNode(5);

console.log("Original List:");
printList(head2);

let reversedHead2 = reverseLinkedListRecursive(head2);
console.log("Reversed List:");
printList(reversedHead2);
