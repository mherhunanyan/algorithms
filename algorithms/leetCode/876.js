class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor(val) {
        this.head = new Node(val);
        this.tail = this.head;
    }
    append(val) {
        this.tail.next = new Node(val);
        this.tail = this.tail.next;
    }
    printList() {
        const arr = [];
        let currentNode = this.head;
        while (currentNode) {
            arr.push(currentNode.val);
            currentNode = currentNode.next;
        }
        return arr;
    }
    middleNode() {
        let slow = this.head;
        let fast = this.head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow;
    }
}

function middleNode(head) {
    let slow = head;
    let fast = head;
    while (fast.next && fast) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

const myLinkedList = new SingleLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
// myLinkedList.append(5);
console.log(myLinkedList.middleNode());