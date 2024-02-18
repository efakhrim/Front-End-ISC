/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";

export const SignUp = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [hospital_id, setHospital_id] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Example validation
      if (!hospital_id || !email || !pass) {
        setError('All fields are required');
        return;
      }
  
      // Reset error and set loading state
      setError('');
      setIsLoading(true);
  
      try {
        // Make a POST request to your backend API endpoint
        const response = await axios.post('http://157.230.37.110:3000/auth/register', {
          hospital_id,
          email,
          password: pass,
        });
  
        // Handle the response from the backend (you may need to customize this based on your backend response)
        console.log('Signup successful:', response.data);
  
        // Reset form fields and loading state
        setHospital_id('');
        setEmail('');
        setPass('');
        setIsLoading(false);
      } 
      catch (error) {
        // Handle and display error
        console.error('Error during sign-up:', error.response ? error.response.data : error.message);
        setError('An error occurred during sign-up');
        setIsLoading(false);
      }
    };

    return (
      <div className="auth-form-container">
        <h2>Sign Up</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            value={hospital_id}
            name="name"
            onChange={(e) => setHospital_id(e.target.value)}
            id="name"
            placeholder="Hospital's Name"
          />
  
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email Address"
            id="email"
            name="email"
          />
  
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Creating account...' : 'Create account'}
          </button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>
          Already have an account? Login here.
        </button>
      </div>
    );
}
