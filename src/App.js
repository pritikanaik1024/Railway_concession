import React from 'react'
import Navbar from './navbar'
import Home from './Home'
import Signup from './Signup'
import {
  BrowserRouter as Router, Switch ,Route, Routes
} from "react-router-dom";
import Login from './Login'
export default function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      </Routes>
      </Router>
      
     
    </div>
  )
}
