// eslint-disable-next-line no-unused-vars
import React from 'react'
import Sidebar from "../components/Sidebar"
import Profile from "../components/Profile"
import { Table } from "../components/HistoryTab";
import "./History.css"

const History = () => {
  return (
    <div className='history-page'>
      <div className='bg-history'>
        <Sidebar>
          <div className='his'>
            <Profile></Profile>
            <div className='text'>History Page</div>
            <Table/>
          </div>
        </Sidebar>
      </div>

    </div>
  )
}

export default History