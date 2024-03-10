import React from 'react'
import { Link } from 'react-router-dom';
import './Importantdocuments.css'

function Importantdocuments() {
    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        // Handle the selected file, e.g., upload it or display a preview
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

<div>
      
<div className="progress-bar-container">
        <div className="progress-bar-importantdocuments"></div>
      </div>

        <div className="text-box">
            <h1>Important Documents</h1>
            <div>
            <label htmlFor="photo">Photo:</label>
            <input
              type="file"
              id="photo"
              accept="image/*" 
              onChange={handlePhotoChange}/>
            </div>
            
            <div>
            <label htmlFor="Aadharcard">Aadhar card:</label>
            <input
              type="file"
              id="aadharcard"
              accept="image/*" 
              onChange={handlePhotoChange} />
            </div>
            
            <div>
            <label htmlFor="Collegeid">College Id:</label>
            <input
              type="file"
              id="collegeid"
              accept="image/*" 
              onChange={handlePhotoChange} />
            </div>
            
            <div>
            <label htmlFor="Feereceipt">Fee Receipt:</label>
            <input
              type="file"
              id="Feereceipt"
              accept="image/*" 
              onChange={handlePhotoChange}/>
            </div>
            
            <div>
            <label htmlFor="signature">Signature:</label>
            <input
              type="file"
              id="signature"
              accept="image/*" 
              onChange={handlePhotoChange}/>
            </div>
            
            <div className="button-container-important">
            <Link to ='/UserVerify'>
            <button className="submit-button-important">Submit</button>
            </Link>
            <Link to ='/UserVerify'>
            <button className="next-button-important">Next</button>
            </Link>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Importantdocuments