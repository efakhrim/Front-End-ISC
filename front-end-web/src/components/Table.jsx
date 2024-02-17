/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect}from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import {useHistory} from 'react-router-dom'
//import setAuthToken from "../auth/setAuthToken";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./Table.css";

export const Table = () => {
  const [rows, setList] = useState([]);

  let navigate = useNavigate();

  //const history = useHistory();
  

  useEffect(() => {
    const token =localStorage.getItem('token');
    if(token) {
      axios.defaults.headers.common['Authorization']= ` ${token}`
    }
    loadList();
             // Set up an interval to fetch data periodically
             const intervalId = setInterval(() => {
              loadList();
            }, 500); // Fetch data every 5 seconds (adjust the interval as needed)
        
            // Clean up the interval when the component is unmounted
            return () => clearInterval(intervalId);
  }, []);

  const loadList = async () => {
    try {
      const result = await axios.get("http://157.230.37.110:3000/baby/account")
      setList(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      navigate("/auth");
      
    }
  };

  const deleteRow = async (baby_id) => {
    await axios.delete(`http://157.230.37.110:3000/baby/${baby_id}`);
    loadList();
  }

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            
            <th>Incubator ID</th>
            <th >Baby Name</th>
            <th >Born Date</th>
            <th>Gender</th>
            <th >Mother</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {


            return (
              <tr key={idx}>
                
                <td>{row.incubator_id}</td>
                <td>{row.name}</td>
                <td>{row.birth_date}</td>
                <td>{row.gender}</td>
                <td>{row.parent}</td>
                <td className="fit">
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(row.baby_id)}
                    />
                    <Link to={`/editlist/${row.baby_id}`}>
                      <BsFillPencilFill
                        className="edit-btn"
                      />
                    </Link>

                  </span>
                </td>
              </tr>
              
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
