import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
// done but existed email didn't appear error msg
const Signup = () => {
  const [message, setMessage] = useState("");

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: ""
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setFieldError, resetForm }) => {
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/signup`, values, {
          headers: { "Content-Type": "application/json" }
        });

        // Save token
        localStorage.setItem("token", response.data.token);

        setMessage(response.data.message);
        resetForm();
      } catch (err) {
  const data = err.response?.data;

  if (data?.type === "email") {
    // specific error for existing email
    setFieldError("email", data.message);
    formik.setFieldTouched("email", true);
  } else if (data?.message) {
    setMessage(data.message);
  } else {
    setMessage("Something went wrong");
  }
}finally {
        setSubmitting(false);
      }
    }
  });

  return (
    <div className="auth-form">
      <h2>Signup</h2>
      {message && <p className="message">{message}</p>}

      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="username"
            value={formik.values.username}
            onChange={(e) => { formik.handleChange(e); setMessage(""); }}
            onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username && (
            <p style={{ color: "red" }}>{formik.errors.username}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={formik.values.email}
            onChange={(e) => { formik.handleChange(e); setMessage(""); }}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <p style={{ color: "red" }}>{formik.errors.email}</p>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={(e) => { formik.handleChange(e); setMessage(""); }}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <p style={{ color: "red" }}>{formik.errors.password}</p>
          )}
        </Form.Group>

        <Button variant="primary" type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? "Loading..." : "Sign Up"}
        </Button>
      </Form>
    </div>
  );
};

export default Signup;