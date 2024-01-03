/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import '../components/Monitor.css';
import axios from 'axios';

const Monitor = () => {
  const [rows, setList] = useState([]);
  
  const getEmotionFromId = (emotionId) => {
    const emotions = {
      1: 'Belly Pain',
      2: 'Burping',
      3: 'Discomfort',
      4: 'Hungry',
      5: 'Tired',
      6: 'Silent'
      // ... add more mappings as needed
    };
  
    return emotions[emotionId] || 'Unknown'; // Return 'Unknown' if the id is not found
  };

  useEffect(() => {

    loadList();
  }, []);
  const loadList = async () => {
    const result = await axios.get("http://157.230.37.110:3000/baby");
    setList(result.data);
  };

  const formatNumber = (number) => {
    return number ? number.toFixed(2) : number;
  };


  return (
    <div className='table-wrapper'>
    
    <table className='table'>
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
    <tbody>
    {rows.map((row) => {
            const latestHistory = row.history && row.history.length > 0 ? row.history[row.history.length - 1] : null;
            return latestHistory ? (
              <tr key={row.baby_id}>
                <td>{row.baby_id}</td>
                <td>{latestHistory.date}</td>
                <td>{getEmotionFromId(latestHistory.emotion_id)}</td>
                <td>{formatNumber(latestHistory.temperature_incubator)}</td>
                <td>{formatNumber(latestHistory.temperature_baby)}</td>
                <td>{formatNumber(latestHistory.humidity)}</td>
                <td>{formatNumber(latestHistory.heart_rate)}</td>
                <td>{formatNumber(latestHistory.spo2)}</td>
              </tr>
            ) : null;
          })}
        </tbody>
  </table>
      
  
    </div>
    
  );
};

export default Monitor;
