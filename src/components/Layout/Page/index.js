import React from "react"
import { Helmet } from "react-helmet"
import Header from "../../Header"
import "./layout.scss"

const Footer = () => (
  <footer>
    <h6>
      Built with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>{" "}
      using React & GatsbyJS
    </h6>
  </footer>
)

export default ({ children, location }) => {
  return (
    <div className="layout">
      <Helmet>
        <title>Hi. I'm Luis</title>
        <meta name="description" content="My personal website" />
      </Helmet>
      <div className="content">
        <Header pathname={location.pathname} />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}
