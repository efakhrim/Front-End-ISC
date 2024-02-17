/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect} from "react";
import axios from "axios";
import "./Modal.css";
import { useNavigate, useParams } from "react-router-dom";
//import DateTimePicker from "react-datetime-picker";

export const EditList = ({ defaultValue}) => {
  let navigate = useNavigate();

  //const [value, setValue] = useState(new Date() )

  const [formState, setFormState] = useState(
     defaultValue || {
      name: "",
      parent:"",
      gender: "Male",
    }
  );
  
  const {baby_id} = useParams()

  useEffect(() => {
    loadData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  const loadData = async () => {
    const result = await axios.get(`http://157.230.37.110:3000/baby/${baby_id}`);
    setFormState(result.data);
  };

  const [errors, setErrors,] = useState("");

  const validateForm = () => {
    if (formState.name && formState.birth_date && formState.gender && formState.parent) {
      setErrors("");
      return true;
    } else {
      let errorFields = [];
      for (const [key, value] of Object.entries(formState)) {
        if (!value) {
          errorFields.push(key);
        }
      }
      setErrors(errorFields.join(", "));
      return false;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    axios.patch(`http://157.230.37.110:3000/baby/${baby_id}`, formState)
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
    navigate("/home");

  };

  return (
    <div className="edit-container">
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="name">Baby Name</label>
            <input
              name="name"
              onChange={handleChange}
              value={formState.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="birth_date">Born Date</label>
            <input
              name="birth_date"
              onChange={handleChange}
              value={formState.birth_date}
              placeholder="DD/MM/YYYY hh:mm"
            />
          </div>
          <div className="form-group">
            <label htmlFor="parent">Mother Name</label>
            <input
              name="parent"
              onChange={handleChange}
              value={formState.parent}
            />
          </div>
          <div className="form-group">
            <label htmlFor="incubator_id">ID</label>
            <input
              name="incubator_id"
              onChange={handleChange}
              value={formState.incubator_id}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              onChange={handleChange}
              value={formState.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              
            </select>
          </div>

          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="subbtn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        
      </div>
    </div>
    
  );
};

export default EditList
