/***
 Partition Labels

 A string S of lowercase English letters is given.
 We want to partition this string into as many parts as possible so that each letter appears
 in at most one part, and return a list of integers representing the size of these parts.



 Example 1:

 Input: S = "ababcbacadefegdehijhklij"
 Output: [9,7,8]
 Explanation:
 The partition is "ababcbaca", "defegde", "hijhklij".
 This is a partition so that each letter appears in at most one part.
 A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.



 Note:

 S will have length in range [1, 500].
 S will consist of lowercase English letters ('a' to 'z') only.

 */

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    class MetaOfAlphabet {
        constructor(label, index) {
            this.label = label;
            this.firstSeenOnIndex = index;
            this.lastSeenOnIndex = index;
            this.alphabetsInBetween = {};
        }

        seenOnIndex(index, subString) {
            this.lastSeenOnIndex = index;
            for(let label in subString) {
                this.addAlphabetInBetween(subString[label]);
            }
        }

        addAlphabetInBetween(label) {
            this.alphabetsInBetween[label] = 1;
        }
    }
    let metaHashMap = {};
    for(let i = 0; i < S.length; i++) {
        let label = S[i];
        if(label in metaHashMap) {
            metaHashMap[label].seenOnIndex(i, S.substring(metaHashMap[label].lastSeenOnIndex, i));
        } else {
            metaHashMap[label] = new MetaOfAlphabet(label, i);
        }
    }
    let answer = [];
    let currAlphabetSet = {};
    let segmentStartIndex = 0;
    let segmentEndIndex = 0;
    for(let i = 0; i < S.length; i++) {
        let label = S[i];
        let meta = metaHashMap[label];
        currAlphabetSet[label] = 1;
        segmentEndIndex = Math.max(segmentEndIndex, meta.lastSeenOnIndex);
        let alphabetsInBetween = Object.keys(meta.alphabetsInBetween);
        alphabetsInBetween.forEach((a) => {
            currAlphabetSet[a] = 1;
            segmentEndIndex = Math.max(segmentEndIndex, metaHashMap[a].lastSeenOnIndex);
        });
        if(i === segmentEndIndex || i === S.length - 1) {
            answer.push(segmentEndIndex - segmentStartIndex + 1);
            segmentStartIndex = i + 1;
            segmentEndIndex = i + 1;
            currAlphabetSet = {};
        }
    }
    return answer;
};

module.exports = partitionLabels;