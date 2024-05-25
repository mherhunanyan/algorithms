function swapNodes(head, k) {
    let left = head;
    let right = head;
    let current = head;


    for (let i = 1; i < k; ++i) {
        current = current.next;
    }
    left = current;

    while (current.next) {
        current = current.next;
        right = right.next;
    }
    

    const holdLeftVal = left.val;
    left.val = right.val;
    right.val = holdLeftVal;
    return head;
}