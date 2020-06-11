import React from "react"
import PageTitle from "../components/Layout/PageTitle"
import TimelineCard from "../components/TimelineCard"

const content = [
  {
    date: "September 2017",
    title: "Hello Pillar Technology 🎊",
    text: " ",
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
    title: "Started Working at IBM 🎊",
    text: "",
    tech: [],
  },
  {
    date: "December 2012",
    title: "Graduated from the University of Kentucky! 🎓",
    text:
      "Finally done with college. Graduated Summa cum laude with a 3.94 GPA. Only had two Bs 😃. I received a degree in Electrical Engineering and a second one in Computer Engineering. I also had a minor in Mathematics and a second minor in Computer Science. Possibly the best 5 years of my life.",
    tech: [],
  },
  {
    date: "September 2009",
    title: "Became an American Citizen 🇺🇸",
    text: "",
    tech: [],
  },
  {
    date: "September 2007",
    title: "Started College",
    text: "",
    tech: [],
  },
  {
    date: "July 2003",
    title: "Arrive to the US",
    text: "Left Lima, Peru and ",
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
