class Node {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    enQueue(item) {
        const newNode = new Node(item);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    deQueue() {
        if (!this.head) {
            return null;
        }
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        
        this.length--;        
        return this;
    }
}

const myQueue = new Queue();
myQueue.enQueue(1);
myQueue.enQueue(2);
myQueue.deQueue();
myQueue.deQueue();

console.log(myQueue);
