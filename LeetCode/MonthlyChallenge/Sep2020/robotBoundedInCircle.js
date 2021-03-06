/** *
 * Robot Bounded In Circle

 On an infinite plane, a robot initially stands at (0, 0) and faces north.  The robot can receive one of three instructions:

 "G": go straight 1 unit;
 "L": turn 90 degrees to the left;
 "R": turn 90 degress to the right.

 The robot performs the instructions given in order, and repeats them forever.

 Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

 Example 1:

 Input: "GGLLGG"
 Output: true
 Explanation:
 The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
 When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.

 Example 2:

 Input: "GG"
 Output: false
 Explanation:
 The robot moves north indefinitely.

 Example 3:

 Input: "GL"
 Output: true
 Explanation:
 The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...

 Note:

 1 <= instructions.length <= 100
 instructions[i] is in {'G', 'L', 'R'}

 */

/**
 * @param {string} instructions
 * @return {boolean}
 */
const isRobotBounded = function (instructions) {
    const dirArray = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let dir = [0, 1];
    let dirIndex = 0;
    let pos = [0, 0];
    for (let i = 0; i < instructions.length; i++) {
        if (instructions[i] === "G") {
            pos = [pos[0] + dir[0], pos[1] + dir[1]];
        } else {
            if (instructions[i] === "R") {
                dirIndex++;
            } else {
                dirIndex--;
            }
            if (dirIndex < 0) {
                dirIndex = 3;
            } else if (dirIndex > 3) {
                dirIndex = 0;
            }
            dir = dirArray[dirIndex];
        }
    }
    return dirIndex !== 0 || (pos[0] === 0 && pos[1] === 0);
};
