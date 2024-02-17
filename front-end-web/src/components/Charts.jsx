// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import "./Charts.css"
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Charts = (defaultValue) => {
    const token = localStorage.getItem('token');
    if (token) {
        axios.defaults.headers.common['Authorization'] = `${token}`
    }

    const [chartData, setChartData] = useState({});
    const { baby_id } = useParams();

    const [formState, setFormState] = useState(
        defaultValue || {
            name: "",
            parent:"",
            gender: "Male",
          }
    );


    useEffect(() => {

        const fetchData = () => {
            axios.get(`http://157.230.37.110:3000/baby/${baby_id}`)
                .then(response => {
                    const transformedData = response.data.history.map(entry => ({
                        time: entry.time,
                        temperature_baby: entry.temperature_baby,
                        temperature_incubator: entry.temperature_incubator,
                        humidity: entry.humidity,
                        heart_rate: entry.heart_rate,
                        spo2: entry.spo2,
                    }));
                    setChartData(transformedData);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        };
        loadData();
    
        const initialFetchTimeout = setTimeout(fetchData, 100);
    

        const intervalId = setInterval(fetchData, 5000);
    
        return () => {
            clearTimeout(initialFetchTimeout);
            clearInterval(intervalId);
        };
    }, [baby_id]);

    const loadData = async () => {
        const result = await axios.get(`http://157.230.37.110:3000/baby/${baby_id}`);
        setFormState(result.data);
      };
    
    return (
        <div className='charts-container'>
      
        
        <div className='charts'>
            <LineChart width={600} height={300} data={chartData}>
                <Line type="monotone" dataKey="temperature_baby" stroke="#2196F3" strokeWidth={3} />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="time" />
                <YAxis domain={[0, 60]}/>
                <Tooltip />
                <Legend />
            </LineChart>
            <LineChart width={600} height={300} data={chartData}>
                <Line type="monotone" dataKey="humidity" stroke="#FFCA29" strokeWidth={3} />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Legend />
            </LineChart>
            <LineChart width={600} height={300} data={chartData}>
                <Line type="monotone" dataKey="temperature_incubator" stroke="#32CA29" strokeWidth={3} />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="time" />
                <YAxis domain={[0, 60]} />
                <Tooltip />
                <Legend />
            </LineChart>
            <LineChart width={600} height={300} data={chartData}>
                <Line type="monotone" dataKey="heart_rate" stroke="red" strokeWidth={3} />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="time" />
                <YAxis domain={[0, 150]} />
                <Tooltip />
                <Legend />
            </LineChart>
            <LineChart width={600} height={300} data={chartData}>
                <Line type="monotone" dataKey="spo2" stroke="cyan" strokeWidth={3} />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="time" />
                <YAxis domain={[0, 150]} />
                <Tooltip />
                <Legend />
            </LineChart>
        </div>
        <div className='head'>ID Incubator :    {formState.incubator_id}</div>
        </div>

    );
};

export default Charts;
