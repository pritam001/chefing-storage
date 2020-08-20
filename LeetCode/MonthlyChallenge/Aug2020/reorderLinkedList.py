"""
Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example 1:

Given 1->2->3->4, reorder it to 1->4->2->3.

Example 2:

Given 1->2->3->4->5, reorder it to 1->5->2->4->3.

"""

import unittest

# Definition for singly-linked list.
from typing import List


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def reorderList(self, head: ListNode) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        length = 0
        curr = head
        node_dict = {}
        while curr is not None:
            node_dict[length] = curr
            curr = curr.next
            length += 1

        j = length - 1
        for i in range(length):
            if node_dict[i].next is None or node_dict[i].next == node_dict[j]:
                break
            i_next = node_dict[i].next
            j_next = node_dict[j].next
            node_dict[i].next = node_dict[j]
            node_dict[j].next = i_next
            node_dict[j - 1].next = j_next
            j -= 1


class reorderListTests(unittest.TestCase):

    @staticmethod
    def is_same(one, another) -> bool:
        this_node = one
        that_node = another
        while this_node is not None and that_node is not None:
            if this_node.val == that_node.val:
                if this_node.next is None and that_node.next is None:
                    return True
                elif this_node.next is not None and that_node.next is not None:
                    this_node = this_node.next
                    that_node = that_node.next
                else:
                    return False
            else:
                return False
        return True

    @staticmethod
    def createLinkedList(arr: List[int]):
        linked_list = None
        prev = None
        for i in range(len(arr)):
            if prev is None:
                linked_list = ListNode(arr[i])
                prev = linked_list
            else:
                prev.next = ListNode(arr[i])
                prev = prev.next
        return linked_list

    @staticmethod
    def printLinkedList(node: ListNode) -> None:
        arr: List[int] = []
        curr = node
        while curr is not None:
            arr.append(curr.val)
            curr = curr.next
        print(arr)

    def printDebugData(self, a: ListNode, b: ListNode, c: ListNode) -> None:
        print("input")
        self.printLinkedList(a)
        print("expected")
        self.printLinkedList(b)
        print("output")
        self.printLinkedList(c)

    @staticmethod
    def get_output(head) -> None:
        solution = Solution()
        solution.reorderList(head)

    def test1(self):
        a = self.createLinkedList([1, 2, 3, 4])
        b = self.createLinkedList([1, 4, 2, 3])
        c = self.createLinkedList([1, 2, 3, 4])
        self.get_output(c)

        if not self.is_same(c, b):
            self.printDebugData(a, b, c)

        self.assertEqual(self.is_same(c, b), True)

    def test2(self):
        a = self.createLinkedList([1, 2, 3, 4, 5])
        b = self.createLinkedList([1, 5, 2, 4, 3])
        c = self.createLinkedList([1, 2, 3, 4, 5])
        self.get_output(c)

        if not self.is_same(c, b):
            self.printDebugData(a, b, c)

        self.assertEqual(self.is_same(c, b), True)


if __name__ == "__main__":
    unittest.main()
