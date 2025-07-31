const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();
const router = express.Router();

const PAYPAL_API = "https://api-m.sandbox.paypal.com";
const { PAYPAL_CLIENT_ID, PAYPAL_SECRET } = process.env;

const generateAccessToken = async () => {
  const auth = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`).toString(
    "base64"
  );
  const response = await axios.post(
    `${PAYPAL_API}/v1/oauth2/token`,
    "grant_type=client_credentials",
    {
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  return response.data.access_token;
};

// ✅ Create Order
router.post("/create-order", async (req, res) => {
  const { amount } = req.body;
  try {
    const accessToken = await generateAccessToken();
    const response = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders`,
      {
        intent: "CAPTURE",
        purchase_units: [{ amount: { currency_code: "USD", value: amount } }],
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    res.json({ id: response.data.id });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Failed to create PayPal order" });
  }
});

// ✅ Capture Order
router.post("/capture-order/:orderId", async (req, res) => {
  const { orderId } = req.params;
  try {
    const accessToken = await generateAccessToken();
    const response = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders/${orderId}/capture`,
      {},
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Failed to capture PayPal order" });
  }
});

module.exports = router;
