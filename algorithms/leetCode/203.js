function removeElements(head, val) {
    const sentinel = {val: 0, next: head};
    let current = sentinel;

    while (current?.next) {
        if (current.next.val === val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return sentinel.next;
}