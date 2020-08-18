# Numbers With Same Consecutive Differences

"""
Return all non-negative integers of length N such that the absolute difference between every two consecutive digits is K.

Note that every number in the answer must not have leading zeros except for the number 0 itself.
 For example, 01 has one leading zero and is invalid, but 0 is valid.

You may return the answer in any order.

Example 1:

Input: N = 3, K = 7
Output: [181,292,707,818,929]
Explanation: Note that 070 is not a valid number, because it has leading zeroes.

Example 2:

Input: N = 2, K = 1
Output: [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]

Note:

    1 <= N <= 9
    0 <= K <= 9

"""
import math
from typing import List, Dict


class Solution:
    def mapGen(self, arr: List[int], N: int) -> Dict[int, List[int]]:
        generated_map: Dict[int, List[int]] = {}
        i: int
        for i in range(0, 10):
            generated_map[i] = []
        num: int
        for num in arr:
            generated_map[math.floor(num / pow(10, N))].append(num)
        return generated_map

    def numsSameConsecDiff(self, N: int, K: int) -> List[int]:
        return self.numsSameConsecDiffCalc(N, K, True)

    def numsSameConsecDiffCalc(self, N: int, K: int, base: bool) -> List[int]:
        ans_n: List[int] = []
        if N == 1:
            i: int
            for i in range(0, 10):
                ans_n.append(i)
        elif N > 1:
            ans_n_minus_1: List[int] = self.numsSameConsecDiffCalc(N - 1, K, False)
            map_n_minus_1: Dict[int, List[int]] = self.mapGen(ans_n_minus_1, N - 2)
            i: int = 0
            for i in range(0, 10):
                i_pow_n: int = i * pow(10, N - 1)
                if 0 <= i + K < 10:
                    i_plus_k_arr = map_n_minus_1[i + K]
                    for num in i_plus_k_arr:
                        ans_n.append(i_pow_n + num)
                if 0 <= i - K < 10:
                    i_minus_k_arr = map_n_minus_1[i - K]
                    for num in i_minus_k_arr:
                        ans_n.append(i_pow_n + num)
        if base:
            filtered_ans_n: List[int] = list(set(filter(lambda x: len(str(x)) == N, ans_n)))
            return sorted(filtered_ans_n)
        else:
            return sorted(ans_n)


solution = Solution().numsSameConsecDiff(1, 1)
print(solution)
