// eslint-disable-next-line no-unused-vars
import React from 'react'
import Sidebar from "../components/Sidebar"
import "./IncubaControl.css"
import Control from "../components/Control"

const IncubaControl = () => {
  return (
    <div className='control-page'>
      <div className='bg-control'>
        <Sidebar>
          <div className='inc'>
            <div className='text'>Controlling Page</div>
            <div>
              <Control></Control>
            </div>
          </div>
        </Sidebar>
      </div>
    </div>
  )
}

export default IncubaControl