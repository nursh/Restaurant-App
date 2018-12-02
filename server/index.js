const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api/stripe", (req, res) => {
  console.log(req.body);
  res.status(200);
});

app.listen(port, () =>
  console.log(`Express-Graphql is running on port ${port}`)
);
