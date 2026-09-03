import { useEffect } from 'react';

interface LandingProps {
  navigateTo: (page: string) => void;
}

export default function Landing({ navigateTo }: LandingProps) {
  // This recreates your vanilla JS scroll animations
  useEffect(() => {
    const animEls = document.querySelectorAll('.animate-in');
    const animObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const siblings = Array.from(entry.target.parentNode?.querySelectorAll('.animate-in') || []);
          const idx = siblings.indexOf(entry.target as Element);
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, idx * 80);
          animObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    animEls.forEach(el => animObserver.observe(el));
    return () => animObserver.disconnect(); // Cleanup observer when navigating away
  }, []);

  return (
    <div id="page-landing">
      {/* HERO SECTION */}
      <section className="hero" id="hero">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot"></span>
          India's Rural Career Platform
        </div>

        <h1 className="hero-heading">
          Your Dream Career<br />Starts <span className="highlight">Right Here</span>,<br />From Where You Are.
        </h1>

        <p className="hero-sub">
          TAARA helps students from every corner of Bharat discover careers that match who they truly are — in their language, at their pace.
        </p>

        <div className="hero-actions">
          <a href="#" className="btn-primary" onClick={(e) => { e.preventDefault(); navigateTo('assessment'); }}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
            </svg>
            Take Free Assessment
          </a>
          <a href="#how-it-works" className="btn-secondary">
            See How It Works
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>

        <div className="hero-badge-strip">
          <div className="hero-badge">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            Government Backed
          </div>
          <div className="hero-badge">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path>
            </svg>
            Takes Only 12 Minutes
          </div>
          <div className="hero-badge">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            Available in 8 Languages
          </div>
          <div className="hero-badge">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            2 Lakh+ Students Guided
          </div>
        </div>

        <div className="hero-deco"></div>
      </section>

      {/* STATS SECTION */}
      <section className="stats" id="stats">
        <div className="stats-grid">
          <div className="stat-card animate-in visible">
            <div className="stat-number">200K+</div>
            <div className="stat-label">Rural students guided across India</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-card animate-in visible">
            <div className="stat-number">28</div>
            <div className="stat-label">States &amp; union territories reached</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-card animate-in visible">
            <div className="stat-number">150+</div>
            <div className="stat-label">Career paths mapped &amp; explained</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-card animate-in visible">
            <div className="stat-number">94%</div>
            <div className="stat-label">Students feel more confident about their future</div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section" id="how-it-works">
        <p className="section-eyebrow animate-in visible">How It Works</p>
        <h2 className="section-heading animate-in visible">Three Simple Steps<br />to Your Career Roadmap</h2>
        <p className="section-sub animate-in visible">No complicated forms. No jargon. Just honest guidance built for you.</p>

        <div className="steps-grid">
          <div className="step-card animate-in visible">
            <span className="step-number">Step 01</span>
            <div className="step-icon-wrap">
              <svg width="26" height="26" fill="none" stroke="#BC6C25" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <h3 className="step-title">Answer the Assessment</h3>
            <p className="step-desc">Take our 12-minute quiz. We ask about what you enjoy, what you're good at, and what matters to your family. No right or wrong answers — just you, being honest.</p>
          </div>

          <div className="step-card animate-in visible">
            <span className="step-number">Step 02</span>
            <div className="step-icon-wrap">
              <svg width="26" height="26" fill="none" stroke="#BC6C25" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <h3 className="step-title">Get Your Career Report</h3>
            <p className="step-desc">Instantly receive a personalised report listing your top career matches, the skills you already have, and what you'd need to get there — explained simply in your language.</p>
          </div>

          <div className="step-card animate-in visible">
            <span className="step-number">Step 03</span>
            <div className="step-icon-wrap">
              <svg width="26" height="26" fill="none" stroke="#BC6C25" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <h3 className="step-title">Follow Your Roadmap</h3>
            <p className="step-desc">Get a step-by-step plan: which courses to take, which government schemes to apply for, and which local resources can help you reach your goal.</p>
          </div>
        </div>
      </section>

      {/* CAREERS PREVIEW */}
      <section className="careers" id="careers">
        <p className="section-eyebrow animate-in visible">Explore Paths</p>
        <h2 className="section-heading animate-in visible">150+ Careers,<br />All Within Your Reach</h2>
        <p className="section-sub animate-in visible">From agriculture to aerospace — every career is explained in simple terms, with real local pathways.</p>

        <div className="careers-grid">
          <div className="career-card animate-in visible">
            <span className="career-emoji">🌾</span>
            <div className="career-title">Agriculture &amp; Food</div>
            <div className="career-paths">Agri-tech · Food Science · Soil Expert</div>
          </div>
          <div className="career-card animate-in visible">
            <span className="career-emoji">🏥</span>
            <div className="career-title">Health &amp; Care</div>
            <div className="career-paths">Nursing · Lab Tech · Ayurveda</div>
          </div>
          <div className="career-card animate-in visible">
            <span className="career-emoji">⚙️</span>
            <div className="career-title">Engineering &amp; Trade</div>
            <div className="career-paths">ITI · Polytechnic · Civil · Electrical</div>
          </div>
          <div className="career-card animate-in visible">
            <span className="career-emoji">💻</span>
            <div className="career-title">Technology</div>
            <div className="career-paths">Coding · Data · Cyber Security</div>
          </div>
          <div className="career-card animate-in visible">
            <span className="career-emoji">🎨</span>
            <div className="career-title">Arts &amp; Design</div>
            <div className="career-paths">Fashion · Interior · Animation</div>
          </div>
          <div className="career-card animate-in visible">
            <span className="career-emoji">📚</span>
            <div className="career-title">Education</div>
            <div className="career-paths">Teaching · Training · Research</div>
          </div>
          <div className="career-card animate-in visible">
            <span className="career-emoji">🏛️</span>
            <div className="career-title">Government &amp; Law</div>
            <div className="career-paths">UPSC · Police · Legal Aid</div>
          </div>
          <div className="career-card animate-in visible">
            <span className="career-emoji">💼</span>
            <div className="career-title">Business &amp; Finance</div>
            <div className="career-paths">Banking · Insurance · Startups</div>
          </div>
        </div>

        <div className="careers-cta">
          <a href="#" className="btn-outline" onClick={(e) => { e.preventDefault(); navigateTo('assessment'); }}>
            Find Your Best Match
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
              <line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ background: 'var(--cornsilk)', padding: '80px 72px' }}>
        <p className="section-eyebrow animate-in visible">Contact Us</p>
        <h2 className="section-heading animate-in visible">We're Here to Help</h2>
        <p className="section-sub animate-in visible">Have questions? Reach out to our counsellors — in your language.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', maxWidth: '640px' }} className="animate-in visible">
          <div style={{ background: '#fff', borderRadius: '14px', padding: '28px', border: '1px solid #ede8d5' }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>📞</div>
            <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 700, fontSize: '16px', marginBottom: '6px' }}>Helpline</div>
            <div style={{ fontSize: '14px', color: '#666' }}>1800-XXX-XXXX<br />Mon–Sat, 9am–6pm</div>
          </div>
          <div style={{ background: '#fff', borderRadius: '14px', padding: '28px', border: '1px solid #ede8d5' }}>
            <div style={{ fontSize: '28px', marginBottom: '12px' }}>✉️</div>
            <div style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 700, fontSize: '16px', marginBottom: '6px' }}>Email</div>
            <div style={{ fontSize: '14px', color: '#666' }}>support@taara.gov.in<br />Reply within 24 hours</div>
          </div>
        </div>
      </section>
    </div>
  );
}