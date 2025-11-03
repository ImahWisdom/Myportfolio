import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import ScrollToTop from './components/pages/SrollToTop'

// import your pages here
import Home from './components/pages/Home'
import About from './components/pages/About'
import ProjectsPage from './components/pages/Projects'
import Skills from './components/pages/Skills'

import Contact from './components/pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
     <div className="main-content">
      {/* When you're ready, uncomment the routes */}
       <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} /> 
         <Route path="/projects" element={<ProjectsPage  />} />
         <Route path="/skills" element={<Skills />} />
         <Route path="/contact" element={<Contact />} />    
      </Routes> 
      <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
