
class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const sortList = (head) => {
    if (!head) return null;
    const nodes = sortNodes(head);
    let result;
    for (let i = 0; i < nodes.length; ++i) {
        result = new Node(nodes[i], result)
    }
    return result;
}

const sortNodes = (head) => {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }

    return arr.sort((a, b) => b - a);
}
