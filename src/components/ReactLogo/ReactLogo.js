import React from "react"
import styles from "./react-logo.module.scss"
import logo from "./react-logo.svg"

export default () => {
  return <img src={logo} className={styles.ReactLogo} alt="react-logo" />
}
