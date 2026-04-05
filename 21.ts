class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  if (!list1 || !list2) {
    if(!list1 && !list2) return null;
    if (list1) return list1;
    if (list2) return list2;
  } else {
    if (list1.val <= list2.val) {
      let x: ListNode | null = new ListNode(
        list1.val,
        mergeTwoLists(list1.next, list2),
      );
      return x;
    } else {
      let x: ListNode | null = new ListNode(
        list2.val,
        mergeTwoLists(list1, list2.next),
      );
      return x;
    }
  }
}
