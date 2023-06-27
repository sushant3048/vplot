// a simple express server which accepts an interger as GET request on route push and stores the value on a variable and returns the value on route pull.

const express = require('express');
const app = express();
const port = 3000;

let value = 0;

app.get('/push/:value', (req, res) => {
  value = req.params.value;
  res.send(`pushed ${value}`);
});

app.get('/pull', (req, res) => {
  res.send(`${value}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
