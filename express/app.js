const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}... `);
});

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from the server side",
    app: "natours",
    status: 200,
  });
});
app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    message: tours,
    status: 200,
    app: "natours",
  });
});
