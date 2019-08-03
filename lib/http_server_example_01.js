var http = require('http');

console.log("Starting HTTP Server");

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8081);

console.log("Listening on: http://localhost:8081/");

