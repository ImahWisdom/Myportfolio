import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import ScrollToTop from './components/pages/SrollToTop'

// import your pages here
import Home from './components/pages/Home'
// import About from './components/pages/About'
// import Tour from './components/pages/Tour'
// import Services from './components/pages/Services'
// import Contact from './components/pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      {/* When you're ready, uncomment the routes */}
       <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes> 
    </BrowserRouter>
  )
}

export default App
