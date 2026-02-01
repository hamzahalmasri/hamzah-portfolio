import React from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Volunteering from './components/Volunteering.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Courses from './components/Courses.jsx'

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <About></About>
      <Skills></Skills>
      <Volunteering></Volunteering>
      <Projects></Projects>
      <Education></Education>
      <Courses></Courses>
    </div>
  )
}

export default App
