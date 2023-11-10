import React from 'react'
import Navbar from './navbar'
import Home from './Home'
import Signup from './Signup'
import Aboutus from './Aboutus'
import Contactus from './Contactus'
import Login from './Login'
import Dashboard from './Dashboard'
import Personalinformation from './Personalinformation'
import Academicinformation from './Academicinformation'
import Importantdocuments from './Importantdocuments'
import Applicationform from './Applicationform'
import Status from './Status'
import {
  BrowserRouter as Router, Switch ,Route, Routes
} from "react-router-dom";
export default function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>  
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/About us' element={<Aboutus/>}></Route>
      <Route path='/Contact us' element={<Contactus/>}></Route>
      <Route path='/Dashboard' element={<Dashboard/>}></Route>
      <Route path='/Personalinformation' element={<Personalinformation/>}></Route>
      <Route path='/Academicinformation' element={<Academicinformation/>}></Route>
      <Route path='/Importantdocuments' element={<Importantdocuments/>}></Route>
      <Route path='/Applicationform' element={<Applicationform/>}></Route>
      <Route path='/Status' element={<Status/>}></Route>
      </Routes>
      </Router>
    </div>
  )
}
