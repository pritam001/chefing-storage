import { expect, test } from "@jest/globals";

import maxProfit from "./122_bestTimeToBuyAndSellStock2";

test("bestTimeToBuyAndSellStock2 1", () => {
    const prices: number[] = [7, 1, 5, 3, 6, 4];
    const profit = maxProfit(prices);
    expect(profit).toStrictEqual(7);
});

test("bestTimeToBuyAndSellStock2 2", () => {
    const prices: number[] = [1, 2, 3, 4, 5];
    const profit = maxProfit(prices);
    expect(profit).toStrictEqual(4);
});

test("bestTimeToBuyAndSellStock2 3", () => {
    const prices: number[] = [7, 6, 4, 3, 1];
    const profit = maxProfit(prices);
    expect(profit).toStrictEqual(0);
});
