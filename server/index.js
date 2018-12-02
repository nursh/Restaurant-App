const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api/stripe", (req, res) => {
  const amount = req.body.amount * 100;

  stripe.charges.create({
    amount,
    currency: "ngn",
    description: `Charge for order:${req.body.orderId}`,
    source: req.body.id
  });
  res.status(200);
});

app.listen(port, () =>
  console.log(`Express-Graphql is running on port ${port}`)
);
