import React from "react"
import "./pill.scss"

export default ({ text }) => {
  return (
    <div className="pill-wrapper">
      <p>{text}</p>
    </div>
  )
}
