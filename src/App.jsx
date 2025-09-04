import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Jobs from './pages/Jobs';
import { Navbar } from './components/ui';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Saved from './pages/Saved';
import Feedback from './pages/Feedback';
import { ToastHost } from './components/ui';

const ScrollToTop = () => {
  const { pathname, search } = useLocation();
  React.useEffect(() => {
    try {
      window.scrollTo({ top: 0, behavior: 'auto' });
    } catch {}
  }, [pathname, search]);
  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ToastHost>
        <div className="top">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
          <Footer />
        </div>
      </ToastHost>
    </BrowserRouter>
  );
};

export default App;
