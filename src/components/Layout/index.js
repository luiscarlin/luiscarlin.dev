import React from "react"
import Header from "../Header"
import styles from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
