import React from 'react'
import "./Available.css"
import { usefiles } from '../field_Records/fileshook'
import Available_records from './Available_records';

const Available = () => {
    const {files = []} = usefiles();

  return (
    <div className="available">
        <div className="top">
            <span>Field Name</span>
            <span>Crop Type</span>
            <span>Field Stage</span>
            <span>Field Status</span>
        </div>
        <div className="available_data">
            {files.length === 0 ? (
                <div>
                    <p>No Available Records</p>
                </div>
            ) : (
                <div>
                    {files.map(file => (
                      <Available_records key={file.id} file = {file}/>
                    ))}
                </div>
            )}
        </div>
    </div>
  )
}

export default Available