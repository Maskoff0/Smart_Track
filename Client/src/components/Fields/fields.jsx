import React from 'react'
import { useState } from 'react'
import "./fields.css"
import Field_form from './field_form'
import { usefiles } from '../field_Records/fileshook.js'
import Fields_record from '../field_Records/field_record.jsx'


const Fields = () => {
 const {files , success , isLoading , error} = usefiles()
 const [showform , setshowform] = useState(false)
 

  
  return (
    <div className="field">
      <div className="field_container">
        <h1>Fields</h1>
        <div onClick={() => setshowform(true)}>
          <span>Add Field</span>
        </div>
        {showform && (
          <Field_form onClose = {()=> setshowform(false)}/>
        )}
      </div>
      <div className={`${files.length === 0 ? "empty_list" : "list"}`}>

        {files.length === 0 ? (
          <div className ="no_data">
            <p>No fields added </p>
          </div>
        ) : (
          <>
            <div className="list_title">
              <span>Field Name</span>
              <span>Crop Type</span>
              <span>Field Stage</span>
              <span>Field Status</span>
              <span></span>
            </div>
            <div className="list_records">
              {files.map((file) => (
                <Fields_record key={file.id} file={file} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Fields;