class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    return adder(l1,l2,0);
};
function adder(l1: ListNode | null, l2: ListNode | null, carry : number) : ListNode |null {
    if(l1 !== null && l2 !== null) {
        if(carry + l1.val + l2.val < 10) {
            return new ListNode(carry + l1.val + l2.val, adder(l1.next,l2.next,0));
        } else {
            return new ListNode(carry+l1.val+l2.val-10, adder(l1.next, l2.next, 1));
        }
    } else if(l1 !== null) {
        if(carry + l1.val < 10) {
            return new ListNode(carry + l1.val, adder(l1.next,null,0));
        } else {
            return new ListNode(carry+l1.val-10, adder(l1.next, null, 1));
        }
    } else if(l2 !== null) {
        if(carry + l2.val < 10) {
            return new ListNode(carry + l2.val, adder(l2.next,null,0));
        } else {
            return new ListNode(carry+l2.val-10, adder(l2.next, null, 1));
        }
    } else {
        if(carry > 0) {
            return new ListNode(1,null);
        } else {
            return null;
        }
    }
    
}
