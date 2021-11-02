import { expect, test } from "@jest/globals";

import solve from "./130_surroundedRegions";

test("surroundedRegions 1", () => {
    const board: string[][] = [
        ["X", "X", "X", "X"],
        ["X", "O", "O", "X"],
        ["X", "X", "O", "X"],
        ["X", "O", "X", "X"],
    ];
    solve(board);
    expect(board).toStrictEqual([
        ["X", "X", "X", "X"],
        ["X", "X", "X", "X"],
        ["X", "X", "X", "X"],
        ["X", "O", "X", "X"],
    ]);
});

test("surroundedRegions 2", () => {
    const board: string[][] = [["X"]];
    solve(board);
    expect(board).toStrictEqual([["X"]]);
});

test("surroundedRegions 3", () => {
    const board: string[][] = [["O"]];
    solve(board);
    expect(board).toStrictEqual([["O"]]);
});
