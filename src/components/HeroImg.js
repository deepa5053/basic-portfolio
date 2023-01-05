import "./HeroImgStyles.css";
import IntroImg from "../assets/images.jpeg"
import React from 'react'
import { Link } from "react-router-dom";

const heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
         <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>
                Hi, I'M DEEPA BIRARI
            </p>
            <h1>React Developer</h1>
            <div>
              <Link to="/about" className="btn">About me</Link>
              <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default heroimg