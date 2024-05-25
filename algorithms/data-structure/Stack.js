class Node {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(item) {
        const newNode = new Node(item);
        if (this.length === 0) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return item;
    }

    pop() {
        if (!this.tail) {
            return null;
        }
        if (this.head === this.tail) {
            const holdingPointer = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return holdingPointer;
        }
        
        let curr = this.head;
        while (curr?.next?.next) {
            curr = curr.next;
        }
        const holdingPointer = curr.next;
        curr.next = null;
        this.tail = curr;
        this.length--;
        return holdingPointer;
    }

    peek() {
        return this.tail;
    }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);