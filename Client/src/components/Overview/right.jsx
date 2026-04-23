import React from 'react'
import Available from '../Available/Available'
import "./Overview.css"
import RecentUpdates from '../Available/Assigned'

const Right = () => {
  return (
    <div className="Right">
        <span>Available Fields</span>
        <Available/>
        <span className="span">Recent Updates</span>
        <RecentUpdates/>
    </div>
  )
}

export default Right