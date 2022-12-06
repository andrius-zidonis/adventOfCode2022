const getMarker = require("./index");

const readFileLines = require("../shared/readFileLines");
const fileInput = readFileLines("src/day6/input.txt");

const testData = {
  case1: "mjqjpqmgbljsphdztnvjfqwrcgsmlb",
  case2: "bvwbjplbgvbhsrlpgdmjqwftvncz",
  case3: "nppdvjthqldpwncqszvftbrmjlhg",
  case4: "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg",
  case5: "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw",
};

let uniqueSequence = null;

describe("day 6", () => {
  describe("part one: unique sequence 4", () => {
    beforeEach(() => {
      uniqueSequence = 4;
    });

    it("case 1", () => {
      const result = getMarker(testData.case1, uniqueSequence);
      expect(result).toBe(7);
    });

    it("case 2", () => {
      const result = getMarker(testData.case2, uniqueSequence);
      expect(result).toBe(5);
    });

    it("case 3", () => {
      const result = getMarker(testData.case3, uniqueSequence);
      expect(result).toBe(6);
    });

    it("case 4", () => {
      const result = getMarker(testData.case4, uniqueSequence);
      expect(result).toBe(10);
    });

    it("case 5", () => {
      const result = getMarker(testData.case5, uniqueSequence);
      expect(result).toBe(11);
    });
  });

  describe("part two: unique sequence 14", () => {
    beforeEach(() => {
      uniqueSequence = 14;
    });

    it("case 1", () => {
      const result = getMarker(testData.case1, uniqueSequence);
      expect(result).toBe(19);
    });

    it("case 2", () => {
      const result = getMarker(testData.case2, uniqueSequence);
      expect(result).toBe(23);
    });

    it("case 3", () => {
      const result = getMarker(testData.case3, uniqueSequence);
      expect(result).toBe(23);
    });

    it("case 4", () => {
      const result = getMarker(testData.case4, uniqueSequence);
      expect(result).toBe(29);
    });

    it("case 5", () => {
      const result = getMarker(testData.case5, uniqueSequence);
      expect(result).toBe(26);
    });
  });
});
