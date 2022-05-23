const { readFile, writeFile } = require("fs");

readFile("../CONTENT/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  let first = result;

  readFile("../CONTENT/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    let second = result;
    writeFile(
      "../CONTENT/async.txt",
      ` here is the result text file : ${first}  ${second}`,
      (err, result) => {
        if (err) {
          return;
        }
        console.log(result);
      }
    );
  });
});
