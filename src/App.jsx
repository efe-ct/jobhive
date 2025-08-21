
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Jobs from '@/pages/Jobs'
import Contact from '@/pages/Contact'
import Footer from "@/components/Footer.jsx";

const App = () => {

  const [query, setQuery] = useState('');

  const handleSearch = (searchTerm) => {
    setQuery(searchTerm);

    console.log("The user wants to search for " + searchTerm)
  }

  // const [isMobile, setIsMobile] = useState();

  return (
    <BrowserRouter>
      {/* Header */}
      <Navbar />
      <div id="body">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          {/* navigate to forces the first page to be home */}
          <Route path="/home" element={<Home handleSearch={handleSearch} />} />
          <Route path="/about" element={<About />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App