const mongoose = require("mongoose");
const SibApiV3Sdk = require("sib-api-v3-sdk");

const orderSchema = new mongoose.Schema({
  customer: {
    name: { type: String, required: true },
    email: { type: String, required: true },
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

}, { timestamps: true });
orderSchema.post("save", async function (doc) {
  try {
    // if (!this.isNew) return;

    const customerName = doc.customer?.name || "Customer";
    const customerEmail = doc.customer?.email;

      const totalPrice = doc.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    // 🔹 Setup Brevo
    const client = SibApiV3Sdk.ApiClient.instance;
    const apiKey = client.authentications["api-key"];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

    // 🔹 Build items list
    const itemsList = doc.items
      .map(item => `- ${item.title} x${item.quantity}`)
      .join("\n");

    // ✅ Send email ONLY to ADMIN
    tranEmailApi.sendTransacEmail({
      sender: { email: process.env.EMAIL_USER },
      to: [{ email: process.env.ADMIN_EMAIL, name: "Admin" }],
      subject: "New Order Received",
      textContent: `
New Order 🚀

Customer: ${customerName}
Email: ${customerEmail}

Items:
${itemsList}

Total: ${totalPrice}
Order ID: ${doc._id}
      `
    }).catch(console.error);

    console.log("Admin notified");

  } catch (err) {
    console.error("Email hook error:", err.message);
  }
});

module.exports = mongoose.model("Order", orderSchema);