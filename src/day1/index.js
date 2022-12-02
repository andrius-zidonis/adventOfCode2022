// input is an array of lines
// second param is to return sum of top counts
// empty line means end of elf inventory
function findMaxCalories(input, topCount = 1) {
  const elfCalories = [0];
  let elfCount = 0;

  for (let i = 0; input.length > i; i++) {
    if (input[i] === "") {
      elfCount++;
    } else {
      elfCalories[elfCount] = (elfCalories[elfCount] || 0) + Number(input[i]);
    }
  }

  if (topCount === 1) {
    return Math.max(...elfCalories);
  } else {
    elfCalories.sort((a, b) => {
      return a - b;
    });

    const topResults = elfCalories.slice(
      elfCalories.length - topCount,
      elfCalories.length
    );

    return topResults.reduce((sum, result) => {
      return sum + result;
    }, 0);
  }
}

module.exports = findMaxCalories;
