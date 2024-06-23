import React, { useState } from 'react';
import './Form.css'
 

function Form() {

    const [name, setName] = useState("");
    const [headingText, setHeading] = useState("");

    function handleChange(event){
         console.log(event.target.value);
         setName(event.target.value)
         
        // console.log(event.target.type);
        // console.log(event.target.placeholder);
    }

    function handleClick(event){
        console.log("Submit");
        console.log(name); 
        setHeading(name)
        event.preventDefault();
    }

  return (
    <div className="Container">
      <h1>Hello {name}</h1>
      <h1>After Submit {headingText}</h1>
      <form onSubmit={handleClick}>
            <input onChange={handleChange} type='text' placeholder='Enter your Name'/> 
            <button type='submit'>Submit</button>
      </form> 
    </div>
  );
}

export default Form;