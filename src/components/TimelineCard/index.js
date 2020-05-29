import React from "react"
import Pill from "../Pill"
import "./timeline-card.scss"

export default ({ date, title, text, tech }) => {
  return (
    <div className="timeline-card">
      <div className="date-container">
        <p className="secondary">{date}</p>
      </div>
      <div className="content-container">
        <h4 className="title">{title}</h4>
        <p className="secondary text">{text}</p>

        {tech.map((item, index) => (
          <div key={index} className="pill-container">
            <Pill text={item} />
          </div>
        ))}
      </div>
    </div>
  )
}
