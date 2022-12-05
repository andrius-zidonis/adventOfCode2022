let isCrateMover5001 = false;

const INSTRUCTION_DIVIDER = "=instructions=";

function getTopCrates(crates) {
  let result = "";

  crates.forEach((stack) => {
    result += stack[stack.length - 1];
  });

  return result;
}

function moveOneByOne(crates, moveCount, fromIndex, toIndex) {
  for (let i = 0; i < moveCount; i++) {
    const removedCrate = crates[fromIndex].pop();
    crates[toIndex].push(removedCrate);
  }
}

function moveInGroups(crates, moveCount, fromIndex, toIndex) {
  const cratesToMove = [];

  for (let i = 0; i < moveCount; i++) {
    const removedCrate = crates[fromIndex].pop();
    cratesToMove.unshift(removedCrate);
  }

  crates[toIndex].push(...cratesToMove);
}

function runInstructions(instructions, crates) {
  const cratesCopy = JSON.parse(JSON.stringify(crates));

  instructions.forEach((line) => {
    const lineParts = line.split(" ");
    const moveCount = Number(lineParts[1]);
    const fromIndex = Number(lineParts[3]) - 1;
    const toIndex = Number(lineParts[5]) - 1;

    if (!isCrateMover5001) {
      moveOneByOne(cratesCopy, moveCount, fromIndex, toIndex);
    } else {
      moveInGroups(cratesCopy, moveCount, fromIndex, toIndex);
    }
  });

  return cratesCopy;
}

function calculate(input, is5001) {
  if (is5001) {
    isCrateMover5001 = true;
  }

  const dividerIndex = input.indexOf(INSTRUCTION_DIVIDER);
  const crates = input.slice(0, dividerIndex).map((line) => {
    return line.split(",");
  });
  const instructions = input.slice(dividerIndex + 1, input.length);
  const sortedCrates = runInstructions(instructions, crates);

  return getTopCrates(sortedCrates);
}

module.exports = calculate;
