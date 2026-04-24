import React from 'react'
import "./Sidebar.css"
import { NavLink } from 'react-router-dom'


const SideBar = () => {
  return (
    <div className="Sidebar">
       <h1 className="header">Smart <span>Track</span></h1>
       <div className="Navbar">
         <NavLink className="Link" to="/admin">
           <img src='/icons/dashboard.png' alt='Dashboard'/>
           <p>Dashboard</p>
         </NavLink>
         <NavLink className="Link" to="/admin/fields">
           <img src='/icons/field.png' alt='Field'/>
           <p>Fields</p>
         </NavLink>
         <NavLink className="Link" to="/admin/agents">
           <img src='/icons/agent.png' alt='Agent'/>
           <p>Agents</p>
          </NavLink>
         <NavLink className="Link" to="/admin/assignments">
           <img src='/icons/assign.png' alt='Agent'/>
           <p>Assignments</p>
         </NavLink>
         <NavLink to='/' className="Log-Out">
           <img src= '/icons/logout.png' alt='Logout'/>
           <p>Log-Out</p>
         </NavLink>
       </div>
    </div>
  )
}

export default SideBar