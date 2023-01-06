


import React from 'react'

const List = ({people}) => {
  return (
    <>
    {people.map((person) => {
       const {id, firstName, email, subject, message} = person;
       return (
         <div className="item" key={id}>
            <h4>{firstName}</h4>
        <div className="flex-container">
                <p>{email}</p>
        <div className='info'>
            <p>{subject}</p>
        <div>
            <p>{message}</p>
        </div>
        </div>
            </div>
         </div>
       )
       })}
       </>
  )
};

export default List