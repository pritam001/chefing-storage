import { expect, test } from "@jest/globals";

import maxProfit from "./121_bestTimeToBuyAndSellStock";

test("sortColors 1", () => {
    const prices: number[] = [7, 1, 5, 3, 6, 4];
    const profit = maxProfit(prices);
    expect(profit).toStrictEqual(5);
});
