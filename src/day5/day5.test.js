const calculate = require("./index");

const readFileLines = require("../shared/readFileLines");
const testInput = readFileLines("src/day5/testInput.txt");

describe("day 5", () => {
  it("part one: move crates one by one and display top ones", () => {
    const result = calculate(testInput);
    expect(result).toBe("CMZ");
  });

  it("part two: move crates in groups and display top ones", () => {
    const result = calculate(testInput, true);
    expect(result).toBe("MCD");
  });
});
