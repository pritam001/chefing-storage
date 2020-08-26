"""
Fizz Buzz

Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]

"""
import unittest

from typing import List


class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        output: List[str] = list()
        for i in range(1, n + 1):
            if i % 15 == 0:
                output.append("FizzBuzz")
            elif i % 5 == 0:
                output.append("Buzz")
            elif i % 3 == 0:
                output.append("Fizz")
            else:
                output.append(str(i))
        return output


class FizzBuzzTests(unittest.TestCase):

    @staticmethod
    def get_output(n: int) -> List[str]:
        solution = Solution()
        output_data = solution.fizzBuzz(n)
        return output_data

    def test_1(self):
        input_1: int = 15
        expected_data: List[int] = [
            "1",
            "2",
            "Fizz",
            "4",
            "Buzz",
            "Fizz",
            "7",
            "8",
            "Fizz",
            "Buzz",
            "11",
            "Fizz",
            "13",
            "14",
            "FizzBuzz"
        ]
        output_data: List[str] = self.get_output(input_1)
        self.assertEqual(output_data, expected_data)


if __name__ == "__main__":
    unittest.main()
