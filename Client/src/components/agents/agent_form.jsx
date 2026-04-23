import React from 'react'
import { useState } from 'react'
import '../Fields/fields.css'


const Agent_form = ({onClose}) => {
 const [formdata , setFormData] = useState({
    agentNumber : "",
    agentName : ""
 })

 const handleChange = (e) => {
   const {name ,value} = e.target;

   setFormData((prev)=> ({
    ...prev,
    [name] : name === "agentNumber" ? parseInt(value) : value
   }))
 };
 

 const handleSubmit = (e) => {
    e.preventDefault()
    //console.log(formdata)

    //Api call to submit the form data to the backend
    const url = "http://localhost:5000/agent"; // Replace with your backend API endpoint
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
        onClose()
       }).catch(err => console.error(err));
 }

  return (
    <div className="form_container">
        <form className="fields_details" onSubmit={handleSubmit}>
                <h1>Agent Details</h1>
                <div className="Inputs">
                    <div>
                    <span className="Input_label">Agent Number</span>
                    <input type="text"
                    name="agentNumber"
                    placeholder="Enter Agent Number ...."
                    value = {formdata.agentNumber}
                    onChange = {handleChange}/>
                    </div>
                    
                    <div>
                    <span className="Input_label">Agent Name</span>
                    <input type="text"
                    name="agentName"
                    placeholder="Enter Agent Name ...."
                    value = {formdata.agentName}
                    onChange = {handleChange}/>
                    </div>
                </div>
                <div className="buttons">
                    <button className="close_btn" type="button" onClick ={onClose}>Close</button>
                    <button className="Submit_btn" type="submit">Submit</button>
                </div>
        </form>
    </div>
  )
}

export default Agent_form