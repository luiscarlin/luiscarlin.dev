import React from "react"
import PageTitle from "../components/Layout/PageTitle"
import TimelineCard from "../components/TimelineCard"

const content = [
  {
    date: "September 2017",
    title: "Started working at Pillar Technology 🎊",
    text:
      "Started working at Pillar Technology, a medium sized consulting firm. In 2019, it would become part of Accenture.",
    tech: [],
  },
  {
    date: "August 2017",
    title: "Goodbye IBM 👋 ",
    text: "",
    tech: [],
  },
  {
    date: "January 2012",
    title: "Started working at IBM",
    text:
      "I was part of a four week proof of concept for a popular oil company in a team of 6 developers. The goal was to ",
    tech: [
      "Jenkins",
      "Bash",
      "UrbanCode Deploy with Patterns",
      "Git",
      "Gitlab",
      "Kafka",
      "WebSphere Liberty",
    ],
  },
]

export default () => {
  return (
    <>
      <PageTitle>about me</PageTitle>
      {content.map((entry, index) => (
        <TimelineCard {...entry} key={index} />
      ))}
    </>
  )
}
