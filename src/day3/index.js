const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function splitStringInHalf(input) {
  return [
    input.slice(0, input.length / 2),
    input.slice(input.length / 2, input.length),
  ];
}

function findIntersectionLetter(a, b, c) {
  const setA = new Set(a.split(""));
  const setB = new Set(b.split(""));

  let intersection = new Set([...setA].filter((letter) => setB.has(letter)));

  if (c) {
    const setC = new Set(c.split(""));
    intersection = new Set(
      [...intersection].filter((letter) => setC.has(letter))
    );
  }

  return [...intersection][0];
}

function getPriority(letter) {
  return letters.indexOf(letter) + 1;
}

function calculateSumPartOne(lines) {
  let result = 0;

  lines.forEach((line) => {
    const containers = splitStringInHalf(line);
    const sameLetter = findIntersectionLetter(containers[0], containers[1]);
    result += getPriority(sameLetter);
  });

  return result;
}

function calculateSumPartTwo(lines) {
  let result = 0;

  for (let i = 0; i < lines.length; i += 3) {
    const sameLetter = findIntersectionLetter(
      lines[i],
      lines[i + 1],
      lines[i + 2]
    );
    result += getPriority(sameLetter);
  }

  return result;
}

module.exports = {
  calculateSumPartOne,
  calculateSumPartTwo,
};
