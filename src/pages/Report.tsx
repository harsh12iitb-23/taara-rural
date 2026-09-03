interface ReportProps {
  navigateTo: (page: string) => void;
}

export default function Report({ navigateTo }: ReportProps) {
  // Replicating your JSON download logic
  const downloadJsonReport = () => {
    const reportObj = {
      user_id: `PRI-${Math.floor(Math.random() * 899999) + 100000}`,
      domain: "Creative & Handicrafts",
      cluster: "Textile & Embroidery",
      overall_percentage: 74,
      generated_at: new Date().toISOString()
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(reportObj, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `PRI_NEXA_Report_${reportObj.user_id}.json`);
    document.body.appendChild(dlAnchorElem);
    dlAnchorElem.click();
    document.body.removeChild(dlAnchorElem);
  };

  return (
    <section className="assessment-section" style={{ padding: '80px 72px' }}>
      <div className="assessment-card animate-in visible" style={{ maxWidth: '900px' }}>
        
        <div className="assessment-heading-wrap" style={{ margin: '0 auto 36px auto' }}>
          <h2 className="section-heading" style={{ fontSize: '32px', marginBottom: '6px', color: 'var(--near-black)' }}>
            Your Performance Report
          </h2>
          <p style={{ fontSize: '14.5px', color: '#555' }}>
            Here is your detailed skill alignment and certified recommendations
          </p>
        </div>

        <div className="report-grid">
          {/* Strengths Card */}
          <div className="report-card-inner">
            <div className="report-card-title-strengths">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              Strengths
            </div>
            <div id="report-strengths-list">
              {/* Embroidery Work */}
              <div className="report-skill-row">
                <div className="report-skill-meta">
                  <span>Embroidery Work</span>
                  <span style={{ color: '#2e7d32' }}>88%</span>
                </div>
                <div className="report-progress-bar-track">
                  <div className="report-progress-bar-fill-green" style={{ width: '88%' }}></div>
                </div>
              </div>
              {/* Fabric Dyeing */}
              <div className="report-skill-row">
                <div className="report-skill-meta">
                  <span>Fabric Dyeing & Printing</span>
                  <span style={{ color: '#2e7d32' }}>76%</span>
                </div>
                <div className="report-progress-bar-track">
                  <div className="report-progress-bar-fill-green" style={{ width: '76%' }}></div>
                </div>
              </div>
              {/* Tailoring */}
              <div className="report-skill-row">
                <div className="report-skill-meta">
                  <span>Tailoring & Dressmaking</span>
                  <span style={{ color: '#2e7d32' }}>72%</span>
                </div>
                <div className="report-progress-bar-track">
                  <div className="report-progress-bar-fill-green" style={{ width: '72%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Improvements Card */}
          <div className="report-card-inner">
            <div className="report-card-title-improvements">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              Areas to Improve
            </div>
            <div id="report-improvements-list">
              {/* Handloom Weaving */}
              <div className="report-skill-row">
                <div className="report-skill-meta">
                  <span>Handloom Weaving</span>
                  <span style={{ color: '#c62828' }}>32%</span>
                </div>
                <div className="report-progress-bar-track">
                  <div className="report-progress-bar-fill-red" style={{ width: '32%' }}></div>
                </div>
              </div>
              {/* Knitting & Crochet */}
              <div className="report-skill-row">
                <div className="report-skill-meta">
                  <span>Knitting & Crochet</span>
                  <span style={{ color: '#c62828' }}>38%</span>
                </div>
                <div className="report-progress-bar-track">
                  <div className="report-progress-bar-fill-red" style={{ width: '38%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 className="rec-heading">📚 Improvement Recommendations</h3>
        <div id="report-recommendations-container">
          <div className="rec-card">
            <div className="rec-card-title">Handloom Weaving (32%)</div>
            <div className="rec-item">
              <span className="rec-icon">💡</span>
              <span>Practice warp and weft alignment on a basic frame loom for 20 minutes daily</span>
            </div>
            <div className="rec-item">
              <span className="rec-icon">💡</span>
              <span>Study Pochampally Ikat patterns from NSDC YouTube tutorials (available in Telugu & Hindi)</span>
            </div>
            <div className="rec-item">
              <span className="rec-icon">📘</span>
              <span><strong>Free Course:</strong> NSDC Handloom Weaver Certification — available at your nearest CSC center</span>
            </div>
            <div className="rec-item">
              <span className="rec-icon">🏋️‍♂️</span>
              <span><strong>Daily Exercise:</strong> Weave a 6-inch cotton sample on scrap thread every morning before work</span>
            </div>
          </div>

          <div className="rec-card">
            <div className="rec-card-title">Knitting & Crochet (38%)</div>
            <div className="rec-item">
              <span className="rec-icon">💡</span>
              <span>Start with basic knit and purl stitches before attempting pattern work</span>
            </div>
            <div className="rec-item">
              <span className="rec-icon">💡</span>
              <span>Use thicker yarn (8-ply) to learn stitch structure more easily</span>
            </div>
            <div className="rec-item">
              <span className="rec-icon">📘</span>
              <span><strong>Free Course:</strong> Craftsy Knitting Basics (free tier) — works on low-data mobile</span>
            </div>
            <div className="rec-item">
              <span className="rec-icon">🏋️‍♂️</span>
              <span><strong>Daily Exercise:</strong> Knit one 4-inch square per day, tracking your tension consistency</span>
            </div>
          </div>
        </div>

        <h3 className="rec-heading" style={{ marginTop: '36px' }}>🎯 Recommended Career Paths</h3>
        <div className="career-paths-container">
          {["Artisan Entrepreneur", "Amazon Karigar Seller", "Govt. Handloom Scheme", "Craft Design Teacher", "Textile Export Worker"].map((path, idx) => (
            <span key={idx} className="career-path-tag">{path}</span>
          ))}
        </div>

        <div style={{ marginTop: '40px', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <button className="btn-primary" onClick={() => navigateTo('assessment')}>
            Take Another Assessment
          </button>
          <button 
            className="btn-secondary" 
            style={{ border: '2px solid var(--copperwood)', color: 'var(--copperwood)' }} 
            onClick={downloadJsonReport}
          >
            Download Certified PRI-NEXA JSON
          </button>
        </div>

      </div>
    </section>
  );
}