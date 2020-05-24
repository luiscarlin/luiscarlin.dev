import React from "react"
import ReactLogo from "../components/ReactLogo"
import SocialMediaBar from "../components/SocialMediaBar"

const Landing = () => (
  <div className="welcome">
    <h4>Hi! I&rsquo;m</h4>
    <h1>Luis Carlin</h1>
    <h2 className="secondary">Full stack Web & Mobile developer</h2>
    <div className="welcome__react_message">
      <h4 className="secondary">
        I build things with{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
      </h4>
      <ReactLogo />
    </div>

    <div className="welcome__social-media">
      <SocialMediaBar />
    </div>
  </div>
)

export default Landing
