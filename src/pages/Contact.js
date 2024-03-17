import React, { useState, useCallback } from "react";
import "../styles/Contact.css"
import backImage from "../assets/background/contactBackImg.png"

function Contact() {
const [email, setEmail] = useState("");
const [isValid, setIsValid] = useState(true);
const [name, setName] = useState("");
const [nameClick, setNameClicked] = useState(false);
const [message, setMessage] = useState("");

//Email validation, conditions 
  const validateEmail = (email) => {
    const cleanedEmail = email.trim(); 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const forbiddenSymbols = /[!#$%^&*()+=\-[\]\\';,/{}|":<>?~_]/;
    return emailPattern.test(cleanedEmail) &&
     !forbiddenSymbols.test(cleanedEmail) &&
     !cleanedEmail.endsWith(".");
  };

  const handleEmailChange = useCallback((event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValid(validateEmail(newEmail));
  }, []);
//Set conditions for name input = length, blur 
  const validateName = (value) => {
    if (value.length < 3) {
      return <p className="errorsClass" style={{ color: 'red' }}>Name must be at least 3 characters</p>;
    } else if (value.length > 51) {
      return <p className="errorsClass" style={{ color: 'red' }} >Name cannot exceed 51 characters</p>
    }
    return " ";
  };
    const handleNameChange = useCallback((event) => {
      const inputValue = event.target.value;
      setName(inputValue);
    }, []);
  
    const handleNameBlur =useCallback(() => {
    setNameClicked(true);
    }, []);

    const nameError = nameClick ? validateName(name) : "";

    //Check if all fields are valid, if no button can't be clicked

  const isFormValid = () => {
    // Check if all required fields are filled out correctly
    return name.trim() !== "" && email.trim() !== "" && message.trim() !== "";
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    // Perform your form submission logic here if the form is valid
    if (form.checkValidity())  {
      // Your form submission logic
      console.log('Form submitted successfully!');
    } else {
      console.log('Please complete all fields correctly.');
    }
  };


  return (
    <form onSubmit={handleSubmit}>
    <div className="contactBack" style={{ backgroundImage: `url(${backImage})` }}>
    <div className="contactBody">
    <h2 className="contactTitle">GET IN TOUCH</h2>
    <div className="nameInp">
      <input 
        type="text"
        id="name"
        name="username"
        value={name}
        placeholder="Full Name"
        onChange={handleNameChange}
        onBlur={handleNameBlur}
        required
      />
      { nameError && <p className="error">{nameError}</p> }
    </div>

    <div className="emailInp">
      <input 
      type="text" 
      name="email"
      id="email" 
      value={email}
      placeholder="E-mail Address"
      onChange={handleEmailChange} 
        required
      />
      {isValid ? null : (
            <p className="errorsClass" style={{ color: 'red' }}>Invalid</p> 
      )}
    </div>

      <div className="messInp">
        <textarea 
        type="text"
        id="message"
        name="message"
        rows="50"
        placeholder="Message..."
        onChangeCapture={(e) => setMessage(e.target.value)}
        required
        > 
        </textarea>
        
      </div>

<div className="submitInp">
  <input 
  type="submit"
  value="Submit"
  disabled={!isFormValid()}
  />
</div>
    </div>
    </div>
    </form>
  );
}

export default Contact