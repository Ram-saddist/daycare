import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Navigation from './Navigation.jsx'
import AddDoctor from './AddDoctor.jsx'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/> 
          
          <Route path='/add-doctor' element={<AddDoctor/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

// PFS-VJA-198 rollnumber
