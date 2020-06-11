import { Link } from "gatsby"
import React from "react"
import "./header.scss"
import Logo from "./logo.inline.svg"

const links = [
  { url: "/about", text: "about me" },
  { url: "/experience", text: "experience" },
  { url: "/projects", text: "projects" },
]

export default ({ pathname }) => {
  return (
    <header className={"header"}>
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
                  <h4>{link.text}</h4>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  )
}
