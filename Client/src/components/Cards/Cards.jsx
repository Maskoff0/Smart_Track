import React from 'react'
import "./Cards.css"

const Cards = ({ status = "Active", title = "Total Fields", count = 0 }) => {
  const getBackgroundColor = () => {
    switch(status) {
      case "Active":
        return "#3B82F6"  // Blue
      case "At Risk":
        return "#EF4444"  // Red
      case "Completed":
        return "#10B981"  // Green
      default:
        return "#f0c370"  // Default
    }
  }

  const getStatusColor = () => {
    switch(status) {
      case "Active":
        return "#1E40AF"  // Darker Blue
      case "At Risk":
        return "#991B1B"  // Darker Red
      case "Completed":
        return "#065F46"  // Darker Green
      default:
        return "#d4941f"  // Default
    }
  }

  return (
    <div className="Cards" style={{ backgroundColor: getBackgroundColor() }}>
        <div className="Top">
            <span className="Card_Status" style={{ backgroundColor: getStatusColor() }}>{status}</span>
            <span></span>
        </div>
        <div className="Bottom">
                <p>{title}</p>
                <span>{count}</span>
        </div>
    </div>
  )
}

export default Cards