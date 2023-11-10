import React from 'react'
import './Status.css'
import { Link } from 'react-router-dom';

function Status() {
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
        <div className="progress-bar-status"></div>
      </div>

        <div className="text-box">
            <h1>Application Status</h1>

            <table style={{ width: '1125px', border: '1px solid black' , marginTop:'135px' }}>
        <thead>
                 <tr>
                 <th style={{ width: '375px' , border: '3px solid black',height: '70px',textAlign:'center'}}>Application ID</th>
                 <th style={{ width: '375px' , border: '3px solid black',height: '70px',textAlign:'center' }}>Status</th>
                <th style={{ width: '375px' , border: '3px solid black',height: '70px',textAlign:'center'}}>Actions</th>
                </tr>
        </thead>
            <tbody>
                <tr>
                <td style={{width: '375px' , border: '3px solid black',height: '70px',textAlign:'center'}}>2241481321</td>
                <td style={{width: '375px' , border: '3px solid black',height: '70px',textAlign:'center',color:'green'}}>Ongoing</td>
                <td style={{width: '375px' , border: '3px solid black',height: '70px',textAlign:'center'}}>
                <Link to = '/Dashboard'>
                <button style={{ backgroundColor: 'green', color: 'white', margin:'10px', padding:'15px'  }}>
                 Redeem
                </button>
                </Link>
                <Link to ='/Personalinformation'>
                <button style={{ backgroundColor: 'red', color: 'white', padding:'15px'}}>
                Reapply
                </button>
                </Link>
                 </td>
                </tr>
            </tbody>
     </table>
      </div>
    </div>
  </div>
  )
}

export default Status