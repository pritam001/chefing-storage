"""
A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

The rules of Goat Latin are as follows:

    If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
    For example, the word 'apple' becomes 'applema'.

    If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
    For example, the word "goat" becomes "oatgma".

    Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
    For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.

Return the final sentence representing the conversion from S to Goat Latin.

Example 1:

Input: "I speak Goat Latin"
Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

Example 2:

Input: "The quick brown fox jumped over the lazy dog"
Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"



Notes:

    S contains only uppercase, lowercase and spaces. Exactly one space between each word.
    1 <= S.length <= 150.

"""
from typing import List
import unittest


class SolutionClean:
    def toGoatLatin(self, S: str) -> str:
        str_array: List[str] = S.split(" ")
        vowels: List[str] = ["a", "e", "i", "o", "u"]
        modified_array: List[str] = list()
        for index, s in enumerate(str_array, start=1):
            if s[0].lower() in vowels:
                modified_array.append(s + "ma" + "a"*index)
            else:
                modified_array.append(s[1:] + s[0] + "ma" + "a"*index)
        return " ".join(modified_array)


class Solution:
    def toGoatLatin(self, S: str) -> str:
        str_array = S.split(" ")
        vowels = ["a", "e", "i", "o", "u"]
        for i in range(len(str_array)):
            if str_array[i][0].lower() in vowels:
                str_array[i] = str_array[i] + "ma" + "a"*(i + 1)
            else:
                str_array[i] = str_array[i][1:] + str_array[i][0] + "ma" + "a"*(i + 1)
        return " ".join(str_array)


class GoatLatinTests(unittest.TestCase):

    @staticmethod
    def get_output(input_data) -> str:
        solution = Solution()
        output_data = solution.toGoatLatin(input_data)
        return output_data

    def test_1(self):
        input_data: str = "I speak Goat Latin"
        expected_data: str = "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
        output_data: str = self.get_output(input_data)
        self.assertEqual(output_data, expected_data)

    def test_2(self):
        input_data: str = "The quick brown fox jumped over the lazy dog"
        expected_data: str = "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
        output_data: str = self.get_output(input_data)
        self.assertEqual(output_data, expected_data)


if __name__ == '__main__':
    unittest.main()
