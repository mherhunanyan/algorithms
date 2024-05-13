// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value,
            prev: null,
            next: null,
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = {
            value,
            next: null,
            prev: null,
        };
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }
    prepend(value) {
        const newNode = {
            value,
            next: null,
            prev: null,
        }
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }
    printList() {
        const arr = [];
        let currentNode = this.head;
        while (currentNode.next !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
    }
    insert(index, value) {
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        if (index >= this.length) {
            this.append(value);
            return this.printList;
        }
        const newNode = {
            value,
            next: null,
            prev: null
        }
        const leader = this.traversalToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.next = follower;
        newNode.prev = leader;
        follower.prev = newNode;
        this.length++;
        return this.printList();
    }
    traversalToIndex(index) {
        let currentNode = this.head;
        for (let i = 0; i < index; ++i) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    remove(index) {
        if (index === 0) {
            this.head = this.head.next;
            return this.printList();
        }
        if (index >= this.length) {
            this.tail = this.tail.prev;
            return this.printList();
        }
        const currentNode = this.traversalToIndex(index - 1);
        const unWantedNode = currentNode.next;
        currentNode.next = unWantedNode.next;
        unWantedNode.prev = currentNode;
        this.length--;
        return this.printList();
    }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.remove(1);
console.log(myLinkedList);