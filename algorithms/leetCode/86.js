class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
// [1,4,3,2,5,2]

function partition(head, x) {
    let c1 = new Node(0);
    let c2 = new Node(0);
    let left = c1;
    let right = c2;
    let current = head;
    while (current) {
        if (current.val < x) {
            left.next = current;
            left = left.next;
        } else {
            right.next = current;
            right = right.next;
        }
        current = current.next;
    }
    left.next = c2.next;
    right.next = null;
    return c1.next;
}