import React from "react"
import "./pill.scss"

export default ({ text }) => {
  return (
    <div className="pill-wrapper">
      <h6>{text}</h6>
    </div>
  )
}
