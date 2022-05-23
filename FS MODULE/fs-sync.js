// destructuring and getting only readFileSync and writeFileSync from the fs module
const { readFileSync, writeFileSync } = require("fs");

// reading the content in first.txt using readFileSync method same goes for second.txt
let first = readFileSync("../CONTENT/first.txt", "utf-8");
let second = readFileSync("../CONTENT/second.txt", "utf-8");

/* on writeFileSync even if we give a non existent file it will create a file in the given path and
writes the content we have given as the second arguement
*/
writeFileSync(
  "../CONTENT/result.txt",
  `
here is the result text file : ${first}  ${second}
`,
  { flag: "a" } //use this flag to append the string to the already existent file
);
