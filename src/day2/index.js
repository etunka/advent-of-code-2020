import { logger, parseLinesToArray, readFileContent } from "../utils";

readFileContent("day2/input.txt")
  .then(parseLinesToArray)
  .then((list) => {
    return list.filter((row) => {
      const colonIndex = row.indexOf(":");
      const letter = row.charAt(colonIndex - 1);
      const nums = row.match(/\d+/g).map(Number);
      const password = row.slice(colonIndex + 1);
      const letterCount = password.split(letter).length - 1;

      return letterCount >= nums[0] && letterCount <= nums[1];
    }).length;
  })
  .then(logger);
