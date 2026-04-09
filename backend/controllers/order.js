// const Order = require("../models/Order");
// import SibApiV3Sdk from "sib-api-v3-sdk"; // npm install sib-api-v3-sdk

// exports.postOrder = async (req, res) => {
//   try {
//     const newOrder = new Order(req.body);
//     await newOrder.save();

//     const customerEmail = req.body?.customer?.email;
//     const customerName = req.body?.customer?.name || "Customer";

//     if (!customerEmail) {
//       console.log("No customer email provided");
//       return res.status(400).json({ message: "Customer email is required" });
//     }

//     // Brevo API setup
//     const client = SibApiV3Sdk.ApiClient.instance;
//     const apiKey = client.authentications["api-key"];
//     apiKey.apiKey = process.env.BREVO_API_KEY;

//     const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

//     // Send email
//     await tranEmailApi.sendTransacEmail({
//       sender: { email: process.env.EMAIL_USER },
//       to: [{ email: customerEmail, name: customerName }],
//       subject: "Your Order Confirmation",
//       textContent: `Hello ${customerName},\n\nYour order has been placed successfully!\n\nThank you!`,
//     });

//     console.log("Email sent via Brevo API");
//     res.status(201).json({ message: "Order created" });

//   } catch (error) {
//     console.error("Order/email error:", error);
//     res.status(500).json({ message: "Failed to create order", error: error.message });
//   }
// };
// const Order = require("../models/Order");
const { validationResult } = require('express-validator');
const fs = require('fs');
const path = require('path');
const ordersFilePath = path.join(__dirname, '../orders.json');
const sendOrderEmail = require('../sendOrderEmail');

exports.postOrder = async (req, res) => {
  const { name, email, phone, city, address } = req.body;
  const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  try {

const data = fs.readFileSync(ordersFilePath, 'utf-8');
    const orders = JSON.parse(data);
    const newOrder = {
      id: Date.now(), // simple unique id
      customer: {
        name,
        email
      },
      phone,
      city,
      address,
      createdAt: new Date()
    };
      orders.push(newOrder);
      fs.writeFileSync(ordersFilePath, JSON.stringify(orders, null, 2));
      //  await sendOrderEmail(newOrder);


    res.status(201).json({ message: "Order created" });
  } catch (error) {
    console.error("Order error:", error);
    res.status(500).json({
      message: "Failed to create order",
      error: error.message,
    });
  }
};