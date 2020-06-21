import React from "react"
import PageTitle from "../components/Layout/PageTitle"
import TimelineCard from "../components/TimelineCard"

const content = [
  {
    date: "May 2020",
    title: "Enrollment Website for Health Insurance Company",
    text:
      "Currently building a website for a health insurance company in a team of five developers. The website contains 60+ screens with forms and validation.",
    tech: [
      "React",
      "Redux",
      "JavaScript",
      "Styled Components",
      "Material UI",
      "yup",
    ],
  },
  {
    date: "April 2020",
    title: "Touchless Retail Mobile Applications (Android and iOS)",
    text:
      "I was part of a four week proof of concept for a pharmacy retail store in a team of four developers. The goal was to build a touchless retailing experience for this post-COVID world. In that month, we built an ecommerce mobile app for customers and a mobile app for employees to manage orders. It included a continuous delivery pipeline that distributed the apps to test users upon successful build.",
    tech: [
      "React Native",
      "Redux",
      "TypeScript",
      "Styled Components",
      "App Center",
      "GitHub Actions",
      "Azure Serverless Functions",
      "CosmosDB (MongoDB)",
    ],
  },
  {
    date: "March 2020",
    title: "Project Rating Website",
    text:
      "I joined a team of five developers for a month to help them build two web applications. One for Accenture Software Engineers to rate projects they would like to be assgined to and a second website for leadership to collect results and assign engineers to projects.",
    tech: [
      "React",
      "Redux",
      "TypeScript",
      "Styles Components",
      "PostgreSQL",
      "Azure Web Services",
      "Docker",
      "CircleCI",
    ],
  },
  {
    date: "February 2020",
    title: "Web Application to Track Efficiency of Oil Wells",
    text:
      "I was part of a four week proof of concept for an oil com  pany in a team of 6 developers. We built a website to display wells in a Geo Map, analytics, and visualizations on the efficiency of the wells.",
    tech: [
      "React",
      "Redux",
      "JavaScript",
      "Styled Components",
      "Nivo",
      "D3",
      "Google Charts",
      "PostgreSQL",
      "Docker",
      "CircleCI",
    ],
  },
  {
    date: "September 2019",
    title: "Scheduling Web Application for Nursing Home's staff",
    text:
      "In a team of 4 developers, we built a scheduling website for nursing homes.",
    tech: ["React", "Redux", "TypeScript", "Sass"],
  },
  {
    date: "October 2018",
    title:
      "Mobile Applications to Manage Care of Stroke Patients during Golden Hour",
    text:
      "Our team of 10 developers built two mobile applications (EMS and in-hospital) for a medical technologies firm. The EMS app collected information about stroke patients upon ambulance contact as well as readings from EMS equipment. The in-hospital app managed and tracked the progress and information of stroke patients while in the care of hospital personnel during the Golden Hour period.",
    tech: [
      "React-Native",
      "Redux",
      "JavaScript",
      "Azure Dev Ops",
      "CosmosDB",
      ".Net",
      "Azure Serverless Functions",
    ],
  },
  {
    date: "August 2018",
    title: "Authenticator App for a Trading Platform",
    text:
      "Our team of two developers built in one month an authenticator app to provide two factor authentication to a set of applications by a Financial Services Company. The app can be downloaded on Google Play.",
    tech: ["Android", "Java"],
  },
  {
    date: "October 2017",
    title: "Physician Scheduling Portal",
    text:
      "Our team of 8 developers built a web application to allow patients to schedule medical services with their physicians or find new ones. The web application is currently used my thousands of patients in Ohio.",
    tech: ["React", "Redux", "JavaScript", ".NET", "Jenkins"],
  },
]

export default () => {
  return (
    <>
      <PageTitle>recent work</PageTitle>
      {content.map((entry, index) => (
        <TimelineCard {...entry} key={index} />
      ))}
    </>
  )
}
