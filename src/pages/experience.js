import React from "react"
import PageTitle from "../components/Layout/PageTitle"
import TimelineCard from "../components/TimelineCard"

const content = [
  {
    date: "currently",
    title: "Internal Project",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tech: ["React", "Redux", "JavaScript"],
  },
  {
    date: "April, 2020",
    title: "Touchless Retail Mobile Apps (Android and iOS)",
    text:
      "I was part of a four week fast-pace proof of concept for a well known retail store in a team of four developers. The goal was to build a touchless retailing experience for this post-COVID world. In that month, we built an ecommerce mobile app for customers and a mobile app for employees to manage orders. It included a CD pipeline that distributed the apps to test users upon successful build.",
    tech: [
      "React Native",
      "Redux",
      "JavaScript",
      "App Center",
      "GitHub Actions",
      "Azure Serverless Functions",
      "CosmosDB (MongoDB)",
    ],
  },
  {
    date: "May 10, 2020",
    title: "Title 3",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    tech: ["React", "Redux", "JavaScript"],
  },
]

export default () => {
  return (
    <>
      <PageTitle>experience</PageTitle>
      {content.map((entry, index) => (
        <TimelineCard {...entry} key={index} />
      ))}
    </>
  )
}
