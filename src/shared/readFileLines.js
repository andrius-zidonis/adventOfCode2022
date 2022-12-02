const fs = require("fs");

function readFileLinesToArray(filePath) {
  const data = fs.readFileSync(filePath, {
    encoding: "utf8",
    flag: "r",
  });

  return data.split(/\r?\n/);
}

module.exports = readFileLinesToArray;
