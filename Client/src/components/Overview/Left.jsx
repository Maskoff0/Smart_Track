import React from 'react'
import Cards from '../Cards/Cards'
import Record from '../Record/Record'
import { usefiles } from '../field_Records/fileshook.js'
import "./Overview.css"

const Left = () => {
  const { files } = usefiles()

  // Count fields by status
  const activeCount = files.filter(f => f.fieldStatus === "Active").length
  const atRiskCount = files.filter(f => f.fieldStatus === "At Risk").length
  const completedCount = files.filter(f => f.fieldStatus === "Completed").length

  return (
    <div className="Left">
      <h1>Field Status</h1>
      <div className="Card">
        <Cards status="Active" title="Active Fields" count={activeCount} />
        <Cards status="At Risk" title="At Risk Fields" count={atRiskCount} />
        <Cards status="Completed" title="Completed Fields" count={completedCount} />
      </div>
      <span className="Record">Field Record</span>
      <Record/>
    </div>
  )
}

export default Left