const express = require('express')
const app = express()
const routes= require("./routes")
const port = 5000
app.use(express.json())
app.use(routes)

app.listen(port, () => {
  console.log("NodeForge server is running on port 5000");
});
