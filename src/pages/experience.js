import React from "react"
import PageTitle from "../components/Layout/PageTitle"
import TimelineCard from "../components/TimelineCard"

const content = [
  {
    date: "May 2020",
    title: "",
    text:
      "I was part of a four week proof of concept for a popular retail store in a team of four developers. The goal was to build a touchless retailing experience for this post-COVID world. In that month, we built an ecommerce mobile app for customers and a mobile app for employees to manage orders. It included a CD pipeline that distributed the apps to test users upon successful build.",
    tech: ["React", "Redux", "JavaScript", "Styled Components", "App Center"],
  },
  {
    date: "April 2020",
    title: "Touchless Retail Mobile Applications (Android and iOS)",
    text:
      "I was part of a four week proof of concept for a popular retail store in a team of four developers. The goal was to build a touchless retailing experience for this post-COVID world. In that month, we built an ecommerce mobile app for customers and a mobile app for employees to manage orders. It included a CD pipeline that distributed the apps to test users upon successful build.",
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
    title: "Project Rating Website and Administrative Website",
    text:
      "I joined a team of five developers for a month to help them in building two web applications. One for Accenture employees to rate future projects to work on and a second website for leads to collect results and assign engineers to projects they would enjoy.",
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
      "I was part of a four week proof of concept for a popular oil company in a team of 6 developers. The goal was to ",
    tech: [
      "React",
      "Redux",
      "JavaScript",
      "Styled Components",
      "PostgreSQL",
      "Docker",
      "CircleCI",
    ],
  },
  {
    date: "September 2019",
    title: "Scheduling Web Application for Nursing Home's staff",
    text: "built something",
    tech: ["React", "Redux", "TypeScript", "Sass"],
  },
  {
    date: "October 2018",
    title: "Platform to ",
    text:
      "I was part of a four week proof of concept for a popular oil company in a team of 6 developers. The goal was to ",
    tech: ["React", "Redux", "JavaScript", "PostgreSQL", "Docker", "CircleCI"],
  },
  {
    date: "August 2018",
    title: "Two factor authentication App",
    text:
      "I was part of a four week proof of concept for a popular oil company in a team of 6 developers. The goal was to ",
    tech: ["React", "Redux", "JavaScript", "PostgreSQL", "Docker", "CircleCI"],
  },
  {
    date: "October 2017",
    title: "Scheduling Application for Doctors",
    text:
      "I was part of a four week proof of concept for a popular oil company in a team of 6 developers. The goal was to ",
    tech: ["React", "Redux", "JavaScript", "PostgreSQL", "Docker", "CircleCI"],
  },
  {
    date: "September 2017",
    title: "Hello Pillar Technology 🎊",
    text:
      "I was part of a four week proof of concept for a popular oil company in a team of 6 developers. The goal was to ",
    tech: [],
  },
  {
    date: "August 2017",
    title: "Goodbye IBM 👋 ",
    text:
      "I was part of a four week proof of concept for a popular oil company in a team of 6 developers. The goal was to ",
    tech: [],
  },
  {
    date: "February 2017",
    title: "CI and DevOps Engineer at IBM Watson Health",
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
  {
    date: "August 2016",
    title: "Infrastructure Developer at IBM Watson Supply Chain",
    text:
      "I was part of a four week proof of concept for a popular oil company in a team of 6 developers. The goal was to ",
    tech: [
      "Docker",
      "Swarm",
      "Bash",
      "Python",
      "Ansible",
      "PowerCLI",
      "PowerShell",
      "UrbanCode Deploy",
      "IBM MQ",
      "Git",
      "Github",
    ],
  },
  {
    date: "October 2015",
    title: "CI and Cloud Developer at IBM Analytics",
    text:
      "I was part of a four week proof of concept for a popular oil company in a team of 6 developers. The goal was to ",
    tech: [
      "Jenkins",
      "PowerCLI",
      "Docker",
      "Cloud Foundry",
      "IBM Bluemix",
      "UrbanCode Deploy",
      "Gradle",
      "Groovy",
      "Java",
      "Python",
      "Git",
      "Github",
    ],
  },
  {
    date: "July 2015",
    title: "Automation Engineer and QA consultant at IBM Analytics",
    text:
      "I was part of a four week proof of concept for a popular oil company in a team of 6 developers. The goal was to ",
    tech: ["Java", "Groovy", "Spock", "Selenium", "REST", "Gradle", "Git"],
  },
  {
    date: "December 2014",
    title: "Delivery Automation at IBM Analytics",
    text:
      "I was part of a four week proof of concept for a popular oil company in a team of 6 developers. The goal was to ",
    tech: [
      "IBM UrbanCode Deploy",
      "Batch",
      "Powershell",
      "Oracle Database",
      "IBM DB2",
      "IBM WebSphere",
      "Oracle WebLogic",
      "JBoss CLI",
    ],
  },
  {
    date: "October 2013",
    title: "QA Automation Lead at IBM Analytics",
    text:
      "I was part of a four week proof of concept for a popular oil company in a team of 6 developers. The goal was to ",
    tech: ["Java", "JUnit", "REST", "IBM Rational Team Concert"],
  },
  {
    date: "January 2013",
    title: "QA Engineer at IBM Analytics",
    text:
      "I was part of a four week proof of concept for a popular oil company in a team of 6 developers. The goal was to ",
    tech: [],
  },
  {
    date: "January 2013",
    title: "Started Working at IBM",
    text:
      "I was part of a four week proof of concept for a popular oil company in a team of 6 developers. The goal was to ",
    tech: [],
  },
  {
    date: "December 2012",
    title: "Graduated from the University of Kentucky! 🎓",
    text:
      "Finally done with college. Graduated Summa cum laude with a 3.94 GPA. Only had two Bs 😃. I received a degree in Electrical Engineering and a second one in Computer Engineering. I also had a minor in Mathematics and a second minor in Computer Science. Possibly the best 5 years of my life.",
    tech: [],
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
