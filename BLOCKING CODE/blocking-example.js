const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Welcome to our homepage");
  }

  if (req.url == "/about") {
    //BLOCKING CODE
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(i, j);
      }
    }

    res.end("Here is our short history");
  }
  if (req.url == "/contact") {
    res.end("here is our contact info");
  }
  res.end(`
  <h1>oops!!</h1>
  <p>this page doesn't exist</p>
  <a href="/">go to homepage</a>
  `);
});

server.listen(4000, () => {
  console.log("server is listening to port 4000");
});
