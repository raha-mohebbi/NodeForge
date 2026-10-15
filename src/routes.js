const message = require("./messages");
const jobValidator = require("./Jobs");
const routes =(req,res)=>{
 if (req.url === "/" && req.method === "GET") {
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
        const result = jobValidator(parsedData);
        if (result.error) {
          res.setHeader("Content-Type", "application/json");

          res.statusCode = 400;
          res.end(JSON.stringify({ error: result.error }));
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

}

module.exports = routes;