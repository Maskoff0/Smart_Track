import React, { useState } from 'react'
import "./agents.css"
import Agent_form from './agent_form';
import { usefiles } from '../agent_records/hook.js';
import Agent_record from '../agent_records/agent_record.jsx';

const Agents = () => {
const {files , success , isLoading , error} = usefiles()
const [showform , setshowform] = useState(false);

  return (
    <div className="agent">
      <div className="agent_container">
        <h1>Agents</h1>
        <div onClick = { () => setshowform(true)}>
         <span>Add Agent</span>
        </div>
        {showform && (
          <Agent_form onClose = {() => setshowform(false)}/>
        )}
      </div>

      <div className={`${files.length === 0 ? "empty_list" : "agent_list"}`}>
       
       {files.length === 0 ? (
        <div className = "no_data">
          <p>No Agents Added</p>
        </div>
       ): (
        <>
          <div className="agent_list_title">
            <span>Agent Number</span>
            <span>Agent Name</span>
            <span></span>
          </div>
          <div className="agent_records">
            {files.map((file) => (
              <Agent_record key={file.id} file={file}/>
            ))}
          </div>    
        </>
       )}
        
      </div>
    </div>
  )
}

export default Agents;