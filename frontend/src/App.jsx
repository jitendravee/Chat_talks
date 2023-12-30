import React from 'react'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { BrowserRouter } from 'react-router-dom';
import {Routes,Route } from 'react-router-dom';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Nav from './components/Nav';
const App = () => {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      
      <Route path="/signin" element = {< SignIn />} />
      <Route path="/signup" element = {< SignUp />} />
      <Route path="/" element = {< Home />} />
      <Route path="/contact" element = {< ContactUs />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App