import './index.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import Education from './Education'
import Main from './Main';


const App = () => {
  return (
    
    // <Router>
    //   <Routes>
    //     <Route path="/" element = {<Home></Home>}></Route>
    //     <Route path="/projects" element = {<Projects></Projects>}></Route>
    //     <Route path="/skills" element = {<Skills></Skills>}></Route>
    //     <Route path="/about" element = {<About></About>}></Route>
    //     <Route path="/contact" element = {<Contact></Contact>}></Route>
    //     <Route path="/education" element = {<Education></Education>}></Route>
    //   </Routes>
    // </Router>
    
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </Router>
     
  )
}

export default App

