/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export const SignUp = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Sign Up</h2>
        <form className="register-form" onSubmit={handleSubmit}>

            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Hospital's Name" />
 
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Email Address" id="email" name="email" />
  
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
            <button type="submit">Create account</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}
