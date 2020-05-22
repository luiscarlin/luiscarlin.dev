import React from "react"
import { Helmet } from "react-helmet"
import Header from "../Header"
import styles from "./layout.module.scss"

const Layout = ({ children, location }) => {
  return (
    <div className={styles.layout}>
      <Helmet>
        <title>Hey. I'm Luis</title>
        <meta name="description" content="My personal website" />
      </Helmet>
      <Header pathname={location.pathname} />
      <main>{children}</main>
    </div>
  )
}

export default Layout
