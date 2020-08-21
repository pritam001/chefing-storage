"""
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.



Example 1:

Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Note:

    1 <= A.length <= 5000
    0 <= A[i] <= 5000

"""
from typing import List
import unittest


class Solution:
    def sortArrayByParity(self, A: List[int]) -> List[int]:
        length: int = len(A)
        i: int = 0
        j: int = length - 1
        swap: int
        while i < j:
            if A[i] % 2 == 1 and A[j] % 2 == 0:
                swap = A[i]
                A[i] = A[j]
                A[j] = swap
                i += 1
                j -= 1
            elif A[i] % 2 == 0 and A[j] % 2 == 0:
                i += 1
            elif A[i] % 2 == 1 and A[j] % 2 == 1:
                j -= 1
            else:
                i += 1
                j -= 1
        return A


class SortParityTests(unittest.TestCase):

    @staticmethod
    def get_output(input_data) -> List[int]:
        solution = Solution()
        output_data = solution.sortArrayByParity(input_data)
        return output_data

    def test_1(self):
        input_data: List[int] = [3, 1, 2, 4]
        expected_data: List[int] = [4, 2, 1, 3]
        output_data: List[int] = self.get_output(input_data)
        self.assertEqual(output_data, expected_data)

    def test_2(self):
        input_data: List[int] = [0, 2, 1]
        expected_data: List[int] = [0, 2, 1]
        output_data: List[int] = self.get_output(input_data)
        self.assertEqual(output_data, expected_data)


if __name__ == "__main__":
    unittest.main()
