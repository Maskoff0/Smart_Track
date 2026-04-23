import React from 'react'
import '../Fields/fields.css'

const Agent_record = ({file}) => {
  return (
    <div className="agent_record">
      <span>{file.agentNumber}</span>
      <span>{file.agentName}</span>
      <span className="delete"><img src="/icons/delete.png" alt="delete"/></span>
    </div>
  )
}

export default Agent_record