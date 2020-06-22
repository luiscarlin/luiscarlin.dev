import React from "react"
import PageTitle from "../components/Layout/PageTitle"
import TimelineCard from "../components/TimelineCard"

const content = [
  {
    date: "March 2019",
    title: "Got promoted to Senior Developer",
    text: "",
    tech: [],
  },
  {
    date: "September 2017",
    title: "Started working at Pillar Technology",
    text:
      "Started working at Pillar Technology, a medium sized consulting firm. In March 2019, it would become part of Accenture.",
    tech: [],
  },
  {
    date: "August 2017",
    title: "Goodbye IBM 👋 ",
    text: "",
    tech: [],
  },
  {
    date: "January 2013",
    title: "Started working at IBM",
    text: "",
    tech: [],
  },
  {
    date: "December 2012",
    title: "Graduated from the University of Kentucky",
    text: "",
    tech: [],
  },
  {
    date: "May 2012",
    title: "Intership at Lexmark",
    text: "",
    tech: [],
  },
  {
    date: "May 2011",
    title: "Internship Escent Technologies",
    text: "",
    tech: [],
  },
  {
    date: "October 2010",
    title: "Became a Naturalized American Citizen",
    text: "",
    tech: [],
  },
  {
    date: "August 2007",
    title: "Start College",
    text: "",
    tech: [],
  },
  {
    date: "February 2007",
    title: "Got Married",
    text: "",
    tech: [],
  },
  {
    date: "July 2003",
    title: "Goodbye Peru, Hello USA",
    text: "",
    tech: [],
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
