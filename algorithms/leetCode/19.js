function removeNthFromEnd(head, n) {
    
    const sential = {val: 0, next: head};
    let fast = sential;
    let slow = sential;

    for (let i = 0; i <= n; ++i) {
        fast = fast.next;
    }

    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;

    return sential.next;
}