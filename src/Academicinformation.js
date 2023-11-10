import React from 'react'
import { Link } from 'react-router-dom';
import './Academicinformation.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

function Academicinformation() {
  const [admissionDate, setAdmissionDate] = useState(null);

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
        <div className="progress-bar-academic"></div>
      </div>

        <div className="text-box">
            <h1>Academic Information</h1>
            <div className="form-group">
            <label htmlFor="branchName">Branch Name:</label>
            <select id="branchName" className='alignment'>
              <option value="AI-DS">AI-DS</option>
              <option value="COMP">COMP</option>
              <option value="IT">IT</option>
              <option value="ELEX">ELEX</option>
              <option value="CIVIL">CIVIL</option>
              <option value="CIVIL-INFRA">CIVIL-INFRA</option>
              <option value="MECH">MECH</option>
              <option value="CHEM">CHEM</option>
            </select>
            <br/>
            <div className="form-group">
            <label htmlFor="Year">Year:</label>
            <select id="Year" className='alignment'>
              <option value="FE">FE</option>
              <option value="SE">SE</option>
              <option value="TE">TE</option>
              <option value="BE">BE</option>
            </select>
            </div>
           
            <label htmlFor="Rollnumber" >Roll number:  </label>
          <input type="number" id="Rollnumber" placeholder="Enter Your Roll Number" />

          <div className="form-group">
            <label htmlFor="admissionDate">Year of Admission:</label>
            <DatePicker
              selected={admissionDate}
              onChange={(date) => setAdmissionDate(date)}
              dateFormat="yyyy-MM-dd"/>
          </div>
        

          <div>
            <label htmlFor="Division">Division:</label>
            <select id="Year" className='alignment'>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
            </div>
          </div>

          <div className="button-container-academic">
            <Link to ='/Importantdocuments'>
            <button className="submit-button-academic">Submit</button>
            </Link>
            <Link to ='/Importantdocuments'>
            <button className="next-button-academic">Next</button>
            </Link>
          </div>


      

      </div>
    </div>
  </div>

  )
}

export default Academicinformation