import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "../src/components/Navbar"
import Education from "./pages/Education"
import Projects from "./pages/Projects"
import About from "./pages/AboutMe"
import Home from "./pages/Home"
function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/education" element={<Education />} />      
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={<Home />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
