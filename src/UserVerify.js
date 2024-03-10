import React from 'react'
import './UserVerify.css'
import { Link } from 'react-router-dom';

function UserVerify() {
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
      <Link to="/UserVerify" className="sidebar-button">
        Verification Status
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

        <div className="progress-bar-container">
        <div className="progress-bar-UserVerify"></div>
        </div>


        <div className="text-box-verify">
            <h1>Verification Status</h1>
      </div>


    </div>
  )
}

export default UserVerify