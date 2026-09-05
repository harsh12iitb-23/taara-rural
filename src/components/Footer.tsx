interface FooterProps {
  navigateTo: (page: string) => void;
}

export default function Footer({ navigateTo }: FooterProps) {
  return (
    <>
      <footer className="footer">
        <div className="footer-brand">
          <span className="brand-name">TAARA</span>
          <p className="footer-tagline">Transforming rural career guidance across Bharat. Every student deserves to know their path.</p>
        </div>
        <div>
          <p className="footer-col-title">Platform</p>
          <ul className="footer-links">
            <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('assessment'); }}>Take Assessment</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); navigateTo('landing'); }}>Explore Careers</a></li>
          </ul>
        </div>
        <div>
          <p className="footer-col-title">Languages</p>
          <ul className="footer-links">
            <li><a href="#">हिंदी</a></li>
            <li><a href="#">தமிழ்</a></li>
            <li><a href="#">বাংলা</a></li>
            <li><a href="#">తెలుగు</a></li>
          </ul>
        </div>
        <div>
          <p className="footer-col-title">Support</p>
          <ul className="footer-links">
            <li><a href="#">Help Centre</a></li>
            <li>
              <a href="#" onClick={(e) => { 
                e.preventDefault(); 
                navigateTo('landing'); 
                setTimeout(() => { document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}); }, 100); 
              }}>Contact Us</a>
            </li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Grievance</a></li>
          </ul>
        </div>
      </footer>

      <div className="footer-bottom">
        <span className="footer-bottom-text">© 2026 TAARA. A Government of India Initiative. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Accessibility</a>
        </div>
      </div>
    </>
  );
}