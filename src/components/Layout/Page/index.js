import React from "react"
import { Helmet } from "react-helmet"
import Header from "../../Header"
import "./layout.scss"

export default ({ children, location }) => {
  return (
    <div className="layout">
      <Helmet>
        <title>Hey. I'm Luis</title>
        <meta name="description" content="My personal website" />
      </Helmet>
      <Header pathname={location.pathname} />
      <main>{children}</main>
    </div>
  )
}
