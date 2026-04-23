import React from 'react'
import './Admin.css'
import SideBar from '../../components/Sidebar/SideBar'
import { Outlet } from 'react-router-dom'


const Admin = () => {
  return (
    <div className="Admin">
      <div className="Admin-dashboard">
        <SideBar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Admin