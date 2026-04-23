import React from 'react'
import "../Header/header.css"

const Header = () => {
    const agentName = localStorage.getItem('agentName')

  return (
      <div className="Head">
        <span className="Welcome">Welcome<span>{agentName}</span></span>
        <div className="right">
            <div className="Search">
                <input type="text" placeholder="Search..."/>
                <img src="./icons/search.png" alt="search-icon" width={20} height={15}/>
            </div>
            <div className="profile">
                <img src="./icons/profile.jpg" alt="profile"/>
                <div className="Name">
                    <span>{agentName}</span>
                    <span>Agent</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Header