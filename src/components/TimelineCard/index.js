import React from "react"
import "./timeline-card.scss"

export default ({ date, title, text }) => {
  return (
    <div className="timeline-card">
      <div className="date-container">
        <p className="secondary">{date}</p>
      </div>
      <div className="content-container">
        <h4 className="title">{title}</h4>
        <p className="secondary text">{text}</p>
      </div>
    </div>
  )
}
