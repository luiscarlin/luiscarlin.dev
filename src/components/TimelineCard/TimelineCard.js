import React from "react"
import "./timeline-card.scss"

const TimelineCard = ({ date, title, text }) => {
  return (
    <div className="timeline-card">
      <div className="date-container">
        <h4>{date}</h4>
      </div>
      <div className="content-container">
        <h2 className="title">{title}</h2>
        <h3 className="text">{text}</h3>
      </div>
    </div>
  )
}

export default TimelineCard
