import React from "react"
import Layout from "../components/layout"
import styles from "./index.module.scss"
const IndexPage = () => (
  <Layout>
    <h1>I&rsquo;m Luis.</h1>
    <h1 className={styles.accentTitle}>Web & Mobile developer</h1>
  </Layout>
)

export default IndexPage
