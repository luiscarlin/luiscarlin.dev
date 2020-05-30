import React from "react"
import ReactLogo from "../components/ReactLogo"
import SocialMediaBar from "../components/SocialMediaBar"

const Landing = () => (
  <div className="welcome">
    <h5>Hi! I&rsquo;m</h5>
    <h1>Luis Carlin</h1>
    <h3 className="secondary">Full stack Web & Mobile developer</h3>
    <div className="welcome__react_message">
      <h5 className="secondary">
        I build things with{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
      </h5>
      <ReactLogo />
    </div>

    <div className="welcome__social-media">
      <SocialMediaBar />
    </div>
  </div>
)

export default Landing
