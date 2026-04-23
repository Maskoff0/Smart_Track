import React from 'react'
import "./Assignments.css";


const getStatusClass = (status) => {
  if (status === "At Risk") return "status_risk";
  if (status === "Completed") return "status_completed";
  if (status === "Active") return "status_active";
  return "";
};

const Assignment = ({file}) => {
  return (
    <div className="Assignment_Record">
        <span>{file.agentName}</span>
        <span>{file.fieldName}</span>
        <span>{file.cropType}</span>
        <span>{file.fieldStage}</span>
        <span className={getStatusClass(file.fieldStatus)}>{file.fieldStatus}</span>
    </div>
  )
}

export default Assignment