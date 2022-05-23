const http = require("http");

const server = http.createServer((req, res) => {
  // this is used to know the endpoint/adress the client is requesting
  if (req.url == "/") {
    // this is used to send user data on the webpage
    res.write("welcome to our homepage");
  }

  // we have end the server, after serving so the security isn't compromised
  res.end();
});

server.listen(5000);
