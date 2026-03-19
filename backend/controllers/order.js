const Order = require("../models/Order");
const nodemailer= require('nodemailer')


exports.postOrder=async(req,res)=>{
try {
    const newOrder = new Order(req.body);
    await newOrder.save();

const transporter = nodemailer.createTransport({
      // service: "gmail",
      // auth: {
      //   user: process.env.EMAIL_USER,
      //   pass: process.env.EMAIL_PASS
      // }
      host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT), // 587
  secure: false, // true if port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
    });
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: req.body.customer.email, // customer email
      subject: "Your Order Confirmation",
      text: `Hello ${req.body.customer.name},\n\nYour order has been placed successfully!\n\nThank you!`
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) console.log("Email error:", err);
      else console.log("Email sent:", info.response);
    });
    res.status(201).json({ message: "Order created" });
  } catch (error) {
    res.status(500).json(error);
  }

}