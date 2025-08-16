
import Navbar from '@/components/Navbar'

import { useState } from 'react'
import Home from '@/pages/Home'

const App = () => {

  const [query, setQuery] = useState('');

   const handleSearch = (searchTerm) => {
    setQuery(searchTerm);

    console.log("The user wants to search for " + searchTerm)
  }

  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (pageName) => {
    setCurrentPage(pageName);
    console.log(`Navigating to " + ${pageName}`);
  }

  return (
    <>
     {/* Header */}
      <Navbar onNavigate={handleNavigate} />

      {currentPage === 'home' && <Home handleSearch={handleSearch} /> }
      {currentPage === 'about' && <h2>About Us</h2> }
      {currentPage === 'services' && <h2>Services</h2> }
      {currentPage === 'contact' && <h2>Contact Us</h2> }
    </>
  )
}

export default App