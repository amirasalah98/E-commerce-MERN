import { useContext, useState } from "react";
import { CartContext } from "../cartContext";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";

function Checkout() {
  const validationSchema = Yup.object({
          name: Yup.string()
    .required('Name is required'),

  email: Yup.string()
    .email('Must be a valid email')
    .required('Email is required'),

  phone: Yup.string()
    .matches(/^\d+$/, 'Must be a number')
    .required('Phone is required'),

  city: Yup.string()
    .required('City is required'),

  address: Yup.string()
    .required('Address is required'),
      })
      const formik= useFormik({
        initialValues:{
          name:"",
          email:"",
          phone:"",
          city:"",
          address:""
        },
        validationSchema,
        onSubmit: async (values, { setSubmitting }) => {
      if (cartItems.length === 0) return;

      try {
        const orderData = {
          ...values,
          items: cartItems,
        };

        await axios.post(`${import.meta.env.VITE_API_URL}/api/checkout`, orderData);
        clearCart();
        navigate("/order-success");
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    },
      })
  const { cartItems, clearCart } = useContext(CartContext);
const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   address: "",
  //   city: "",
  //   phone: ""
  // });
  // const {name,email,address,city,phone}= formData
  //   const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };
  // const placeOrder = async (e) => {
  //   e.preventDefault();

  //   if (cartItems.length === 0) {
  //     return;
  //   }

  //   try {
  //     const orderData = {
  //       customer: formData,
  //       items: cartItems
  //     };

  //     await axios.post(`${import.meta.env.VITE_API_URL}/api/checkout`, orderData);
  //   console.log("Order created");

  //     clearCart();
  //     navigate("/order-success");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return(
    <Form onSubmit={formik.handleSubmit}>
      <h2>Checkout</h2>

      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.name && formik.errors.name}
        />
        <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.email && formik.errors.email}
        />
        <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          placeholder="Phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.phone && formik.errors.phone}
        />
        <Form.Control.Feedback type="invalid">{formik.errors.phone}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          name="city"
          placeholder="City"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.city && formik.errors.city}
        />
        <Form.Control.Feedback type="invalid">{formik.errors.city}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          placeholder="Address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.address && formik.errors.address}
        />
        <Form.Control.Feedback type="invalid">{formik.errors.address}</Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={formik.isSubmitting}>
        Place Order
      </Button>
    </Form>
  )
}
export default Checkout;