import React from "react"
import {
  FaEnvelopeSquare,
  FaGithubSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa"

const SocialMediaBar = () => {
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
    <div>
      {socialMedia.map((site, index) => (
        <a
          key={index}
          href={site.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {site.icon}
        </a>
      ))}
    </div>
  )
}

const Landing = () => (
  <div className="welcome">
    <h1>I&rsquo;m Luis.</h1>
    <h1 className="welcome__accent">Web & Mobile developer.</h1>
    {/* <SocialMediaBar /> */}
  </div>
)

export default Landing
