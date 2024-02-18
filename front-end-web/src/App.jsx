// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import { Link } from 'react-router-dom'

const App = () => {
  return (    
    <div className="landing-page">
        <div className="bg">
        
          <Navbar></Navbar>
          <Link to="/auth"><button className="signup">Login or Sign Up</button></Link>
          
          
        
          <div className="welcome">Welcome</div>
          <p className="kalimat-1">
            Take care your baby <br />
            with extra love affection
          </p>
          <p className="kalimat-2">
            Look after the newborn baby and create condusive atmosphere for the baby so the baby will have a better sleep quality
          </p>
          <div className='image'>
            <img src="/src/assets/mom-and-son.png" />
          </div>
          
        </div>
    </div>
  )
}

export default App