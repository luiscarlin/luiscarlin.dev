import React from "react"
import TimelineCard from "../components/TimelineCard"

const content = [
  {
    date: "currently",
    title: "Title 1",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    date: "May 20, 2020",
    title: "Title 2",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    date: "May 10, 2020",
    title: "Title 3",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
]
export default () => {
  return (
    <div className="experience-wrapper">
      <div className="title-wrapper">
        <h1>experience</h1>
      </div>
      <div className="content">{content.map(TimelineCard)}</div>
    </div>
  )
}
