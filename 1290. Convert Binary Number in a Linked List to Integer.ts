// =====================================My Solution======================================

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

function getDecimalValue(head: ListNode | null): number {
    if (head.next == null && head.val == 0) {
        return 0;
    }
    let bin = '';
    let obj = head;

    while (obj) {
        bin += obj.val;
        obj = obj.next;
    }
    return parseInt(bin, 2);
};

// =================================== Best Woth respect to Time==================================
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

function getDecimalValue(head: ListNode | null): number {
    let binariDigit: ListNode = head,
        counter: number = 0,
        dicimal: number = 0;
    while (binariDigit !== null) {
        binariDigit = binariDigit.next
        counter++;
    }
    binariDigit = head;
    while (binariDigit !== null) {
        counter--;
        dicimal = dicimal + (binariDigit.val * Math.pow(2, counter))

        binariDigit = binariDigit.next
    }
    return dicimal
};

// =================================== Best Woth respect to Space==================================

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

function getDecimalValue(head: ListNode | null): number {
    let hp = head;
    let num = 0;
    while (hp != null) {
        num = (num << 1) + hp.val;
        hp = hp.next;
    }
    return num;
};
