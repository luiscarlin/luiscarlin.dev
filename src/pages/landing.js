import React from "react"
import SocialMediaBar from "../components/SocialMediaBar"

const Landing = () => (
  <div className="welcome">
    <h1>I&rsquo;m Luis.</h1>
    <h1 className="secondary">Web & Mobile developer.</h1>
    <div className="welcome__social-media">
      <SocialMediaBar />
    </div>
  </div>
)

export default Landing
