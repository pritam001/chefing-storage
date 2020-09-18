/***
 980. Unique Paths III
 Hard

 On a 2-dimensional grid, there are 4 types of squares:

 1 represents the starting square.  There is exactly one starting square.
 2 represents the ending square.  There is exactly one ending square.
 0 represents empty squares we can walk over.
 -1 represents obstacles that we cannot walk over.

 Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.



 Example 1:

 Input: [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
 Output: 2
 Explanation: We have the following two paths:
 1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
 2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)

 Example 2:

 Input: [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
 Output: 4
 Explanation: We have the following four paths:
 1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
 2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
 3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
 4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)

 Example 3:

 Input: [[0,1],[2,0]]
 Output: 0
 Explanation:
 There is no path that walks over every empty square exactly once.
 Note that the starting and ending square can be anywhere in the grid.



 Note:

 1 <= grid.length * grid[0].length <= 20

 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
const uniquePathsIII = function(grid) {
    if(grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    let start, end, zeroes = 0;
    let rows = grid.length;
    let cols = grid[0].length;
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(grid[i][j] === 0) {
                zeroes++;
            }
            if(grid[i][j] === 1) {
                start = [i, j];
            }
            if(grid[i][j] === 2) {
                end = [i, j];
            }
        }
    }
    return noOfPathsGivenStartAndEnd(grid, start, end, zeroes);
}

/**
 * @param {number[][]} grid
 * @param {[number, number]} start
 * @param {[number, number]} end
 * @param {number} zeroes
 * @return {number}
 */
const noOfPathsGivenStartAndEnd = function(grid, start, end, zeroes) {
    if(start[0] === end[0] && start[1] === end[1] && zeroes === 0) {
        return 1;
    }
    let temp;
    let up = 0;
    let newGrid = grid;
    newGrid[start[0]][start[1]] = -2;
    if(start[0] - 1 >= 0) {
        if(newGrid[start[0] - 1][start[1]] >= 0) {
            temp = newGrid[start[0] - 1][start[1]];
            newGrid[start[0] - 1][start[1]] = 1;
            up = noOfPathsGivenStartAndEnd(newGrid, [start[0] - 1, start[1]], end, zeroes - (temp === 0 ? 1 : 0));
            newGrid[start[0] - 1][start[1]] = temp;
        }
    }
    let down = 0;
    if(start[0] + 1 <  grid.length) {
        if(newGrid[start[0] + 1][start[1]] >= 0) {
            temp = newGrid[start[0] + 1][start[1]];
            newGrid[start[0] + 1][start[1]] = 1;
            down = noOfPathsGivenStartAndEnd(newGrid, [start[0] + 1, start[1]], end, zeroes - (temp === 0 ? 1 : 0));
            newGrid[start[0] + 1][start[1]] = temp;
        }
    }
    let left = 0;
    if(start[1] - 1 >= 0) {
        if(newGrid[start[0]][start[1] - 1] >= 0) {
            temp = newGrid[start[0]][start[1] - 1];
            newGrid[start[0]][start[1] - 1] = 1;
            left = noOfPathsGivenStartAndEnd(newGrid, [start[0], start[1] - 1], end, zeroes - (temp === 0 ? 1 : 0));
            newGrid[start[0]][start[1] - 1] = temp;
        }
    }
    let right = 0;
    if(start[1] + 1 <  grid[0].length) {
        if(newGrid[start[0]][start[1] + 1] >= 0) {
            temp = newGrid[start[0]][start[1] + 1];
            newGrid[start[0]][start[1] + 1] = 1;
            right = noOfPathsGivenStartAndEnd(newGrid, [start[0], start[1] + 1], end, zeroes - (temp === 0 ? 1 : 0));
            newGrid[start[0]][start[1] + 1] = temp;
        }
    }
    return up + down + left + right;
}

module.exports = uniquePathsIII;