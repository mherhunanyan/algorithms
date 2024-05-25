function rotateRight(head, k) {
    if (k === 0) return head;
    let tail = head;
    let size = 1;
    while (tail?.next) {
        tail = tail.next;
        size++;
    }
    let count = k % size;
    if (count === 0) return head;
    console.log(size);
    let curr = head;
    for (let i = 0; i < size - count - 1; ++i) {
        curr = curr.next
    }
    let next = curr.next;
    curr.next = null;
    tail.next = head;
    return next;
}

const obj = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null,
            }
        }
    }
}
console.log(rotateRight(obj, 9));