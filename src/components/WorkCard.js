import "./WorkCardStyles.css";
import React from "react";
import pro1 from "../assets/genesis.png";
import { NavLink } from "react-router-dom";


const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
              <img src={pro1} alt="" />
              <h2 className="project-title">Genesis</h2>
              <div className="pro-details">
                  <p>My first figma work</p>
                  <div className="pro-btns">
                    <NavLink to="url.com" className="btn">View</NavLink>
                    <NavLink to="url.com" className="btn">Source</NavLink>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default WorkCard