import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const { username, password, email } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/auth/signup", {
        username,
        email,
        password
      });

      setMessage("Registered successfully");

      setFormData({
        username: "",
        email: "",
        password: ""
      });

    } catch (err) {
      console.error(err.response?.data || err.message);
      setMessage("Failed to register, user already exists");
    }
  };

  return (
    <div className="auth-form">
      <h2>Signup</h2>
      <p className="message">{message}</p>

      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="username"
            value={username}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default Signup;