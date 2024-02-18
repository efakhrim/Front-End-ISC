// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';


import {
    FaBars,
    FaSignOutAlt ,
    FaTv,
    FaList, 
}from "react-icons/fa";
import {
    MdDashboard
}from "react-icons/md";
import { NavLink } from 'react-router-dom';
import "./Sidebar.css"


// eslint-disable-next-line react/prop-types
const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    
    const toggle = () => setIsOpen (!isOpen);
 
    const menuItem=[
        {
            path:"/dashboard",
            name:"Dashboard",
            icon: <MdDashboard/>
        },
        {
            path:"/home",
            name:"Incubator List",
            icon: <FaList/>
        },
        {
            path:"/monitoring",
            name:"Monitoring",
            icon:<FaTv/>
        },
        {
            // Add a logout menu item
            path: "/",
            name: "Logout",
            icon: <FaSignOutAlt />,
            
        },

    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "210px" : "52px"}} className="sidebar">
               <div className="top_section">
                   <img style={{display: isOpen ? "block" : "none"}} src="/src/assets/logo-ISC.png" className='logo' ></img>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;