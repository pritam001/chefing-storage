const {test} = require("@jest/globals");

const partitionLabels = require("./partitionLabels");

test("partitionLabels 1", () => {
    expect(partitionLabels("ababcbacadefegdehijhklij")).toStrictEqual([9,7,8]);
});

