import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from './style.module.css'

const signin=({setLoggedInUser})=>{
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
     const [message, setMessage] = useState('');

    const { username, password, email } = formData;
    const onChange= e=> {
        setFormData({...formData, [e.target.name]:e.target.value})

    }
    const onSubmit = async e =>{
        e.preventDefault()
        try{
            const res= await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`,{email,password})
            localStorage.setItem('token', res.data.token);
            // setLoggedInUser(email);

            setMessage('Logged in successfully')
        }catch(err){
            console.error(err.response?.data || err.message)
            setMessage('Failed to login - wrong credentials')
        }
    }
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
                      Sign In
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