class ListNode {
    constructor(val) {
        this.val = val === undefined ? 0 : val;
    }
}

function mergeTwoLists(list1, list2) {
    const dummy = new ListNode();
    let tail = dummy;
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            tail.next = list1;
            list1 = list1.next
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }
    while (list1) {
        tail.next = list1;
        list1 = list1.next;
        tail = tail.next;
    }

    while (list2) {
        tail.next = list2;
        list2 = list2.next;
        tail = tail.next;
    }
    return dummy.next;
}