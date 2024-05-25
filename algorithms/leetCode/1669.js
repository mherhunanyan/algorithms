function mergeInBetween(list1, a, b, list2) {
    let rigthStart = list1;
    b++;
    while (b--) {
        rigthStart = rigthStart.next;
    }

    let prev = list1;
    let c1 = {val: 0, next: prev};
    a--;
    while (a--) {
        prev = prev.next;
    }
    prev.next = list2;
    let endOfList2 = list2;
    while (endOfList2.next) {
        endOfList2 = endOfList2.next;
    }
    endOfList2.next = rigthStart;
    return c1.next;
}

