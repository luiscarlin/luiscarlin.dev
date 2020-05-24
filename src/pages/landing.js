import React from "react"
import SocialMediaBar from "../components/SocialMediaBar"

const Landing = () => (
  <div className="welcome">
    <h4>Hi! I&rsquo;m</h4>
    <h1>Luis Carlin</h1>
    <h2 className="secondary">Full stack Web & Mobile developer</h2>
    <h4 className="secondary">I build things with React and React Native</h4>
    <div className="welcome__social-media">
      <SocialMediaBar />
    </div>
  </div>
)

export default Landing
