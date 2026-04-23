import React from 'react'
import "./Assignments.css";

const Assignment = ({file}) => {
  return (
    <div className="Assignment_Record">
        <span>{file.agentName}</span>
        <span>{file.fieldName}</span>
        <span>{file.cropType}</span>
        <span>{file.fieldStage}</span>
        <span>{file.fieldStatus}</span>
    </div>
  )
}

export default Assignment