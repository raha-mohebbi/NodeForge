const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const message={
        message_content:"hello from NodeForge"
    }
   const response = JSON.stringify( message)
    res.setHeader("content-type","application/json")
    res.end(response);
  } else if (req.url === "/about") {
    res.end("about");
  } else {
    res.statusCode = 404;
    res.end("404");
  }
});
server.listen(5000);
