const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HRCV6KeVS4i7TLO32CWgnDf9NN9Fi1hXHlZvbuqdo8AqsvqCCYCRb8b0KuLp9Oojb8rLLu2DUc2k7ByI98fQwcI00sS3YNk1Y"
);

//API

//-API config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//-API route
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request received>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "INR",
  });
  //ok-created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen command
exports.api = functions.https.onRequest(app);
