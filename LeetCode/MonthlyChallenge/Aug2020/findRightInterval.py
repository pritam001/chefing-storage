"""
  Find Right Interval

Given a set of intervals, for each of the interval i, check if there exists an interval j whose start point is bigger than or equal to the end point of the interval i, which can be called that j is on the "right" of i.

For any interval i, you need to store the minimum interval j's index, which means that the interval j has the minimum start point to build the "right" relationship for interval i. If the interval j doesn't exist, store -1 for the interval i. Finally, you need output the stored value of each interval as an array.

Note:

    You may assume the interval's end point is always bigger than its start point.
    You may assume none of these intervals have the same start point.



Example 1:

Input: [ [1,2] ]

Output: [-1]

Explanation: There is only one interval in the collection, so it outputs -1.



Example 2:

Input: [ [3,4], [2,3], [1,2] ]

Output: [-1, 0, 1]

Explanation: There is no satisfied "right" interval for [3,4].
For [2,3], the interval [3,4] has minimum-"right" start point;
For [1,2], the interval [2,3] has minimum-"right" start point.



Example 3:

Input: [ [1,4], [2,3], [3,4] ]

Output: [-1, 2, -1]

Explanation: There is no satisfied "right" interval for [1,4] and [3,4].
For [2,3], the interval [3,4] has minimum-"right" start point.

NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.

"""
from math import floor
import unittest
from typing import List, Dict


class Solution:
    def findRightInterval(self, intervals: List[List[int]]) -> List[int]:
        left_map: Dict[int, int] = dict()
        interval: List[int]
        index: int
        for index, interval in enumerate(intervals):
            if interval[0] not in left_map:
                left_map[interval[0]] = index
        output: List[int] = list()
        left_map_keys: List[int] = list(left_map.keys())
        left_map_keys.sort()
        for interval in intervals:
            if interval[1] in left_map:
                output.append(left_map[interval[1]])
            else:
                index: int = self.binary_search_right(interval[1], left_map_keys)
                if index >= 0:
                    output.append(left_map[index])
                else:
                    output.append(-1)
        return output

    @staticmethod
    def binary_search_right(num: int, arr: List[int]) -> int:
        # given num, return num if num in arr; else return right element; else return -1
        index: int = -99999
        start: int = 0
        end: int = len(arr) - 1
        while start <= end:
            mid: int = (start + end) // 2
            if num > arr[mid]:
                start = mid + 1
            else:
                end = mid - 1
                index = mid
        return arr[index] if index >= 0 else -99999


class FindRightIntervalTests(unittest.TestCase):

    @staticmethod
    def get_output(n: List[List[int]]) -> List[int]:
        solution = Solution()
        output_data = solution.findRightInterval(n)
        return output_data

    def test_1(self):
        input_1: List[List[int]] = [[1, 2]]
        expected_data: List[int] = [-1]
        output_data: List[int] = self.get_output(input_1)
        self.assertEqual(output_data, expected_data)

    def test_2(self):
        input_1: List[List[int]] = [[3, 4], [2, 3], [1, 2]]
        expected_data: List[int] = [-1, 0, 1]
        output_data: List[int] = self.get_output(input_1)
        self.assertEqual(output_data, expected_data)

    def test_3(self):
        input_1: List[List[int]] = [[1, 4], [2, 3], [3, 4]]
        expected_data: List[int] = [-1, 2, -1]
        output_data: List[int] = self.get_output(input_1)
        self.assertEqual(output_data, expected_data)

    def test_4(self):
        input_1: List[List[int]] = [[4, 5], [2, 3], [1, 2]]
        expected_data: List[int] = [-1, 0, 1]
        output_data: List[int] = self.get_output(input_1)
        self.assertEqual(output_data, expected_data)

    def test_5(self):
        input_1: List[List[int]] = [[1, 12], [2, 9], [3, 10], [13, 14], [15, 16], [16, 17]]
        expected_data: List[int] = [3, 3, 3, 4, 5, -1]
        output_data: List[int] = self.get_output(input_1)
        self.assertEqual(output_data, expected_data)

    def test_6(self):
        input_1: List[List[int]] = [[-100, -98], [-99, -97], [-98, -96], [-97, -95], [-96, -94], [-95, -93], [-94, -92],
                                    [-93, -91], [-92, -90], [-91, -89], [-90, -88], [-89, -87], [-88, -86], [-87, -85],
                                    [-86, -84], [-85, -83], [-84, -82], [-83, -81], [-82, -80], [-81, -79], [-80, -78],
                                    [-79, -77], [-78, -76], [-77, -75], [-76, -74], [-75, -73], [-74, -72], [-73, -71],
                                    [-72, -70], [-71, -69], [-70, -68], [-69, -67], [-68, -66], [-67, -65], [-66, -64],
                                    [-65, -63], [-64, -62], [-63, -61], [-62, -60], [-61, -59], [-60, -58], [-59, -57],
                                    [-58, -56], [-57, -55], [-56, -54], [-55, -53], [-54, -52], [-53, -51], [-52, -50],
                                    [-51, -49], [-50, -48], [-49, -47], [-48, -46], [-47, -45], [-46, -44], [-45, -43],
                                    [-44, -42], [-43, -41], [-42, -40], [-41, -39], [-40, -38], [-39, -37], [-38, -36],
                                    [-37, -35], [-36, -34], [-35, -33], [-34, -32], [-33, -31], [-32, -30], [-31, -29],
                                    [-30, -28], [-29, -27], [-28, -26], [-27, -25], [-26, -24], [-25, -23], [-24, -22],
                                    [-23, -21], [-22, -20], [-21, -19], [-20, -18], [-19, -17], [-18, -16], [-17, -15],
                                    [-16, -14], [-15, -13], [-14, -12], [-13, -11], [-12, -10], [-11, -9], [-10, -8],
                                    [-9, -7], [-8, -6], [-7, -5], [-6, -4], [-5, -3], [-4, -2], [-3, -1], [-2, 0],
                                    [-1, 1], [0, 2], [1, 3], [2, 4], [3, 5], [4, 6], [5, 7], [6, 8], [7, 9], [8, 10],
                                    [9, 11], [10, 12], [11, 13], [12, 14], [13, 15], [14, 16], [15, 17], [16, 18],
                                    [17, 19], [18, 20], [19, 21], [20, 22], [21, 23], [22, 24], [23, 25], [24, 26],
                                    [25, 27], [26, 28], [27, 29], [28, 30], [29, 31], [30, 32], [31, 33], [32, 34],
                                    [33, 35], [34, 36], [35, 37], [36, 38], [37, 39], [38, 40], [39, 41], [40, 42],
                                    [41, 43], [42, 44], [43, 45], [44, 46], [45, 47], [46, 48], [47, 49], [48, 50],
                                    [49, 51], [50, 52], [51, 53], [52, 54], [53, 55], [54, 56], [55, 57], [56, 58],
                                    [57, 59], [58, 60], [59, 61], [60, 62], [61, 63], [62, 64], [63, 65], [64, 66],
                                    [65, 67], [66, 68], [67, 69], [68, 70], [69, 71], [70, 72], [71, 73], [72, 74],
                                    [73, 75], [74, 76], [75, 77], [76, 78], [77, 79], [78, 80], [79, 81], [80, 82],
                                    [81, 83], [82, 84], [83, 85], [84, 86], [85, 87], [86, 88], [87, 89], [88, 90],
                                    [89, 91], [90, 92], [91, 93], [92, 94], [93, 95], [94, 96], [95, 97], [96, 98],
                                    [97, 99], [98, 100], [99, 101]]
        expected_data: List[int] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
                                    25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
                                    46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66,
                                    67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87,
                                    88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106,
                                    107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123,
                                    124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140,
                                    141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157,
                                    158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174,
                                    175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191,
                                    192, 193, 194, 195, 196, 197, 198, 199, -1, -1]
        output_data: List[int] = self.get_output(input_1)
        self.assertEqual(output_data, expected_data)


if __name__ == "__main__":
    unittest.main()
