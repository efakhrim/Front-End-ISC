/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerQuarter, faThermometerHalf, faThermometerThreeQuarters, faTint, faHeartbeat} from '@fortawesome/free-solid-svg-icons';
import '../components/Monitor.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsGraphUp } from "react-icons/bs";
// ... (other imports)


const Monitor = () => {
  const [rows, setList] = useState([]);

  let navigate = useNavigate();
  
  const getEmotionFromId = (emotionId) => {
    const emotions = {
      1: { label: 'Belly Pain', emoji: '🤢' },
      2: { label: 'Burping', emoji: '😊' },
      3: { label: 'Discomfort', emoji: '😕' },
      4: { label: 'Hungry', emoji: '🍼' },
      5: { label: 'Tired', emoji: '😴' },
      0: { label: 'Silent', emoji: '🤫' },
      // ... add more mappings as needed
    };
  
    // Return an object with both the label and emoji for the given emotionId
    return emotions[emotionId] || { label: 'Unknown', emoji: '❓' };
  };

  useEffect(() => {
    const token =localStorage.getItem('token');
    if(token) {
      axios.defaults.headers.common['Authorization']= ` ${token}`
    }
    

    loadList();
    const initialFetchTimeout = setTimeout(loadList, 100);
    
    const intervalId = setInterval(loadList, 5000);

    return () => {
        clearTimeout(initialFetchTimeout);
        clearInterval(intervalId);
    };
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

  const getTemperatureIcon = (temperature) => {
    if (temperature < 32) {

      return <FontAwesomeIcon icon={faThermometerQuarter} style={{ color: 'blue', fontSize: '24px' }} />;
    } else if (temperature >= 32 && temperature <= 36) {
      return <FontAwesomeIcon icon={faThermometerHalf} style={{ color: 'blue', fontSize: '24px' }} />;
    } else {

      return <FontAwesomeIcon icon={faThermometerThreeQuarters} style={{ color: 'red', fontSize: '24px' }} />;
    }

  };

  const getBabyTemperatureIcon = (temperature) => {
    if (temperature < 36) {
      return <FontAwesomeIcon icon={faThermometerQuarter} style={{ color: 'blue', fontSize: '24px' }} />;
    } else if (temperature >= 36 && temperature <= 37) {
      return <FontAwesomeIcon icon={faThermometerHalf} style={{ color: 'blue', fontSize: '24px' }} />;
    } else {

      return <FontAwesomeIcon icon={faThermometerThreeQuarters} style={{ color: 'red', fontSize: '24px' }} />;
    }
  };

  const getHumidityIcon = (humidity) => {
    if (humidity < 30) {
      return <FontAwesomeIcon icon={faTint} style={{ color: 'blue', fontSize: '24px' }} />;
    } else if (humidity >= 30 && humidity <= 60) {
      return <FontAwesomeIcon icon={faTint} style={{ color: 'blue', fontSize: '24px' }} />;
    } else {
      return <FontAwesomeIcon icon={faTint} style={{ color: 'blue', fontSize: '24px' }} />;
    }
  };

  const getHeartRateIcon = (heartRate) => {
    if (heartRate < 60) {
      return <FontAwesomeIcon icon={faHeartbeat} style={{ color: 'red', fontSize: '24px' }} />;
    } else if (heartRate >= 60 && heartRate <= 100) {
      return <FontAwesomeIcon icon={faHeartbeat} style={{ color: 'red', fontSize: '24px' }} />;
    } else {
      return <FontAwesomeIcon icon={faHeartbeat} style={{ color: 'red', fontSize: '24px' }} />;
    }
  };


  return (
    <div className='table-wrapper'>
    
    <table className='table'>
    <thead>
          <tr>
            <th>Detail</th>
            <th>Incubator ID</th>
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
                <td className="fit">
                  <span className="actions">
                    <Link to={`/detailview/${row.baby_id}`}>
                      <BsGraphUp
                        className="view-btn"
                      />
                    </Link>

                  </span>
                </td>
                <td>{row.incubator_id}</td>
                
                <td>{getEmotionFromId(latestHistory.emotion_id).emoji} {getEmotionFromId(latestHistory.emotion_id).label}</td>
                <td>{getTemperatureIcon(latestHistory.temperature_incubator)} {formatNumber(latestHistory.temperature_incubator)}°C</td>
                <td>{getBabyTemperatureIcon(latestHistory.temperature_baby)} {formatNumber(latestHistory.temperature_baby)}°C</td>
                <td>{getHumidityIcon(latestHistory.humidity)}{formatNumber(latestHistory.humidity)}%</td>
                <td>{getHeartRateIcon(latestHistory.heart_rate)}{formatNumber(latestHistory.heart_rate)}bpm</td>
                <td>{formatNumber(latestHistory.spo2)}%</td>
              </tr>
            ) : null;
          })}
        </tbody>
  </table>
      
  
    </div>
    
  );
};

export default Monitor;
