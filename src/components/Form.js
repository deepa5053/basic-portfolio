import "./FormStyles.css";
import {v4 as uuidv4} from "uuid";
import {useState} from 'react'
import List from "./List";

const Form = () => {
    const [person, setPerson] = useState({
        firstName:"",
        email: "",
        subject:"",
        message: "",
    });

    const [people, setPeople] = useState([]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({...person, [name]:value})
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(person.firstName && person.email && person.subject && person.message){
            const newPerson = {...person, id: uuidv4()}
            setPeople([...people, newPerson]);
            setPerson({firstName: "", email:"", message: "", subject:""})
        }
    }
      return (
    <div className="form">
        <form>
            <label htmlFor="firstName">Your Name</label>
            <input type="text" name="firstName" value={person.firstName} onChange={handleChange}></input>
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email" value={person.email} onChange={handleChange}></input>
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" value={person.subject} onChange={handleChange}></input>
            <label htmlFor="message">Address</label>
            <textarea rows="6" placeholder="type your message" name="message" value={person.message} onChange={handleChange}/>
            <button className="btn" type="submit" onClick={handleSubmit}>Submit</button>
        </form>
       <List people={people} />
    </div>
  )
}

export default Form