import React from 'react'
import './Home.css'
import {Link} from "react-router-dom";

 function Home() {
  return (
    <div> 
        <div className= "image-section">
            <div className="image-text">
                <div className='heading'>
                Welcome <br/> To <br/> DMCE CONSESSIONS <br/>
                </div>
              <p>Get Railway and Bus Consession Online!</p>
              <br/>
              <Link to="/Signup" className="signup-button">Sign Up</Link>
            </div>
          </div>
    
               <br/>

             <div className="announcement-section">
                <div className="announcement-text">
                  <p>Important Announcement: Concessions will be provided after Admissions.</p>
                 </div>
             </div>


        <div className="text-boxes">
          <div className="text-box-out">
            <div className='heading-notice'>
              Notice
            </div>
            <div>
            <p>Carry Fee reciept to issue concession
              <br/>
              Original copy of Fee reciept is to be uploaded
              <br/>
              The scanned image should be readable
              <br/>
              The Reciept uploaded should be of current academic year
            </p>
            </div>
          </div>
          <div className="text-box-out">
          <div className='heading-notice'>
              Notice
            </div>
            <div>
            <p>Carry Fee reciept to issue concession
              <br/>
              Original copy of Fee reciept is to be uploaded
              <br/>
              The scanned image should be readable
              <br/>
              The Reciept uploaded should be of current academic year
            </p>
            </div>
          </div>
          <div className="text-box-out">
          <div className='heading-notice'>
              Notice
            </div>
            <div>
            <p>Carry Fee reciept to issue concession
              <br/>
              Original copy of Fee reciept is to be uploaded
              <br/>
              The scanned image should be readable
              <br/>
              The Reciept uploaded should be of current academic year
            </p>
            </div>
          </div>
        </div>

        <div className="map-view">
          <iframe
          title="Map View"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.1684123448975!2
          d-3.7032379855756264!3d40.416961694767765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13
          .1!3m3!1m2!1s0xd4227ad2eddfa22b%3A0x3d6ce32c9a711be0!2sPlaza%20Mayor!5e0!3m2!1s
          en!2sus!4v1644973068307!5m2!1sen!2sus"
          width="400"
          height="400"
          style={{ border: '0' }}
          allowFullScreen
          loading="lazy"> 
          </iframe>
       </div>   

    <div className="footer">
      <p>&copy; All rights reserved.</p>
    </div>


    </div>
  )
}
export default Home;