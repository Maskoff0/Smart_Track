import React, { useState, useEffect } from 'react'
import "./Updates.css"

const Updates = () => {
    const [assignments, setAssignments] = useState([])
    const [editingId, setEditingId] = useState(null)
    const [formData, setFormData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchAssignments()
    }, [])

    const fetchAssignments = async () => {
        try {
            const agentName = localStorage.getItem('agentName')
            const response = await fetch(
                `http://localhost:5000/assignmentlist?agentName=${agentName}`
            )
            const data = await response.json()
            setAssignments(data.data || [])
        } catch (error) {
            console.error("Failed to fetch assignments", error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleEdit = (assignment) => {
        setEditingId(assignment.id)
        setFormData(assignment)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSave = async () => {
        try {
            const response = await fetch(
                `http://localhost:5000/assignmentupdate?id=${editingId}`,
                {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData)
                }
            )
            
            if (response.ok) {
                setEditingId(null)
                fetchAssignments()
                alert('Assignment updated successfully')
            }
        } catch (error) {
            console.error("Failed to update assignment", error)
        }
    }

    const handleCancel = () => {
        setEditingId(null)
        setFormData({})
    }

    if (isLoading) return <div>Loading...</div>

    return (
        <div className="updates">
            <h1>Update Assignments</h1>
            <table>
                <thead>
                    <tr>
                        <th>Field Name</th>
                        <th>Crop Type</th>
                        <th>Field Stage</th>
                        <th>Field Status</th>
                        <th>Notes</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {assignments.map((assignment) => (
                        <tr key={assignment.id}>
                            <td>
                                {editingId === assignment.id ? (
                                    <input 
                                        type="text" 
                                        name="fieldName" 
                                        value={formData.fieldName} 
                                        onChange={handleChange}
                                    />
                                ) : (
                                    assignment.fieldName
                                )}
                            </td>
                            <td>
                                {editingId === assignment.id ? (
                                    <input 
                                        type="text" 
                                        name="cropType" 
                                        value={formData.cropType} 
                                        onChange={handleChange}
                                    />
                                ) : (
                                    assignment.cropType
                                )}
                            </td>
                            <td>
                                {editingId === assignment.id ? (
                                    <select 
                                        name="fieldStage" 
                                        value={formData.fieldStage} 
                                        onChange={handleChange}
                                    >
                                        <option>Planted</option>
                                        <option>Growing</option>
                                        <option>Ready</option>
                                        <option>Harvested</option>
                                    </select>
                                ) : (
                                    assignment.fieldStage
                                )}
                            </td>
                            <td>
                                {editingId === assignment.id ? (
                                    <select 
                                        name="fieldStatus" 
                                        value={formData.fieldStatus} 
                                        onChange={handleChange}
                                    >
                                        <option>Active</option>
                                        <option>At Risk</option>
                                        <option>Completed</option>
                                    </select>
                                ) : (
                                    assignment.fieldStatus
                                )}
                            </td>
                            <td>
                                {editingId === assignment.id ? (
                                    <textarea 
                                        name="notes" 
                                        value={formData.notes || ''} 
                                        onChange={handleChange}
                                        placeholder="Add observations..."
                                        rows="3"
                                    />
                                ) : (
                                    <span className="notes-text">{assignment.notes || '-'}</span>
                                )}
                            </td>
                            <td>
                                {editingId === assignment.id ? (
                                    <>
                                        <button onClick={handleSave}>Save</button>
                                        <button onClick={handleCancel}>Cancel</button>
                                    </>
                                ) : (
                                    <button onClick={() => handleEdit(assignment)}>Edit</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Updates