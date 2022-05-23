const http = require("http");

// req- it's the request from the clients
// res- it's the response we send
/* createServer()-as you guessed 
it , it's the method to create a 
server present in the http 
module and it takes 
a callback function as it's arguemnt those
arguemnts are request and response 
*/
const server = http.createServer((req, res) => {
  res.write("welcome to our homepage");
  res.end();
});

server.listen(5000);
