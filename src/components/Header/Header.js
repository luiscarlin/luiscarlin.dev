import { Link } from "gatsby"
import React from "react"
import styles from "./header.module.scss"
import Logo from "./logo.inline.svg"

const links = [
  { url: "/skills", text: "skills" },
  { url: "/experience", text: "experience" },
  { url: "/projects", text: "projects" },
]

const Header = ({ pathname }) => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          {links
            .filter(link => !pathname.startsWith(link.url))
            .map((link, index) => (
              <li key={index}>
                <Link to={link.url}>
                  <h2 className="secondary">{link.text}</h2>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
