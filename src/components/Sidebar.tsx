interface SidebarProps {
  currentPage: string;
  navigateTo: (page: string) => void;
  isOpen: boolean;
}

export default function Sidebar({ currentPage, navigateTo, isOpen }: SidebarProps) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`} id="sidebar">
      <div className="sidebar-top">
        <div className="logo-wrap">
          <div className="logo-icon">T</div>
          <span className="brand-name">TAARA</span>
        </div>
        <p className="brand-tagline">Transforming rural career guidance.</p>
      </div>

      <nav className="sidebar-nav">
        <p className="nav-section-label">Navigation</p>

        <a 
          href="#" 
          className={`nav-item ${currentPage === 'landing' ? 'active' : ''}`} 
          onClick={(e) => { e.preventDefault(); navigateTo('landing'); }}
        >
          <svg className="nav-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          Home
        </a>

        <a 
          href="#" 
          className={`nav-item ${currentPage === 'assessment' ? 'active' : ''}`} 
          onClick={(e) => { e.preventDefault(); navigateTo('assessment'); }}
        >
          <svg className="nav-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M9 11l3 3L22 4"></path>
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
          </svg>
          Take Your Assessment
        </a>

        <a 
          href="#contact" 
          className="nav-item" 
          onClick={(e) => { 
            e.preventDefault(); 
            navigateTo('landing'); 
            setTimeout(() => { document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}); }, 100); 
          }}
        >
          <svg className="nav-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          Contact Us
        </a>
      </nav>
    </aside>
  );
}