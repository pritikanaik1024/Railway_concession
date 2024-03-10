import React from 'react'
import './AdminProfiles.css'
import { Link } from 'react-router-dom';

function AdminProfiles() {
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
            <h1>Profiles to Verify</h1>
      </div>









  </div>
  )
}

export default AdminProfiles