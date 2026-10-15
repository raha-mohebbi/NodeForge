const http = require("http");
const routes = require("./routes");
const server = http.createServer((req, res) => {
  routes(req, res);
});

server.listen(5000, () => {
  console.log("NodeForge server is running on port 5000");
});
