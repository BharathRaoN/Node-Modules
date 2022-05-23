const http = require("http");

const server = http.createServer((req, res) => {
  // this is used to know the endpoint/adress the client is requesting
  if (req.url == "/") {
    // We could however send our response through end() without using write()
    res.end("Welcome to our homepage");
  }

  if (req.url == "/about") {
    res.end("Here is our short history");
  }

  //this is the default if the requesting content doesn't exist
  //normal response
  res.end("sorry this page doesn't exist");
  //html response: Note:use object literal for multiline comment
  res.end(`
  <h1>oops!!</h1>
  <p>this page doesn't exist</p>
  <a href="/">go to homepage</a>
  `);
});

server.listen(5000);
