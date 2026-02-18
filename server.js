const http = require('http');

const server = http.createServer((req, res) => {
  res.end("DevOps CI/CD Running 🚀");
});

server.listen(3000);
