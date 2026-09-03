import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Assessment from './pages/Assessment';
import Report from './pages/Report';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="hamburger" id="mobileHeader">
        <button className="hamburger-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <span className="hamburger-brand">TAARA</span>
      </header>

      <div className={`mobile-overlay ${isSidebarOpen ? 'open' : ''}`} onClick={() => setIsSidebarOpen(false)}></div>

      <Sidebar currentPage={currentPage} navigateTo={navigateTo} isOpen={isSidebarOpen} />

      <main className="main">
        {/* Active Page Switching */}
        {currentPage === 'landing' && <Landing navigateTo={navigateTo} />}
        {currentPage === 'assessment' && <Assessment navigateTo={navigateTo} />}
        {currentPage === 'analysis' && <Report navigateTo={navigateTo} />}
        
        <Footer navigateTo={navigateTo} />
      </main>
    </>
  );
}

export default App;