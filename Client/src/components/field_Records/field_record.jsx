import React from 'react'
import '../Fields/fields.css'


const getStatusClass = (status) => {
  if (status === "At Risk") return "status_risk";
  if (status === "Completed") return "status_completed";
  if (status === "Active") return "status_active";
  return "";
};

const Fields_record = ({file}) => {
  return (
    <div className="field_record">
      <span>{file.fieldName}</span>
      <span>{file.cropType}</span>
      <span>{file.fieldStage}</span>
      <span className={getStatusClass(file.fieldStatus)}>{file.fieldStatus}</span>
      <span className="delete"><img src="/icons/delete.png" alt="delete"/></span>
    </div>
  )
}

export default Fields_record