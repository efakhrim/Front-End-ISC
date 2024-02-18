/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect}from "react";
import axios from "axios";
import "./Table.css";
import { useNavigate } from "react-router-dom";

export const Table = () => {
  const [rows, setList] = useState([]);

  let navigate = useNavigate();

  const getEmotionFromId = (emotionId) => {
    const emotions = {
      1: 'Belly Pain',
      2: 'Burping',
      3: 'Discomfort',
      4: 'Hungry',
      5: 'Tired',
      0: 'Silent'
      // ... add more mappings as needed
    };
  
    return emotions[emotionId] || 'Unknown'; // Return 'Unknown' if the id is not found
  };

  

  useEffect(() => {
    const token =localStorage.getItem('token');
    if(token) {
      axios.defaults.headers.common['Authorization']= ` ${token}`
    }
    loadList();
         // Set up an interval to fetch data periodically
         const intervalId = setInterval(() => {
          loadList();
        }, 5000); // Fetch data every 5 seconds (adjust the interval as needed)
    
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

  const formatNumber = (number) => {
    return number ? number.toFixed(2) : number;
  };
  
 
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Baby ID</th>
            <th> Time</th>
            <th>Emotion</th>
            <th>Room Temp.</th>
            <th>Baby Temp.</th>
            <th>Humidity</th>
            <th>Heart Rate</th>
            <th>SPO</th>

          </tr>
        </thead>
        <tbody >
        {rows.map((row) => (
            <>
              <tr key={row.baby_id}>
                <td>{row.baby_id}</td>
                <td colSpan="7">Extended History</td>
              </tr>
              {row.history && row.history.map((detail, idx) => (
                <tr key={row.baby_id + '-' + idx} className="history-scroll" style={{maxHeight:'100px', overflow:'auto'}}>
                  <td></td>
                  <td>{detail.date}</td>
                  <td>{getEmotionFromId(detail.emotion_id)}</td>
                  <td>{formatNumber(detail.temperature_incubator)}°C</td>
                  <td>{formatNumber(detail.temperature_baby)}°C</td>
                  <td>{formatNumber(detail.humidity)}%</td>
                  <td>{formatNumber(detail.heart_rate)}bpm</td>
                  <td>{formatNumber(detail.spo2)}%</td>
                </tr>
              ))}
            </>
          ))}
        </tbody>

      </table>
    </div>
  );
};
