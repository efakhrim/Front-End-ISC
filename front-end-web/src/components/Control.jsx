/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './Control.css';

const Control = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [temperature, setTemperature] = useState(null);
  const [oxygenLevel, setOxygenLevel] = useState(null);
  const [humidity, setHumidity] = useState(null);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Simulate fetching sensor data from your server or sensor
  const fetchData = () => {
    setTemperature((Math.random() * 30 + 20).toFixed(2)); // Replace this with actual data
    setOxygenLevel((Math.random() * 10 + 90).toFixed(2)); // Replace this with actual data
    setHumidity((Math.random() * 50 + 30).toFixed(2)); // Replace this with actual data
  };

  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value);
  };

  const handleOxygenLevelChange = (e) => {
    setOxygenLevel(e.target.value);
  };

  const handleHumidityChange = (e) => {
    setHumidity(e.target.value);
  };

  useEffect(() => {
    // Fetch and update data every 5 seconds (adjust the interval as needed)
    const intervalId = setInterval(fetchData, 5000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="controlling">
      <table className='table'>
        <thead>
          <tr>
            <th>Incubator ID</th>
            <th>Music</th>
            <th> Set Temperature</th>
            <th> Set Oxygen Level</th>
            <th> Set Humidity</th>
            <th >Current Sensor Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>incubator0001</td>
            <td>
                <div className="music-control">
                    <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
                    <ReactPlayer
                    className="player"
                    url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Replace this with your song URL
                    playing={isPlaying}
                    controls
                    width="300px"
                    height="90px"
                    />
                </div>
            </td>
            <td>
                <div className="temperature-control">       
                    <input
                        type="number"
                        value={temperature}
                        onChange={handleTemperatureChange}
                        min={0}
                        max={100}
                    />
                    <label>°C</label>
                </div>
            </td>
            <td>
                <div className="oxygen-level-control"> 
                    <input
                        type="number"
                        value={oxygenLevel}
                        onChange={handleOxygenLevelChange}
                        min={0}
                        max={100}
                    />
                    <label>%</label>
                </div>
            </td>
            <td>
                <div className="humidity-control">    
                    <input
                        type="number"
                        value={humidity}
                        onChange={handleHumidityChange}
                        min={0}
                        max={100}
                    />
                    <label>%</label>
                </div> 
            </td>
            <td>
                <div className="sensor-data">
                    <p>Temperature: {temperature} °C</p>
                    <p>Oxygen Level: {oxygenLevel}%</p>
                    <p>Humidity: {humidity}%</p>
                </div>  
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Control;
