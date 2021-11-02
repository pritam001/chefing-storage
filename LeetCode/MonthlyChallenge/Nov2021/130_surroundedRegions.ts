/**
Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example 1:

Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
Explanation: Surrounded regions should not be on the border, which means that any 'O' on the border of
 the board are not flipped to 'X'. Any 'O' that is not on the border and it is not connected to an 'O'
 on the border will be flipped to 'X'. Two cells are connected if they are adjacent cells connected horizontally or vertically.
Example 2:

Input: board = [["X"]]
Output: [["X"]]

Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 200
board[i][j] is 'X' or 'O'.
 */

/**
 Do not return anything, modify board in-place instead.
 */
function replaceBoard(board: string[][], oldChar: string, newChar: string): void {
    const m = board.length;
    const n = board[0].length;
    for (let i = 0; i < m; i += 1) {
        for (let j = 0; j < n; j += 1) {
            if (board[i][j] === oldChar) {
                // eslint-disable-next-line no-param-reassign
                board[i][j] = newChar;
            }
        }
    }
}

function dfs(board: string[][], i: number, j: number): void {
    const m = board.length;
    const n = board[0].length;
    if (i < 0 || i >= m || j < 0 || j >= n) {
        return;
    }
    if (board[i][j] === "O") {
        // eslint-disable-next-line no-param-reassign
        board[i][j] = "Z";
        dfs(board, i - 1, j);
        dfs(board, i, j - 1);
        dfs(board, i + 1, j);
        dfs(board, i, j + 1);
    }
}

function solve(board: string[][]): void {
    const m = board.length;
    const n = board[0].length;

    for (let j = 0; j < n; j += 1) {
        if (board[0][j] === "O") {
            dfs(board, 0, j);
        }
        if (board[m - 1][j] === "O") {
            dfs(board, m - 1, j);
        }
    }

    for (let i = 0; i < m; i += 1) {
        if (board[i][0] === "O") {
            dfs(board, i, 0);
        }
        if (board[i][n - 1] === "O") {
            dfs(board, i, n - 1);
        }
    }

    // eslint-disable-next-line no-param-reassign
    replaceBoard(board, "O", "X");
    // eslint-disable-next-line no-param-reassign
    replaceBoard(board, "Z", "O");
}

export default solve;
