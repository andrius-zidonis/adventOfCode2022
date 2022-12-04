const calculate = require("./index");

const readFileLines = require("../shared/readFileLines");
const testInput = readFileLines("src/day3/testInput.txt");

describe("day 3", () => {
  it("part one: sum of priority letters", () => {
    const result = calculate.calculateSumPartOne(testInput);
    expect(result).toBe(157);
  });

  it("part two: sum of priority letters in groups of three", () => {
    const result = calculate.calculateSumPartTwo(testInput);
    expect(result).toBe(70);
  });
});
