import React from 'react';
import './AdminDash.css';
import { Link } from 'react-router-dom';


function AdminDash() {
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
  </div>
  )
}

export default AdminDash