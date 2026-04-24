import React from 'react'
import { useState } from 'react'
import './fields.css'


const Field_form = ({onClose, onSubmitSuccess}) => {
 const [formdata , setFormData] = useState({
    fieldName : "",
    cropType : "",
    fieldStage : "",
    fieldStatus : ""
 })

 const handleChange = (e) => {
   const {name ,value} = e.target;

   setFormData((prev)=> ({
    ...prev,
    [name] : value
   }))
 };
 

 const handleSubmit = (e) => {
    e.preventDefault()
    //console.log(formdata)

    //Api call to submit the form data to the backend
    const url = "http://localhost:5000/fieldUpload"; // Replace with your backend API endpoint
    fetch(url, {
      method: "POST",
       headers : {
         "Content-Type" : "application/json"
       },
       body : JSON.stringify(formdata)
    })
       .then(res => res.json())
       .then(data => {
        console.log('success:' , data)
        if(onSubmitSuccess) onSubmitSuccess()
        onClose()
       }).catch((err) => console.error(err));
 }

  return (
    <div className="form_container">
        <form className="fields_details" onSubmit={handleSubmit}>
                <h1>Field Details</h1>
                <div className="Inputs">
                    <div>
                    <span className="Input_label">Field Name</span>
                    <input type="text"
                    name="fieldName"
                    placeholder="Enter Field Name ...."
                    value = {formdata.fieldName}
                    onChange = {handleChange}/>
                    </div>
                    
                    <div>
                    <span className="Input_label">Crop Type</span>
                    <input type="text"
                    name="cropType"
                    placeholder="Enter Crop Type ...."
                    value = {formdata.cropType}
                    onChange = {handleChange}/>
                    </div>

                    <div>
                    <span className="Input_label">Field Stage</span>
                     <select name="fieldStage" onChange={handleChange} value={formdata.fieldStage}>
                            <option value="Planting">Planting</option>
                            <option value="Growing">Growing</option>
                            <option value="Ready">Ready</option>
                            <option value="Harvested">Harvested</option>
                     </select>
                    </div>

                    <div>
                    <span className="Input_label">Field Status</span>
                     <select name="fieldStatus" onChange={handleChange} value={formdata.fieldStatus}>
                            <option value="Active">Active</option>
                            <option value="At Risk">At Risk</option>
                            <option value="Completed">Completed</option>
                     </select>
                    </div>
                </div>
                <div className="buttons">
                    <button className="reject_btn" type="button" onClick ={onClose}>Close</button>
                    <button className="okay_btn" type="submit">Submit</button>
                </div>
        </form>
    </div>
  )
}

export default Field_form