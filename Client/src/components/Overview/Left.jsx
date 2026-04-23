import React from 'react'
import Cards from '../Cards/Cards'
import Record from '../Record/Record'
import "./Overview.css"

const Left = () => {
  return (
    <div className="Left">
      <h1>Field Status</h1>
      <div className="Card">
        <Cards/>
        <Cards/>
        <Cards/>
      </div>
      <span className="Record">Field Record</span>
      <Record/>
    </div>
  )
}

export default Left