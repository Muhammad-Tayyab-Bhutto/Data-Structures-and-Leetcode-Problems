/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let dummy: ListNode | null = new ListNode(0); // created dummy node
  dummy.next = head;
  let prev: ListNode | null = dummy; // intialising prev pointer on dummy node

  for (let i = 0; i < left - 1; i++) prev = prev.next; // adjusting the prev pointer on it's actual index

  let curr: ListNode | null = prev.next; // curr pointer will be just after prev
  // reversing
  for (let i = 0; i < right - left; i++) {
    let forw: ListNode | null = curr.next; // forw pointer will be after curr
    curr.next = forw.next;
    forw.next = prev.next;
    prev.next = forw;
  }
  return dummy.next;
}
