import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import { Link } from 'react-router-dom'; // Import the Link component from React Router
import './Signup.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth';
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA0SdZpj_5SZrM-Wa8w-IrHQyUbDDyzibo",
    authDomain: "e-concession.firebaseapp.com",
    projectId: "e-concession",
    storageBucket: "e-concession.appspot.com",
    messagingSenderId: "607679150345",
    appId: "1:607679150345:web:aa7864c9f8646171d37bd8",
    measurementId: "G-HT9RDMHN2X"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export { auth };
  const analytics = getAnalytics(app);


  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }




function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
 


  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      // User successfully registered
      console.log('User registered:', userCredential.user);
          window.location.href = "/Dashboard";
    } catch (error) {
      // Handle errors here
      setError(error.message);
    }

    // const userEmail = email;
    // const userPassword = password;
    // // Log email and password as strings
    // console.log('Email:', JSON.stringify(userEmail));
    // console.log('Password:', JSON.stringify(userPassword));
    // // // Redirect to Dashboard


  };

  return (
    <div className="sign-up-form">
       <img src="./dmce-logo.png" />
      <h2>Sign Up </h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
          <div className="form-group">
              <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id='email'
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
            </div>

        <div className="form-group">
              <label>Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required/> 

              <span
                className={`password-toggle ${showPassword ? 'show' : ''}`}
                 onClick={handleTogglePasswordVisibility}>
                {showPassword ? 'Hide' : 'Show'}
              </span>

        </div>

        <button type="submit">Sign Up</button>

      </form>
    </div>
  );
}

export default Signup;
