import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles/index.css'
import Navbar from './components/navBar'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Resume from './components/resume'
import Projects from './components/projects'
import Skills from './components/skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </div>
  )
}
export default App
