/** *
 Repeated Substring Pattern

 Given a non-empty string check if it can be constructed by taking a substring of it
 and appending multiple copies of the substring together.
 You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

 Example 1:

 Input: "abab"
 Output: True
 Explanation: It's the substring "ab" twice.

 Example 2:

 Input: "aba"
 Output: False

 Example 3:

 Input: "abcabcabcabc"
 Output: True
 Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)

 */

/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function (s) {
    if (s.length < 2) {
        return false;
    }
    let rep_len = Math.ceil(s.length / 2);
    while (rep_len > 0) {
        const is_rep = repetition(s.substring(0, rep_len), s.substring(rep_len, s.length));
        if (is_rep) {
            return true;
        }
        rep_len--;
    }
    return false;
};

function repetition(rep, rest) {
    if (rep === rest) {
        return true;
    }
    if (rest.startsWith(rep)) {
        return repetition(rep, rest.substring(rep.length));
    }
    return false;
}

const optimalRepeatedSubstringPattern = function (s) {
    return (s + s).substring(1, 2 * s.length - 1).includes(s);
};

module.exports = repeatedSubstringPattern;
