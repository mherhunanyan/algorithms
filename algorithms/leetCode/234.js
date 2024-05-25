const reverseList = (head) => {
    let prev = null;
    let curr = head;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

const isPalindrome = (head) => {
    if (!head || !head.next) return true;
    let slow = head;
    let fast = head;
    while (fast && fast?.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    if (fast) {
        slow = slow.next;
    }
    
    let secondHalfStart = reverseList(slow);
    let firstHalfStart = head;
    while (secondHalfStart) {
        if (firstHalfStart.val !== secondHalfStart.val) {
            return false;
        }
        firstHalfStart = firstHalfStart.next;
        secondHalfStart = secondHalfStart.next;
    }
    return true;
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

console.log(reverseList(obj));