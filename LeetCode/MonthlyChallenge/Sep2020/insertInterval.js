/***
 Insert Interval

 Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

 You may assume that the intervals were initially sorted according to their start times.

 Example 1:

 Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 Output: [[1,5],[6,9]]

 Example 2:

 Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 Output: [[1,2],[3,10],[12,16]]
 Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = function(intervals, newInterval) {
    let updatedIntervals = [];
    let mergedInterval = newInterval;
    let isMergedIntervalPushed = false;
    for(let i = 0; i < intervals.length; i++) {
        let interval = intervals[i];
        if(interval[1] < mergedInterval[0]) {
            updatedIntervals.push(interval);
        } else if(mergedInterval[1] < interval[0]) {
            if(!isMergedIntervalPushed) {
                updatedIntervals.push(mergedInterval);
                isMergedIntervalPushed = true;
            }
            updatedIntervals.push(interval);
        } else {
            mergedInterval = [Math.min(mergedInterval[0], interval[0]), Math.max(mergedInterval[1], interval[1])];
        }
    }
    if(!isMergedIntervalPushed) {
        updatedIntervals.push(mergedInterval);
    }
    return updatedIntervals;
};

module.exports = insert;