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
// i implemented everything inside call backs to use the variables,because once i leave the callback functions
// scope i no longer could access the result, first or the second variable
