import React from 'react'
import "./Overview.css"
import { useState , useEffect } from 'react'

const Overview = () => {
    const [assignments , setAssignments] = useState([])
    const [isLoading , setIsLoading] = useState(true)
    const [error , setError] = useState("")

    useEffect(() => {
        const agentName = localStorage.getItem('agentName')

        if(!agentName){
            setError("Agent information not found")
            setIsLoading(false)
            return
        }

        const fetchAssignments = async () => {
            try{
                setIsLoading(true)
                const response = await fetch(`http://localhost:5000/assignmentlist?agentName=${agentName}`)
                const data = await response.json()
                setAssignments(data.data || [])
            }catch(err){
                setError("Failed to fetch assignment")
            }finally{
                setIsLoading(false)
            }
        }

        fetchAssignments()
    } , [])
  return (
    <div className="overview">
      <h1>Assigned Fields</h1>
      <div>
        <div className="agent_assignments">
            <span>Field Name</span>
            <span>Crop Type</span>
            <span>Field Stage</span>
            <span>Field Status</span>
        </div>
       <div className="dummy_data">
        {assignments.length > 0 ? (
            assignments.map((assignment) => (
                <div key ={assignment.id}>
                    <span>{assignment.fieldName}</span>
                    <span>{assignment.cropType}</span>
                    <span>{assignment.fieldStage}</span>
                    <span>{assignment.fieldStatus}</span>
                </div>
            ))
        ) : (
            <div><p>No Fields Assigned yet</p></div>
        )}
       </div>
      </div>
    </div>
  )
}

export default Overview