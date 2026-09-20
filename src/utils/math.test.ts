import { describe, test, expect } from "@jest/globals";
import { sum } from "./math";

describe("sum function", () => {
  test("1+2 phải bằng 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  test("5 + 5 phải bằng 10", () => {
    expect(sum(5, 5)).toBe(10);
  });
});
