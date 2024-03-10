import React from 'react'
import { useState } from 'react';
import './AdminConcessionapp.css'
import { Link } from 'react-router-dom';




function AdminConcessionapp() {

  const [textBoxColor, setTextBoxColor] = useState('');

  const handleAccept = () => {
    setTextBoxColor('lightgreen');
  };

  const handleReject = () => {
    setTextBoxColor('lightcoral');
  };

  const handleView = () => {
    // Redirect to another PDF or perform some other action
    window.open('path_to_pdf.pdf', '_blank');
  };

  return (
<div className="Admin-sidebar">
    <Link to="/AdminProfiles" className="Admin-sidebar-button">
        Profiles
    </Link>
    <Link to="/AdminConcessionapp" className="Admin-sidebar-button">
    Concession Applications
    </Link>
    <Link to="/AdminConcessionreview" className="Admin-sidebar-button">
    Concession History
    </Link>
    <Link to="/"> 
        <button type="submit"  className="Admin-signout-button" >Sign out</button>
      </Link>
    {/* <button onClick={handleSignOut} className="signout-button"> will be used when dealing with database
      Sign Out
    </button> */}


    <div className="text-box-Admin">
      <h1>
        Pending Concessions
      </h1>
      <div className="container-apply">
      <div className="textbox-apply" style={{ boxShadow: '0 0 5px rgba(0, 0, 0, 0.3)', backgroundColor: textBoxColor }}>
        <button onClick={handleView}>View</button>
        <button onClick={handleAccept}>Accept</button>
        <button onClick={handleReject}>Reject</button>
        <span className="clickable-text" onClick={handleView}>2021FHAI024</span>
      </div>
    </div>
      </div>




  








  </div>
  )
}



export default AdminConcessionapp