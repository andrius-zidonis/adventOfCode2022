const calculate = require("./index");
const readFileLines = require("../shared/readFileLines");

const testInput = readFileLines("src/day2/testInput.txt");

describe("rock paper scissors strategy score", () => {
  it("part one: should calculate with my assumptions and return score 15", () => {
    const result = calculate.usingMyAssumption(testInput);
    expect(result).toBe(15);
  });

  it("part two: should calculate like elf said and return score 12", () => {
    const result = calculate.likeElfSaid(testInput);
    expect(result).toBe(12);
  });
});
