const express = require("express");
const app = express();

const env = require('dotenv').config({path: './.env'});

// This is your test secret API key.
// const stripe = require("stripe")('sk_test_51MSB2wIlCEHks7DgwfqyPzQNTkKjQiu40vmGeMLba5IJwiX3GclG65xYKU2FEcFAoyJjCO6cQyLQWs9mtERKbriz00i2JtPPK0');


const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.use(express.static("public"));
app.use(express.json());

const calculateOrderAmount = (items, price) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400;
};

app.post("/create-payment-intent", async (req, res) => {

const { productId } = req.body;
// look up the price of the product in the db

  const { items, price } = req.body;
  console.log(items);
  console.log(items.id);
  console.log(items?.id);


  console.log(price);
  console.log(price.id);
  console.log(price?.id);
 

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

app.listen(4242, () => console.log("Node server listening on port 4242!"));