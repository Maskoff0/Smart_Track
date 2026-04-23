
import React from 'react';
import { useState } from 'react';
import "./Assignments.css";
import { usefiles as useAgentFiles } from '../agent_records/hook.js';
import { usefiles as useFieldFiles } from '../field_Records/fileshook.js';
import { usefiles } from '../Assignment/hook.js';
import Assignment from './Assignment.jsx';


const Assignments = () => {
  const { files: agentFiles, isLoading: agentsLoading } = useAgentFiles();
  const { files: fieldFiles, isLoading: fieldsLoading } = useFieldFiles();
  const {files} = usefiles();
  const [field , setfields] = useState({
    agentName : "",
    fieldName : ""
  })

  const getSelectedField = () => {
    return fieldFiles.find(f => f.fieldName === field.fieldName);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedField = getSelectedField();
    const cropType = selectedField?.cropType;
    const fieldStage = selectedField?.fieldStage;
    const fieldStatus = selectedField?.fieldStatus;

    const data = { agentName : field.agentName , fieldName : field.fieldName , cropType : cropType ,fieldStage : fieldStage ,fieldStatus : fieldStatus}
    console.log(data);

    const URL = 'http://localhost:5000/assignments';

      fetch(URL , {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(data)
      }).then(res => res.json())
    .then(data => {
        console.log('success:' , data)
      }).catch((err) => console.error(err));

  }

  return (
    <div className="assignment">
      <div className="assignment_header">
        <h1>Assign Field</h1>
        <p>Assign fields to agents for monitoring and management.</p>
      </div>
      <div className="assignment_container">
        <form onSubmit = {handleSubmit}>
          <div>
            <span className="label">Agents</span>
            <select className="agents" onChange = {(e) => setfields((prev) => ({
              ...prev,
              agentName : e.target.value
            }))}>
              {agentsLoading ? (
                <option>Loading...</option>
              ) : (
                agentFiles && agentFiles.length > 0 ? (
                  agentFiles.map(agent => (
                    <option key={agent.id} value={agent.agentName}>{agent.agentName}</option>
                  ))
                ) : (
                  <option>No agents found</option>
                )
              )}
            </select>
          </div>

          <div>
            <span className="label">Fields</span>
            <select className="agents" onChange = {(e) => setfields((prev) => ({
              ...prev,
              fieldName : e.target.value
            }))}>
              {fieldsLoading ? (
                <option>Loading...</option>
              ) : (
                fieldFiles && fieldFiles.length > 0 ? (
                  fieldFiles.map(field => (
                    <option key={field.id} value={field.fieldName}>{field.fieldName}</option>
                  ))
                ) : (
                  <option>No fields found</option>
                )
              )}
            </select>
          </div>
          <div className="buttons">
            <button type="submit">Assign</button>
          </div>
        </form>
      </div>
        {/* Show assignments */}
          {files.length === 0 ? (
            <div className="No_files">
              <p>No Assignments </p>
            </div>
          ): (
            <>
            <div className="assignment_title">
              <span>Agent Name</span>
              <span>Field Name</span>
              <span>Crop Type</span>
              <span>Field Stage</span>
              <span>Field Status</span>
            </div>
            <div>
              {files.map((file) =>(
                <Assignment key = {file.id} file={file}/>
              ))}
            </div>
            </>
          )}
      <div>
      
      </div>
    </div>
  );
};

export default Assignments;