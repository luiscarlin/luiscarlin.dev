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
    text: "In March 2019, it would become part of Accenture.",
    tech: [],
  },
  {
    date: "August 2017",
    title: "Goodbye IBM 👋",
    text:
      "Learned a lot of technologies, but also the disadvantages of working in multi-national company like corporate rules and red tape.",
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
    text:
      "Graduated from the University of Kentucky with degrees in Electrical Engineering and Computer Engineering as well as minors in Mathematics and Computer Science. In my 5 years in college I obtained Bs in only 2 courses. My GPA was 3.94 out of 4. Very proud of that.",
    tech: [],
  },
  {
    date: "May 2012",
    title: "Software Development Intership at Lexmark",
    text: "Worked at Lexmark for 6 months ",
    tech: ["Python"],
  },
  {
    date: "May 2011",
    title: "Internship with Escent Technologies",
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
