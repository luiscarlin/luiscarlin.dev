import React from "react"
import PageTitle from "../components/Layout/PageTitle"
import TimelineCard from "../components/TimelineCard"

const content = [
  {
    date: "June, 2020",
    title: "Will know when I get back to work",
    text: "Don't know yet",
    tech: ["React", "Redux", "JavaScript"],
  },
  {
    date: "April, 2020",
    title: "Touchless Retail Mobile Applications (Android and iOS)",
    text:
      "I was part of a four week proof of concept for a well known retail store in a team of four developers. The goal was to build a touchless retailing experience for this post-COVID world. In that month, we built an ecommerce mobile app for customers and a mobile app for employees to manage orders. It included a CD pipeline that distributed the apps to test users upon successful build.",
    tech: [
      "React Native",
      "Redux",
      "TypeScript",
      "App Center",
      "GitHub Actions",
      "Azure Serverless Functions",
      "CosmosDB (MongoDB)",
    ],
  },
  {
    date: "March, 2020",
    title: "Project Rating Website and Administrative Website",
    text:
      "Built two websites. One for Accenture employees to rate future projects to work on and a second website for leads to collect results and assign engineers to projects they would enjoy.",
    tech: [
      "React",
      "Redux",
      "TypeScript",
      "PostgreSQL",
      "Azure Web Services",
      "Docker",
      "CircleCI",
      "NPM library",
    ],
  },
  {
    date: "February, 2020",
    title: "Web Application to Track Efficiency of Oil Wells",
    text:
      "I was part of a four week proof of concept for a well known oil company in a team of 6 developers. The goal was ",
    tech: [
      "React",
      "Redux",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "CircleCI",
      "NPM library",
    ],
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
