import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from './style.module.css'
import { useFormik } from "formik";
import * as Yup from "yup";

const signin=({setLoggedInUser})=>{
    const [message, setMessage] = useState('');
    const validationSchema = Yup.object({
        email:Yup.string().email("Invalid email format").required("Email is required"),
        password: Yup.string().min(6,"Password must be at least 6 characters").required("Password is required")
    })
    const formik= useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema,
        onSubmit:async(values,{setSubmitting})=>{
            try{
const res= await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`,values)
            localStorage.setItem('token', res.data.token);
            // setLoggedInUser(email);

            setMessage('Logged in successfully')
            }catch{
console.error(err.response?.data || err.message)
            setMessage('Failed to login - wrong credentials')
            }
            setSubmitting(false);
        }
    })
    
     

    
    return (
 <div className="auth-form">
            <h2>Login</h2>
            {/* <form onSubmit={onSubmit}>
                <input type="text" 
                       placeholder="Username" 
                       name="username" 
                       value={username} 
                       onChange={onChange} 
                       required />
                <input type="password" 
                       placeholder="Password" 
                       name="password" 
                       value={password} 
                       onChange={onChange} 
                       required />
                <button type="submit">Login</button>
            </form> */}
            <Form onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
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
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                       {formik.touched.password && formik.errors.password && (
    <p style={{ color: "red" }}>{formik.errors.password}</p>
  )}
                    </Form.Group>
            
                    <Button variant="primary" type="submit" disabled={formik.isSubmitting}>
                      {formik.isSubmitting ? "Loading..." : "Sign In"}
                    </Button>
                  </Form>
            <p className="message">{message}</p>
            <div>
                or <Link to="/signup" className={style.themeBtn}>
   signup
</Link>
            </div>
        </div>
        

    )

}
export default signin;