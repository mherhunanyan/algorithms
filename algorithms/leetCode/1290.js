function getDecimalValue(head) {
    let str = '';
    let curr = head;
    while (curr) {
        str += curr.val;
        curr = curr.next;
    }
    return parseInt(str, 2);
}

const obj = {
    val: 1,
    next: {
        val: 0,
        next: {
            val: 1,
            next: null,
        }
    }
};

console.log(getDecimalValue(obj));