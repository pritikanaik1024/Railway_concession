import React from 'react'
import { Link } from 'react-router-dom';
import './Applicationform.css'
import  { useState } from 'react';

function Applicationform() {

    const [selectedDuration, setSelectedDuration] = useState('monthly');

    const handleDurationChange = (e) => {
        setSelectedDuration(e.target.value);
      };
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
      
{/* <div className="progress-bar-container">
        <div className="progress-bar-application"></div>
      </div> */}

        <div className="text-box">
            <h1>Application form</h1>
           <div>
                <label htmlFor="duration" className='radio'>Duration of Pass:</label>
                    <div className='radiodiv'>
                     <input
                        type="radio"
                        id="monthly"
                        name="duration"
                        value="monthly"
                        checked={selectedDuration === 'monthly'}
                        onChange={handleDurationChange}/>
                        <label htmlFor="monthly" className='radio'>Monthly</label>
                    </div>
                    <div className='radiodiv'>
                        <input
                        type="radio"
                        id="quarterly"
                        name="duration"
                        value="quarterly"
                        checked={selectedDuration === 'quarterly'}
                        onChange={handleDurationChange}/>
                        <label htmlFor="quarterly">Quarterly</label>
                    </div>
                    <br/>
            </div>
              <div>
                    <label htmlFor="previouspassimage">Previous pass image:</label>
                    <input
                        type="file"
                        id="previouspassimage"
                        accept="image/*" 
                        onChange={handlePhotoChange}/>
                        <br/>
                </div>
                <div>
                <label htmlFor="typeofpass">Type of Pass:</label>
                    <select id="typeofpass" className='alignment'>
                    <option value="Firstclass">First-class</option>
                    <option value="Secondclass">Second-class</option>
                    </select>
                    <br/>
                </div>
                <div>
                <label htmlFor="gender">Gender:</label>
                    <select id="gender" className='alignment'>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    </select>
                    <br/>
                </div>
                <br/>
            <div className='button-container-application'>
            <Link to ='/Status'>
            <button className="next-button-application">Apply</button>
            </Link>
            </div>
      </div>
    </div>
  </div>
  )
}

export default Applicationform