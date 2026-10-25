const express = require('express');
const app = express();
const routes = require('./routes');
const port = 5000;

app.use(express.json());
app.use(routes);

const middleware = (err, req, res, next) => {
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({
      error: 'Invalid JSON data!',
    });
  }

  console.error(err);

  return res.status(500).json({
    error: 'Internal server error',
  });
};

app.use(middleware);

app.listen(port, () => {
  console.log('NodeForge server is running on port 5000');
});
