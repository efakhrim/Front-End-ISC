/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import "./Profile.css"
import {
    FaUser,
}from "react-icons/fa";


const Profile = (defaultValue) => {
    const token =localStorage.getItem('token');
    if(token) {
      axios.defaults.headers.common['Authorization']= ` ${token}`
    }
    const [formState, setFormState] = useState(
        defaultValue || {
            name: "",
            parent:"",
            gender: "Male",
          }
    );
    useEffect(() => {
        loadData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]);
    
      const loadData = async () => {
        const result = await axios.get("http://157.230.37.110:3000/admin/account");
        setFormState(result.data);
      };


  return (
    <div className='hospital'><FaUser></FaUser>{formState.hospital_id}</div>
  );
};

export default Profile