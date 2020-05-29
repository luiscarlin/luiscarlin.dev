import React from "react"
import ReactLogo from "../components/ReactLogo"
import SocialMediaBar from "../components/SocialMediaBar"

const Landing = () => (
  <div className="welcome">
    <p>Hi! I&rsquo;m</p>
    <h1>Luis Carlin</h1>
    <h3 className="secondary">Full stack Web & Mobile developer</h3>
    <div className="welcome__react_message">
      <p className="secondary">
        I build things with{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
      </p>
      <ReactLogo />
    </div>

    <div className="welcome__social-media">
      <SocialMediaBar />
    </div>
  </div>
)

export default Landing
