function createArray(start, end) {
  if (start === end) {
    return [Number(start)];
  }

  const array = [];

  for (let i = Number(start); i <= Number(end); i++) {
    array.push(i);
  }

  return array;
}

function isAnyArrayContainsInOther(a, b, overlap) {
  const isArrayContainsInOther = function (arrayA, arrayB, overlap) {
    if (overlap) {
      return arrayA.some((item) => {
        return arrayB.indexOf(item) > -1;
      });
    } else {
      return arrayA.every((item) => {
        return arrayB.indexOf(item) > -1;
      });
    }
  };

  return (
    isArrayContainsInOther(a, b, overlap) ||
    isArrayContainsInOther(b, a, overlap)
  );
}

function calculate(lines, overlap = false) {
  let result = 0;

  lines.forEach((line) => {
    const elfA = line.split(",")[0];
    const elfB = line.split(",")[1];

    const elfAStart = elfA.split("-")[0];
    const elfAEnd = elfA.split("-")[1];

    const elfASections = createArray(elfAStart, elfAEnd);

    const elfBStart = elfB.split("-")[0];
    const elfBEnd = elfB.split("-")[1];

    const elfBSections = createArray(elfBStart, elfBEnd);

    if (isAnyArrayContainsInOther(elfASections, elfBSections, overlap)) {
      result++;
    }
  });

  return result;
}

module.exports = calculate;
