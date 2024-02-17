// eslint-disable-next-line no-unused-vars
import React from 'react'
import Sidebar from "../components/Sidebar"
import Profile from "../components/Profile"
import "./Monitoring.css"
import Monitor from "../components/Monitor"

const Monitoring = () => {
  return (
    <div className='monitoring-page'>
      <div className='bg-monitoring'>
        <Sidebar>
          <div className='mon'>
            <Profile></Profile>
            <div className='text'>Monitoring Page</div>
          </div>
          <div>
            <Monitor></Monitor>
          </div>
        </Sidebar>
      </div>
    </div>
  )
}

export default Monitoring