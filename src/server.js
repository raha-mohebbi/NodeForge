const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  if (req.url === "/" && req.method === "GET") {
    const message = {
      message_content: "hello from NodeForge",
    };
    const response = JSON.stringify(message);
    res.setHeader("Content-Type", "application/json");
    res.end(response);
  } else if (req.url === "/about") {
    res.end("about");
  } else if (req.url === "/jobs" && req.method === "POST") {
    const clientResponse = {
      job_endPoint: "hello job",
    };
    const jobResponse = JSON.stringify(clientResponse);
    res.setHeader("Content-Type", "application/json");
    res.end(jobResponse);
  } else {
    res.statusCode = 404;
    res.end("404");
  }
});
server.listen(5000);
