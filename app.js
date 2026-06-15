const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello Sanjay DevOps App 🚀");
});

server.listen(3000);
