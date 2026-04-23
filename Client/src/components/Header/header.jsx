import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className="Head">
        <span className="Welcome">Welcome<span>Admin</span></span>
        <div className="right">
            <div className="Search">
                <input type="text" placeholder="Search..."/>
                <img src="./icons/search.png" alt="search-icon" width={20} height={15}/>
            </div>
            <div className="profile">
                <img src="./icons/profile.jpg" alt="profile"/>
                <div className="Name">
                    <span>Becky Mwesh</span>
                    <span>Admin</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Header