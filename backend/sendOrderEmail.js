const SibApiV3Sdk = require("sib-api-v3-sdk");

const sendOrderEmail = async (order) => {
  try {
    const customerName = order.customer?.name || "Customer";
    const customerEmail = order.customer?.email;

    // Safe totalPrice (0 if no items)
    const totalPrice = (order.items || []).reduce(
      (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
      0
    );

    // Safe items list
    const itemsList = (order.items || [])
      .map(item => `- ${item.title} x${item.quantity}`)
      .join("\n") || "No items provided";

    // Brevo setup
    const client = SibApiV3Sdk.ApiClient.instance;
    const apiKey = client.authentications["api-key"];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

    await tranEmailApi.sendTransacEmail({
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
Order ID: ${order.id}
      `
    });

    console.log("Admin notified");

  } catch (err) {
    console.error("Email error:", err.response?.body || err.message);
  }
};

module.exports = sendOrderEmail;