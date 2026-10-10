const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.url === "/" && req.method === "GET") {
    const message = {
      message_content: "hello from NodeForge",
    };

    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(message));
  } else if (req.url === "/about" && req.method === "GET") {
    res.end("about");
  } else if (req.url === "/jobs" && req.method === "POST") {
    let receivedData = "";

    req.on("data", (chunk) => {
      receivedData += chunk;
    });

    req.on("end", () => {
      try {
        const parsedData = JSON.parse(receivedData);
        if (
          typeof parsedData.name != "string" ||
          parsedData.name.trim() === ""
        ) {
          res.setHeader("Content-Type", "application/json");

          res.statusCode = 400;
          res.end(JSON.stringify({ error: "Invalid name" }));
          return;
        }

        if (!["low", "medium", "high"].includes(parsedData.priority)) {
          res.setHeader("Content-Type", "application/json");
          res.statusCode = 400;
          res.end(JSON.stringify({ error: "invalid priority" }));
          return;
        }
        const responseData = {
          job: parsedData,
        };

        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(responseData));

        console.log(parsedData);
      } catch (error) {
        res.statusCode = 400;
        res.setHeader("Content-Type", "application/json");
        res.end(
          JSON.stringify({
            error: "Invalid JSON body",
          }),
        );
      }
    });
  } else {
    res.statusCode = 404;
    res.end("404");
  }
});

server.listen(5000, () => {
  console.log("NodeForge server is running on port 5000");
});
