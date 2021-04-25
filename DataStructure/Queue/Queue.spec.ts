import {PlainQueue} from "./Queue";

const { test, expect } = require("@jest/globals");

test("PlainQueue constructor / enqueue / dequeue / front / rear", () => {
    const q: PlainQueue<number> = new PlainQueue(4);
    console.log("Empty PlainQueue construction ", q.readAsArray());
    expect(q.readAsArray()).toStrictEqual([null, null, null, null]);
    // console.log("PlainQueue enqueue 1");
    q.enqueue(1);
    // console.log(q.readAsArray());
    expect(q.readAsArray()).toStrictEqual([1, null, null, null]);
    q.enqueue(2);
    // console.log(q.readAsArray());
    expect(q.readAsArray()).toStrictEqual([1, null, null, 2]);
    const dequeuedItem = q.dequeue();
    // console.log(q.readAsArray());
    expect(q.readAsArray()).toStrictEqual([null, null, null, 2]);
});

test("PlainQueue ", () => {
    const q = new PlainQueue(4);
    expect(q.readAsArray()).toStrictEqual([null, null, null, null]);
});