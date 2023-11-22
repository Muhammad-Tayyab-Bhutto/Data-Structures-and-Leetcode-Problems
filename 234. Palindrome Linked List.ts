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

function isPalindrome(head: ListNode | null): boolean {
    function isPalindromRecursive(recursiveHead: ListNode | null): boolean{
        // Reached the end of the list
        if (recursiveHead == null) {
            return true;
        }

        // Recursively traverse the linked list
        const next = isPalindromRecursive(recursiveHead.next);

        // Check if the current level of the linked list mirrors its mirror point
        const valid = recursiveHead.val === head.val;

        // Move the original linked list inward
        head = head.next;
        return next && valid;
    }
    return isPalindromRecursive(head);
};