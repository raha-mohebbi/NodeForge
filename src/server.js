const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("hello");
  } else if (req.url === "/about") {
    res.end("about");
  } else {
    res.statusCode = 404;
    res.end("404");
  }
});
server.listen(5000);
