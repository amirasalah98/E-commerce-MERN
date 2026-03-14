import { useContext, useState } from "react";
import { CartContext } from "../cartContext";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    phone: ""
  });
  const {name,email,address,city,phone}= formData
    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const placeOrder = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      return;
    }

    try {
      const orderData = {
        customer: formData,
        items: cartItems
      };

      await axios.post("http://localhost:5000/api/orders", orderData);
    console.log("Order created");

      clearCart();
      navigate("/order-success");
    } catch (error) {
      console.log(error);
    }
  };

  return(
    <Form onSubmit={placeOrder}>
        <h2>Checkout</h2>
         <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </Form.Group>
    
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Phone"
                name="phone"
                value={phone}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={city}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                name="address"
                value={address}
                onChange={handleChange}
              />
            </Form.Group>
    
            <Button variant="primary" type="submit">
              Place Order
            </Button>
          </Form>
  )
}
export default Checkout;