/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import setAuthToken from "../auth/setAuthToken";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // validation
        if (!email || !pass) {
          setError('Email and password are required');
          return;
        }
    
        // Reset error and set loading state
        setError('');
        setIsLoading(true);
    
        try {
          // Make a POST request to your backend API endpoint for login
          const response = await axios.post('http://157.230.37.110:3000/auth/login', {
            email,
            password: pass,
          });
          
          const token=response.data.token;
          localStorage.setItem('token',token);
          setAuthToken(token);
    
          // Handle the response from the backend (you may need to customize this based on your backend response)
          console.log('Login successful:', response.data);
          
          // Reset form fields and loading state
          setEmail('');
          setPass('');
          setIsLoading(false);
          
          // Redirect to the main page or another page
          navigate("/dashboard");
           
        } catch (error) {
          // Handle and display error
          console.error('Error during login:', error.response ? error.response.data : error.message);
          setError('Invalid email or password');
          setIsLoading(false);
        }
      };

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
     
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email Address" id="email" name="email" />
         
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />

                {error && <p className="error-message">{error}</p>}
                
                <button type="submit" disabled={isLoading}>{isLoading ? 'Logging in...' : 'Login'}</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Dont have an account? Register here.</button>
        </div>
    )
}