import { expect, test } from "@jest/globals";

import maxProfit from "./121_bestTimeToBuyAndSellStock";

test("bestTimeToBuyAndSellStock 1", () => {
    const prices: number[] = [7, 1, 5, 3, 6, 4];
    const profit = maxProfit(prices);
    expect(profit).toStrictEqual(5);
});

test("bestTimeToBuyAndSellStock 2", () => {
    const prices: number[] = [7, 6, 4, 3, 1];
    const profit = maxProfit(prices);
    expect(profit).toStrictEqual(0);
});
