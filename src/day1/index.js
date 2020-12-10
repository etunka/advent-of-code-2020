import { logger, parseLinesToArray, readFileContent } from "../utils";

// convert to array
const getEntries = (data) => parseLinesToArray(data).map(Number);

// // 2 numbers with sum 2020
function getMatchedDuo(entries) {
  const matchedDuo = [];
  for (let i = 0; i < entries.length - 1; i++) {
    for (let j = i + 1; j < entries.length; j++) {
      if (entries[i] + entries[j] === 2020) {
        matchedDuo.push(entries[i]);
        matchedDuo.push(entries[j]);
      }
    }
  }
  return matchedDuo.reduce((a, b) => a * b);
}

// // 3 numbers with sum 2020
function getMatchedTrio(entries) {
  const matchedTrio = [];
  for (let i = 0; i < entries.length - 2; i++) {
    for (let j = i + 1; j < entries.length - 1; j++) {
      for (let k = j + 1; k < entries.length; k++) {
        if (entries[i] + entries[j] + entries[k] === 2020) {
          matchedTrio.push(entries[i]);
          matchedTrio.push(entries[j]);
          matchedTrio.push(entries[k]);
        }
      }
    }
  }
  return matchedTrio.reduce((a, b) => a * b);
}

readFileContent("day1/input.txt")
  .then(getEntries)
  .then(getMatchedDuo)
  .then(logger);

readFileContent("day1/input.txt")
  .then(getEntries)
  .then(getMatchedTrio)
  .then(logger);
