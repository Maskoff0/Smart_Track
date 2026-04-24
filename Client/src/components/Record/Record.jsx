import React from 'react'
import './Record.css'
import Assignment from '../Assignment/Assignment.jsx';
import { usefiles } from '../Assignment/hook.js';


const Record = () => {
    const {files} = usefiles();
  return (
    <div className="Records">
        <div className="Title">
            <span>Agent Name</span>
            <span>Field Name</span>
            <span>Crop Type</span>
            <span>Field Stage</span>
            <span>Field Status</span>
        </div>
        <div className="data">
            {files.length === 0 ? (
                <div className="No_Records">
                    <p>No Available Records</p>
                </div>
            ): (
                <div className="Ass_Records">
                    {files.map(file => (
                        <Assignment key={file.id} file={file}/>
                    ))}
                </div>
            )}
        </div>
    </div>
  )
}

export default Record