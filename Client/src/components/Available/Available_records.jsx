import React from 'react'
import "./Available.css"


const getStatusClass = (status) => {
  if (status === "At Risk") return "status_ risk";
  if (status === "Completed") return "status_completed";
  if (status === "Active") return "status_active";
  return "";
};

const Available_records = ({file}) => {
  return (
     <div className="available_record">
      <span>{file.fieldName}</span>
      <span>{file.cropType}</span>
      <span>{file.fieldStage}</span>
      <span className={getStatusClass(file.fieldStatus)}>{file.fieldStatus}</span>
    </div>
  )
}

export default Available_records