const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer: {
    name: String,
    email: String,
    phone: String,
    city: String,
    address: String
  },
  items: [
    {
      _id: String,
      title: String,
      price: Number,
      quantity: Number
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Order", orderSchema);