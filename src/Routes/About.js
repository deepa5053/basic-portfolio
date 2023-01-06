import React from 'react'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2"

const About = () => {
  return (
    <div>
  <Navbar />
  <HeroImg2 heading="About Me" text="I'm a friendly Front-End Developer. As a programmer, I love working on exciting projects! One of the best parts of 
        being a programmer is creating something that didn't exist before. And then you get control
        over an application, website, or whatever your creation! You can develop and maintain 
        something very useful, which leads us to the next point…" />
  
  <Footer />
  </div>
  )
}

export default About