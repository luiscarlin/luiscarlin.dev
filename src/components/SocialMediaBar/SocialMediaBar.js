import React from "react"
import {
  FaEnvelopeSquare,
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa"
import "./social-media.scss"

export default () => {
  const socialMedia = [
    {
      icon: <FaGithubSquare />,
      url: "https://github.com/luiscarlin",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/luis-carlin-48512649/",
    },
    {
      icon: <FaTwitterSquare />,
      url: "https://twitter.com/lgcarlin",
    },
    {
      icon: <FaEnvelopeSquare />,
      url: "mailto:luiscarlin@gmail.com",
    },
  ]

  return (
    <div className={"social-media-bar"}>
      {socialMedia.map((site, index) => (
        <a
          key={index}
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>{site.icon}</h1>
        </a>
      ))}
    </div>
  )
}
