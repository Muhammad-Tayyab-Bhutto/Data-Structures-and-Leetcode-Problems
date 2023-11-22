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
function reverseList(node: ListNode | null, currentCount: number, maxCount: number) {
    currentCount++;

    if (node == null) {
        return null;
    } else if (currentCount == maxCount) {
        return node;
    }

    let lastNode: ListNode | null = reverseList(node.next, currentCount, maxCount);
    if (lastNode == null) {
        return null;
    }

    node.next.next = node;

    return lastNode;
}

function getNextAfterCount(node: ListNode | null, count: number) {
    while (count > 0) {
        if (node == null) {
            return null;
        }
        node = node.next;
        count--;
    }

    return node;
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let current: ListNode | null = head;
    let resultHead: ListNode | null = null;
    let prev: ListNode | null = null;

    while (current != null) {
        // get first node after k nodes
        let next: ListNode | null = getNextAfterCount(current, k);

        // reverse k nodes and get last (it's new sequence)
        let lastNode: ListNode | null = reverseList(current, 0, k);

        // if nodes count < k, we do nothing
        if (lastNode == null) break;

        // just update new head once
        if (resultHead == null) {
            resultHead = lastNode;
        }

        // connect previous node list with new sequence
        if (prev != null) {
            prev.next = lastNode;
        }

        // and connect next nodes with new sequence
        current.next = next;

        prev = current;
        current = current.next;
    }

    return resultHead;
};

// ========================== Best Solution With Respect To Time Complexity===============
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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let d = { val: 0, next: head };
    let ptr = d;
    while (ptr) {
        let check = ptr;
        const buff = [];
        for (let i = 0; i < k; i++) {
            if (check?.next) buff.push(check.next);
            check = check?.next;
        }
        if (buff.length !== k) break;

        let tail;
        for (let i = k - 1; i >= 0; i--) {
            const node = buff[i];
            if (i === k - 1) {
                tail = node.next;
            }
            if (i === 0) {
                node.next = tail;
            }
            ptr.next = node;
            ptr = node;
        }
    }

    return d.next;
};