class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode;
        this.tail = this.tail.next;
        this.length++;
        return this;
    }
    printList() {
        const arr = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }
    insert(index, value) {
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
        if (index >= this.length) {
            this.append(value);
            return this.printList();
        }
        const newNode = new Node(value);
        const leader = this.traversalToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }
    traversalToIndex(index) {
        let currentNode = this.head;
        for (let i = 0; i !== index; ++i) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    remove(index) {
        if (index === 0) {
            this.head = this.head.next;
            return this.printList();
        }
        const leader = this.traversalToIndex(index - 1);
        const unWantedNode = leader.next;
        leader.next = unWantedNode.next;
        this.length--;
        return this.printList();
    }
    reverse() {
        if (!this.head.next) {
            return this.head;
          }
          this.tail = this.head;
          let first = this.head;
          let second = first.next;
          while(second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
          }
      
          this.head.next = null;
          this.head = first;
          return this.printList();
    }
}

const myLinkedList = new SingleLinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.append(7);
myLinkedList.append(66);
myLinkedList.insert(2, 99)
console.log(myLinkedList.reverse());