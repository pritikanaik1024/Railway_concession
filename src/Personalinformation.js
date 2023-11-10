import React from 'react'
import './Personalinformation.css'
import { Link } from 'react-router-dom';


function Personalinformation() {

    const handleNumberInput = (e) => {
        const inputValue = e.target.value;
        if (/[^0-9\b]/.test(inputValue)) {
          e.preventDefault();
        }
      };

  return (
    <div className="sidebar">
    <Link to="/Personalinformation" className="sidebar-button">
      Personal Information
    </Link>
    <Link to="/Academicinformation" className="sidebar-button">
      Academic Information
    </Link>
    <Link to="/Importantdocuments" className="sidebar-button">
      Important Documents
    </Link>
    <Link to="/Applicationform" className="sidebar-button">
      Application Form
    </Link>
    <Link to="/Status" className="sidebar-button">
      Status
    </Link>
    <Link to="/"> 
        <button type="submit"  className="signout-button" >Sign out</button>
      </Link>
    {/* <button onClick={handleSignOut} className="signout-button"> will be used when dealing with database
      Sign Out
    </button> */}

<div>
      
<div className="progress-bar-container">
        <div className="progress-bar"></div>
      </div>

        <div className="text-box">
            <h1>Personal Information</h1>
        <div>
          <label htmlFor="fatherName" >First Name:  </label>
          <input type="text" id="firstName" placeholder="Enter First Name" />
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" placeholder="Enter Last Name" />
          <label htmlFor="lastName">Mobile Number:</label>
          <input type="number" id="number" placeholder="Enter Mobile Number"  onClick={handleNumberInput} />
          <br/>
          <label htmlFor="address">Address:</label>
          <textarea className='address' id="address" placeholder="Enter Address" rows="3" />  

          <div className="button-container">
            <Link to ='/Academicinformation'>
            <button className="submit-button">Submit</button>
            </Link>
            <Link to ='/Academicinformation'>
            <button className="next-button">Next</button>
            </Link>
          </div>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Personalinformation