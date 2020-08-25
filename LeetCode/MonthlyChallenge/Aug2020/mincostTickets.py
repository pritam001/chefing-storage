"""
Minimum Cost For Tickets

In a country popular for train travel, you have planned some train travelling one year in advance.  The days of the year that you will travel is given as an array days.  Each day is an integer from 1 to 365.

Train tickets are sold in 3 different ways:

    a 1-day pass is sold for costs[0] dollars;
    a 7-day pass is sold for costs[1] dollars;
    a 30-day pass is sold for costs[2] dollars.

The passes allow that many days of consecutive travel.  For example, if we get a 7-day pass on day 2, then we can travel for 7 days: day 2, 3, 4, 5, 6, 7, and 8.

Return the minimum number of dollars you need to travel every day in the given list of days.



Example 1:

Input: days = [1,4,6,7,8,20], costs = [2,7,15]
Output: 11
Explanation:
For example, here is one way to buy passes that lets you travel your travel plan:
On day 1, you bought a 1-day pass for costs[0] = $2, which covered day 1.
On day 3, you bought a 7-day pass for costs[1] = $7, which covered days 3, 4, ..., 9.
On day 20, you bought a 1-day pass for costs[0] = $2, which covered day 20.
In total you spent $11 and covered all the days of your travel.

Example 2:

Input: days = [1,2,3,4,5,6,7,8,9,10,30,31], costs = [2,7,15]
Output: 17
Explanation:
For example, here is one way to buy passes that lets you travel your travel plan:
On day 1, you bought a 30-day pass for costs[2] = $15 which covered days 1, 2, ..., 30.
On day 31, you bought a 1-day pass for costs[0] = $2 which covered day 31.
In total you spent $17 and covered all the days of your travel.

Note:

    1 <= days.length <= 365
    1 <= days[i] <= 365
    days is in strictly increasing order.
    costs.length == 3
    1 <= costs[i] <= 1000

"""
import math
import unittest
from functools import lru_cache
from typing import List


class Solution2:
    def minCostTickets(self, days: List[int], costs: List[int]) -> int:
        length: int = len(days)
        if length == 0:
            return 0

        cost: List[List[int]] = [[]] * length
        for i in range(0, length, 1):
            cost[i] = [-1] * length
        for row in range(0, length, 1):
            for col in range(row, -1, -1):
                if row == col:
                    cost[row][col] = costs[0]
                else:
                    diff: int = days[row] - days[col] + 1
                    summed_min: int = 999999999
                    for k in range(1, row - col + 1, 1):
                        summed_min = min([summed_min, cost[row][col + k] + cost[col + k - 1][col]])
                    cost_by_7_day_ticket = math.ceil(diff / 7) * costs[1]
                    cost_by_30_day_ticket = math.ceil(diff / 30) * costs[2]
                    cost[row][col] = min([summed_min, cost_by_7_day_ticket, cost_by_30_day_ticket])
        # print(cost)
        return cost[length - 1][0]


class Solution:
    def minCostTickets(self, days: List[int], costs: List[int]) -> int:
        dayset = set(days)
        durations = [1, 7, 30]

        @lru_cache(None)
        def dp(i):
            if i > 365:
                return 0
            elif i in dayset:
                return min(dp(i + d) + c
                           for c, d in zip(costs, durations))
            else:
                return dp(i + 1)

        return dp(1)


class MinCostTicketsTests(unittest.TestCase):

    @staticmethod
    def get_output(days, costs) -> int:
        solution = Solution()
        output_data = solution.minCostTickets(days, costs)
        return output_data

    def test_1(self):
        input_1: List[int] = [1, 4, 6, 7, 8, 20]
        input_2: List[int] = [2, 7, 15]
        expected_data: int = 11
        output_data: int = self.get_output(input_1, input_2)
        self.assertEqual(output_data, expected_data)

    def test_2(self):
        input_1: List[int] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31]
        input_2: List[int] = [2, 7, 15]
        expected_data: int = 17
        output_data: int = self.get_output(input_1, input_2)
        self.assertEqual(output_data, expected_data)

    def test_3(self):
        input_1: List[int] = [3, 7, 9, 11, 16, 17, 20, 21, 22, 23, 27, 28, 30, 33, 36, 37, 38, 39, 44, 46, 47, 52, 54,
                              56, 57, 58, 59, 61, 62, 66, 67, 68, 69, 73, 75, 76, 77, 78, 82, 84, 85, 86, 89, 90, 91,
                              93, 94, 96, 97, 98, 101, 104, 108, 110, 112, 114, 116, 117, 119, 122, 123, 125, 127, 128,
                              129, 130, 133, 135, 137, 139, 142, 144, 145, 149, 151, 154, 158, 159, 161, 164, 167, 172,
                              173, 174, 176, 177, 180, 181, 185, 187, 190, 191, 192, 193, 197, 201, 202, 205, 206, 208,
                              211, 212, 217, 219, 220, 221, 222, 224, 225, 226, 229, 230, 232, 234, 237, 240, 243, 245,
                              246, 249, 252, 254, 257, 258, 259, 261, 262, 264, 265, 267, 275, 281, 282, 285, 288, 289,
                              290, 291, 293, 294, 296, 297, 298, 299, 302, 306, 307, 309, 311, 313, 314, 315, 316, 317,
                              330, 334, 335, 337, 338, 339, 341, 344, 345, 346, 348, 349, 356, 357, 361]
        input_2: List[int] = [30, 149, 476]
        expected_data: int = 4776
        output_data: int = self.get_output(input_1, input_2)
        self.assertEqual(output_data, expected_data)

    def test_4(self):
        input_1: List[int] = [1, 4, 6, 7, 8, 20]
        input_2: List[int] = [7, 2, 15]
        expected_data: int = 6
        output_data: int = self.get_output(input_1, input_2)
        self.assertEqual(output_data, expected_data)


if __name__ == "__main__":
    unittest.main()
