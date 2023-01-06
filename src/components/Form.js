import "./FormStyles.css";

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>E-mail</label>
            <input type="text"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Address</label>
            <textarea rows="6" placeholder="type your message" />
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form