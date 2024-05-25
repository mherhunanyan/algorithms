function mergeInBetween(list1, a, b, list2) {
    let indexOfB = list1;
    while (b) {
        indexOfB = indexOfB.next;
        b--;
    }
    let indexOfA = list1;
    while (a == 1) {
        indexOfA = indexOfA.next;
        a--;
    }
    indexOfA.next = list2;
    let lastIndexOfList2 = list2;
    while (lastIndexOfList2?.next) {
        lastIndexOfList2 = lastIndexOfList2.next;
    }
    lastIndexOfList2.next = indexOfB;
}