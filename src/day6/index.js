function isAllCharsUnique(line) {
  const uniqueChars = [];

  for (let i = 0; i < line.length; i++) {
    let letter = line[i];
    if (uniqueChars.includes(letter)) {
      break;
    } else {
      uniqueChars.push(letter);
    }
  }

  return uniqueChars.length === line.length;
}

function getMarker(stream, sequenceCount) {
  let markerIndex = null;

  for (let i = sequenceCount; i < stream.length; i++) {
    let testingSubstring = stream.slice(i - sequenceCount, i);
    if (isAllCharsUnique(testingSubstring)) {
      markerIndex = i;
      break;
    }
  }

  return markerIndex;
}

module.exports = getMarker;
