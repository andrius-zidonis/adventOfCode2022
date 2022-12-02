const findMaxCalories = require("./index");
const readFileLines = require("../shared/readFileLines");

const testInput = readFileLines("src/day1/testInput.txt");

describe("Maximum total Calories Elf carrying?", () => {
  it("part one: should return maximum 24000", () => {
    const result = findMaxCalories(testInput);
    expect(result).toBe(24000);
  });

  it("part two: should return sum of 3 maximum", () => {
    const result = findMaxCalories(testInput, 3);
    expect(result).toBe(45000);
  });
});
