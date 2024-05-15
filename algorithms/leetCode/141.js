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
    reverseList() {
        let curr = this.head;
        let prev = null;
        this.tail = this.head;
        while (curr) {
            let next = curr.next;   
            curr.next = prev;
            prev = curr
            curr = next;
        }
        this.head = prev;
        console.log(this.head);
    }
    isCycled() {
        const hashSet = new Set();
        let currenNode = this.head;
        for (let i = 0; currenNode; ++i) {
            if (hashSet.has(currenNode)) {
                return true;
            }
            hashSet.add(currenNode);
            currenNode = currenNode.next;
        }
        return false;
    }
}

function hasCycle(head) {
    const hashSet = new Set();
    let currentNode = this.head;
    while (currentNode) {
        if (hashSet.has(currentNode)) {
            return true;
        }
        hashSet.add(currentNode);

        currentNode = currentNode.next;
    }
    return false;
} 

const myLinkedList = new SingleLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
console.log(myLinkedList.isCycled());