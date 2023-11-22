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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  function size(head: ListNode | null) {
    let size: number = 0;
    while (head != null) {
      head = head.next;
      size++;
    }
    return size;
  }
  if (head == null || k == 0 || head.next == null) return head;
  let previous: ListNode | null = null;
  let current: ListNode | null = head;
  k = k % size(head);
  while (k > 0) {
    while (current.next != null) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    current.next = head;
    head = current;
    k--;
  }
  return head;
}


// ==================================Best Solution With Respect to Time=====================
function rotateRight(head: ListNode | null, k: number) {
    if (k === 0) return head;
    const origin = head;

    let counterList = head;
    let len = 0;
    while (counterList) {
        counterList = counterList.next;
        len++;
    }

    let positionOfRotatedNode = len - (k % len);
    if (len <= 1 || positionOfRotatedNode === len) return head;

    while (positionOfRotatedNode - 1 > 0) {
        head = head.next;
        positionOfRotatedNode--;
    }

    const headOfRotatedList = head.next;
    let rotatedPart = headOfRotatedList;
    head.next = null;

    while (rotatedPart.next) rotatedPart = rotatedPart.next;
    rotatedPart.next = origin;

    return headOfRotatedList;
};