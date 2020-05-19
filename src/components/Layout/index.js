import React from "react"
import Header from "../Header"
import styles from "./layout.module.scss"

const Layout = ({ children, location }) => {
  return (
    <div className={styles.layout}>
      <Header pathname={location.pathname} />
      <main>{children}</main>
    </div>
  )
}

export default Layout
