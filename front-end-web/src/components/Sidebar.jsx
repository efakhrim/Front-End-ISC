// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import {
    FaTh,
    FaBars,
    FaHistory,
    FaBabyCarriage,
    FaTv,
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import "./Sidebar.css"


// eslint-disable-next-line react/prop-types
const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/home",
            name:"Dashboard",
            icon: <FaTh/>
        },
        {
            path:"/monitoring",
            name:"Monitoring",
            icon:<FaTv/>
        },
        {
            path:"/control",
            name:"Incubator Control",
            icon:<FaBabyCarriage/>
        },
        {
            path:"/history",
            name:"History",
            icon:<FaHistory/>
        },

    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "210px" : "52px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">ISC</h1>
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