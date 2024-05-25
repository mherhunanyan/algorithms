class Node {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function reverseBetween(head, left, rigth) {
    if (!head || left === rigth) return head;

    let dummy = new Node(0, head);
    let revSize = rigth - left;
    let prev = dummy;

    for (let i = 1; i < left; ++i) {
        prev = prev.next;
    }

    let start = prev.next;
    let then = start.next;

    while (revSize-- && then !== null) {
        start.next = then.next;
        then.next = prev.next;
        prev.next = then;
        then = start.next;
    }
    return dummy.next;
}

function printList(head) {
    let current = head;
    while (current) {
        console.log(current.val);
        current = current.next;
    }
}

const obj = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null,
                }
            }
        },
    }
}

const newHead = reverseBetween(obj, 2, 4);

console.log(newHead);