/***
 Swapping Nodes in a Linked List
 You are given the head of a linked list, and an integer k.

 Return the head of the linked list after swapping the values of the kth node from
 the beginning and the kth node from the end (the list is 1-indexed).



 Example 1:


 Input: head = [1,2,3,4,5], k = 2
 Output: [1,4,3,2,5]
 Example 2:

 Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
 Output: [7,9,6,6,8,7,3,0,9,5]
 Example 3:

 Input: head = [1], k = 1
 Output: [1]
 Example 4:

 Input: head = [1,2], k = 1
 Output: [2,1]
 Example 5:

 Input: head = [1,2,3], k = 2
 Output: [1,2,3]


 Constraints:

 The number of nodes in the list is n.
 1 <= k <= n <= 105
 0 <= Node.val <= 100
 */

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

class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function swapNodes(head: ListNode | null, k: number): ListNode | null {
    let n: number = 0;
    let curr: ListNode | null = head;
    while(curr != null) {
        n++;
        curr = curr.next;
    }
    if(k*2 === n+1) {
        return head;
    }
    if(k*2 > n) {
        k = n - k + 1;
    }

    let x_: ListNode | null = null;
    let x: ListNode | null = null;
    let y_: ListNode | null = null;
    let y: ListNode | null = null;
    curr = head;
    let prev: ListNode | null = null;
    let i: number = 1;
    while(curr != null) {
        if(i === k) {
            x_ = prev;
            x = curr;
        }
        if(i === n - k + 1) {
            y_ = prev;
            y = curr;
        }
        prev = curr;
        curr = curr.next;
        i++;
    }
    let temp: ListNode | null;
    if(x_ !== null) {
        x_.next = y;
    } else {
        head = y;
    }
    temp = y.next;
    if(x.next != y) {
        y.next = x.next;
        y_.next = x;
    } else {
        y.next = x;
    }
    x.next = temp;
    return head;
}

function readLinkedListToArray(head: ListNode | null): number[] {
    let arr: number[] = [];
    let node: ListNode | null = head;
    while(node !== null) {
        arr.push(node.val);
        node = node.next;
    }
    return arr;
}

function constructLinkedListFromArray(list: number[]): ListNode | null {
    let head: ListNode | null = null;
    let curr: ListNode | null = null;
    for(let i = 0; i < list.length; i++) {
        if(i == 0) {
            head = new ListNode(list[i], null);
            curr = head;
        } else {
            curr.next = new ListNode(list[i], null);
            curr = curr.next;
        }
    }
    return head;
}

function swapNodesConstruct(list: number[], k: number): number[] {
    let head: ListNode | null = constructLinkedListFromArray(list);
    let resp: ListNode | null = swapNodes(head, k);
    return readLinkedListToArray(resp);
}

export default swapNodesConstruct;
