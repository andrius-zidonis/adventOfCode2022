const calculate = require("./index");

const readFileLines = require("../shared/readFileLines");
const testInput = readFileLines("src/day4/testInput.txt");

describe("day 4", () => {
  it("part one: find elf count that totally contains in other sections", () => {
    const result = calculate(testInput);
    expect(result).toBe(2);
  });

  it("part one: find elf count that overlaps in other sections", () => {
    const result = calculate(testInput, true);
    expect(result).toBe(4);
  });
});
