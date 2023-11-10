import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {

    // Will be used when dealing with database
    // const history = useHistory();
    // const handleSignOut = () => {
    //     // Implement your sign-out logic here
    //     // For example, clear authentication state or tokens
    //     // Then redirect to the home page
    //     history.push('/'); 
    //   };

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
    </div>
  );
}

export default Dashboard;
