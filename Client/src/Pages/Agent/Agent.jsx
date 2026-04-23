import React from 'react'
import "./Agent.css"
import Sidebar from '../../components/Agent_sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Agent = () => {
  return (
   <div className="Agent">
      <div className="Agent-dashboard">
        <Sidebar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Agent