import React from 'react'
import { NavLink } from 'react-router-dom'
import "../SideBar.css"

const Sidebar = () => {
  return (
    <div className="Sidebar">
       <h1 className="header">Smart <span>Track</span></h1>
       <div className="Navbar">
         <NavLink className="Link" to="/agent">
           <img src='/icons/dashboard.png' alt='Dashboard'/>
           <p>Dashboard</p>
         </NavLink>
         <NavLink className="Link" to="/agent/updates">
           <img src='/icons/field.png' alt='Field'/>
           <p>Update</p>
         </NavLink>
          <NavLink to='#' className="Log-Out">
            <img src= '/icons/logout.png' alt='Logout'/>
            <p>Log-Out</p>
          </NavLink>
        </div>
    </div>
  )
}

export default Sidebar