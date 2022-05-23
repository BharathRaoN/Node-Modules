const http = require("http");

const server = http.createServer((req, res) => {
  // this is used to know the endpoint/adress the client is requesting
  if (req.url == "/") {
    // We could however send our response through end() without using write()
    res.end("Welcome to our homepage");
  }
});

server.listen(5000);
