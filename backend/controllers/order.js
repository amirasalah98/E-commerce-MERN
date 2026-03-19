const Order = require("../models/Order");
const nodemailer = require('nodemailer');

exports.postOrder = async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();

    const customerEmail = req.body?.customer?.email;
    const customerName = req.body?.customer?.name || "Customer";

    if (!customerEmail) {
      console.log("No customer email provided");
      return res.status(400).json({ message: "Customer email is required" });
    }
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: customerEmail,
      subject: "Your Order Confirmation",
      text: `Hello ${customerName},\n\nYour order has been placed successfully!\n\nThank you!`,
    };

    // Send email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response);
    } catch (emailError) {
      console.error("Email error:", emailError);
    }

    res.status(201).json({ message: "Order created" });

  } catch (error) {
    console.error("Order error:", error);
    res.status(500).json({ message: "Failed to create order", error: error.message });
  }
};