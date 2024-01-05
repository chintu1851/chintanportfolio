import './index.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import Education from './Education'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home></Home>}></Route>
        <Route path="/projects" element = {<Projects></Projects>}></Route>
        <Route path="/skills" element = {<Skills></Skills>}></Route>
        <Route path="/about" element = {<About></About>}></Route>
        <Route path="/contact" element = {<Contact></Contact>}></Route>
        <Route path="/education" element = {<Education></Education>}></Route>
      </Routes>
    </Router>
    
  )
}

export default App

