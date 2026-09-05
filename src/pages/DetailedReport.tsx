interface DetailedReportProps {
  navigateTo: (page: string) => void;
}

export default function DetailedReport({ navigateTo }: DetailedReportProps) {
  return (
    <section className="assessment-section animate-in visible">
      <div className="assessment-card" style={{ maxWidth: '1000px', margin: '0 auto', padding: '48px', textAlign: 'left' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '2px solid var(--copperwood)', paddingBottom: '24px', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '28px', color: 'var(--black-forest)', marginBottom: '8px', fontFamily: "'Baloo 2', sans-serif" }}>
              TAARA PERSONALIZED CAREER GUIDANCE DIAGNOSTIC REPORT[cite: 3]
            </h1>
            <p style={{ color: '#666', fontSize: '16px', fontWeight: 'bold' }}>CREATIVE & FINE ARTS USER DIAGNOSTIC PROFILE[cite: 3]</p>
          </div>
          <button className="btn-secondary" onClick={() => navigateTo('analysis')} style={{ padding: '8px 16px' }}>← Back to Summary</button>
        </div>

        {/* CANDIDATE INFO */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', background: '#FFFDF0', padding: '24px', borderRadius: '12px', border: '1px solid #ede8d5', marginBottom: '40px' }}>
          <div><strong>REPORT ID:</strong> TR-CFA-260904-017[cite: 3]</div>
          <div><strong>ASSESSMENT DATE:</strong> 04 September 2026[cite: 3]</div>
          <div><strong>CANDIDATE NAME:</strong> Aarav Mehta[cite: 3]</div>
          <div><strong>AGE:</strong> 19 years[cite: 3]</div>
          <div><strong>LOCATION:</strong> Jaipur, Rajasthan[cite: 3]</div>
          <div><strong>EDUCATION:</strong> First-year undergraduate[cite: 3]</div>
          <div><strong>PREFERRED DOMAIN:</strong> Creative/Fine Arts[cite: 3]</div>
          <div><strong>ASSESSMENT TYPE:</strong> Career & Skill Diagnostic[cite: 3]</div>
          <div><strong>GUIDANCE STATUS:</strong> Initial assessment[cite: 3]</div>
          <div><strong>REASSESSMENT WINDOW:</strong> 30-45 days[cite: 3]</div>
        </div>

        {/* 1. DIAGNOSTIC RESULT */}
        <h2 style={{ fontSize: '20px', color: 'var(--copperwood)', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '16px' }}>1. DIAGNOSTIC RESULT[cite: 3]</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '24px', fontSize: '14px' }}>
          <thead>
            <tr style={{ background: 'var(--black-forest)', color: '#fff', textAlign: 'left' }}>
              <th style={{ padding: '12px' }}>ASSESSMENT DIMENSION[cite: 3]</th>
              <th style={{ padding: '12px' }}>SCORE[cite: 3]</th>
              <th style={{ padding: '12px' }}>INTERPRETATION[cite: 3]</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Creative Vision & Imagination[cite: 3]</td><td style={{ padding: '12px' }}>88/100[cite: 3]</td><td style={{ padding: '12px' }}>Strong original ideas and visual concept generation[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Color Value Perception[cite: 3]</td><td style={{ padding: '12px' }}>84/100[cite: 3]</td><td style={{ padding: '12px' }}>Strong-good recognition of light, shadow and hue intensity[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Visual-Spatial Scale Translation[cite: 3]</td><td style={{ padding: '12px' }}>76/100[cite: 3]</td><td style={{ padding: '12px' }}>Developing good composition, needs larger-scale proportion practice[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Technical Drawing / Perspective[cite: 3]</td><td style={{ padding: '12px' }}>68/100[cite: 3]</td><td style={{ padding: '12px' }}>Developing perspective geometry needs structured practice[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Medium Handling & Brush Control[cite: 3]</td><td style={{ padding: '12px' }}>72/100[cite: 3]</td><td style={{ padding: '12px' }}>Developing control improves with deliberate repetition[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Commercial/Digital Conversion[cite: 3]</td><td style={{ padding: '12px' }}>61/100[cite: 3]</td><td style={{ padding: '12px' }}>Priority gap digital conversion, pricing and presentation need work[cite: 3]</td></tr>
          </tbody>
        </table>
        <div style={{ background: '#f5f5f5', padding: '16px', borderRadius: '8px', marginBottom: '40px' }}>
          <strong>OVERALL CAREER GUIDANCE INDEX: 82/100</strong> — Strong potential with targeted technical development. The profile indicates a particularly strong creative foundation. The principal development opportunity is to convert visual ideas into technically consistent, scalable and commercially usable artwork.[cite: 3]
        </div>

        {/* 2. SKILL PROFILE & DIAGNOSTIC FINDINGS */}
        <h2 style={{ fontSize: '20px', color: 'var(--copperwood)', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '16px' }}>2. SKILL PROFILE & DIAGNOSTIC FINDINGS[cite: 3]</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '40px', fontSize: '14px' }}>
          <thead>
            <tr style={{ background: 'var(--black-forest)', color: '#fff', textAlign: 'left' }}>
              <th style={{ padding: '12px' }}>SKILL AREA[cite: 3]</th>
              <th style={{ padding: '12px' }}>RESULT[cite: 3]</th>
              <th style={{ padding: '12px' }}>STATUS[cite: 3]</th>
              <th style={{ padding: '12px' }}>DIAGNOSTIC NOTE[cite: 3]</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Creative vision[cite: 3]</td><td style={{ padding: '12px' }}>88[cite: 3]</td><td style={{ padding: '12px' }}>Strength[cite: 3]</td><td style={{ padding: '12px' }}>Strong imagination and color selection support concept-driven artwork.[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Color perception[cite: 3]</td><td style={{ padding: '12px' }}>84[cite: 3]</td><td style={{ padding: '12px' }}>Strength[cite: 3]</td><td style={{ padding: '12px' }}>Good light/shadow contrast and hue-intensity recognition.[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Composition[cite: 3]</td><td style={{ padding: '12px' }}>86[cite: 3]</td><td style={{ padding: '12px' }}>Strength[cite: 3]</td><td style={{ padding: '12px' }}>Strong arrangement of visual elements and storytelling.[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Perspective geometry[cite: 3]</td><td style={{ padding: '12px' }}>68[cite: 3]</td><td style={{ padding: '12px' }}>Skill gap[cite: 3]</td><td style={{ padding: '12px' }}>Incorrect perspective angles appear when working beyond simple scenes.[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Grid scaling[cite: 3]</td><td style={{ padding: '12px' }}>65[cite: 3]</td><td style={{ padding: '12px' }}>Priority gap[cite: 3]</td><td style={{ padding: '12px' }}>Small sketches are not yet consistently translated to large surfaces.[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Anatomical proportion[cite: 3]</td><td style={{ padding: '12px' }}>70[cite: 3]</td><td style={{ padding: '12px' }}>Developing[cite: 3]</td><td style={{ padding: '12px' }}>Figure proportion needs structured observation and measurement practice.[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Brush pressure / medium control[cite: 3]</td><td style={{ padding: '12px' }}>72[cite: 3]</td><td style={{ padding: '12px' }}>Developing[cite: 3]</td><td style={{ padding: '12px' }}>Pressure and medium ratios vary across techniques.[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Digital art conversion[cite: 3]</td><td style={{ padding: '12px' }}>61[cite: 3]</td><td style={{ padding: '12px' }}>Priority gap[cite: 3]</td><td style={{ padding: '12px' }}>Needs basic digital-art workflow and physical-to-digital conversion.[cite: 3]</td></tr>
          </tbody>
        </table>

        {/* 3. DOMAIN-SPECIFIC SKILL-GAP ISOLATION */}
        <h2 style={{ fontSize: '20px', color: 'var(--copperwood)', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '16px' }}>3. DOMAIN-SPECIFIC SKILL-GAP ISOLATION[cite: 3]</h2>
        <p style={{ fontSize: '14px', marginBottom: '16px' }}><strong>Creative Vision vs. Technical Precision Split.</strong> The candidate's stronger area is imagination, color selection and composition. The main constraint is technical execution: perspective geometry, grid scaling, anatomical proportions and controlled brush/medium handling. This means the recommended intervention is not to replace the creative direction, but to strengthen the technical layer that allows the creative direction to be executed reliably.[cite: 3]</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '40px', fontSize: '14px' }}>
          <thead>
            <tr style={{ background: 'var(--black-forest)', color: '#fff', textAlign: 'left' }}>
              <th style={{ padding: '12px' }}>MICRO-CONCEPT[cite: 3]</th>
              <th style={{ padding: '12px' }}>CURRENT FINDING[cite: 3]</th>
              <th style={{ padding: '12px' }}>RECOMMENDED CORRECTION[cite: 3]</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Value blending[cite: 3]</td><td style={{ padding: '12px' }}>Occasional muddy transitions[cite: 3]</td><td style={{ padding: '12px' }}>Practice controlled value blending while maintaining color separation.[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Water-to-paint ratio[cite: 3]</td><td style={{ padding: '12px' }}>Inconsistent in selected studies[cite: 3]</td><td style={{ padding: '12px' }}>Use repeatable mixing ratios and controlled brush loading.[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Perspective angles[cite: 3]</td><td style={{ padding: '12px' }}>Errors in multi-plane scenes[cite: 3]</td><td style={{ padding: '12px' }}>Practice 1-point and 2-point perspective with guided grids.[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Large-surface scaling[cite: 3]</td><td style={{ padding: '12px' }}>Proportion drifts during enlargement[cite: 3]</td><td style={{ padding: '12px' }}>Use grid scaling from thumbnail paper wall/canvas.[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Brush stroke pressure[cite: 3]</td><td style={{ padding: '12px' }}>Uneven line/edge control[cite: 3]</td><td style={{ padding: '12px' }}>Repeat pressure drills with varied brush sizes.[cite: 3]</td></tr>
          </tbody>
        </table>

        {/* 4. COGNITIVE CAPABILITY MAPPING */}
        <h2 style={{ fontSize: '20px', color: 'var(--copperwood)', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '16px' }}>4. COGNITIVE CAPABILITY MAPPING[cite: 3]</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '40px', fontSize: '14px' }}>
          <thead>
            <tr style={{ background: 'var(--black-forest)', color: '#fff', textAlign: 'left' }}>
              <th style={{ padding: '12px' }}>CAPABILITY[cite: 3]</th>
              <th style={{ padding: '12px' }}>SCORE[cite: 3]</th>
              <th style={{ padding: '12px' }}>WHAT IT MEANS FOR THE USER[cite: 3]</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Visual-Spatial Scale Translation[cite: 3]</td><td style={{ padding: '12px' }}>76/100[cite: 3]</td><td style={{ padding: '12px' }}>Can organize compositions well; needs practice preserving proportion when moving from small sketches to large canvas/wall grids.[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Color Value Perception[cite: 3]</td><td style={{ padding: '12px' }}>84/100[cite: 3]</td><td style={{ padding: '12px' }}>Strong ability to distinguish light, shadow contrast and hue intensity; supports realism and detailed work.[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Visual Observation[cite: 3]</td><td style={{ padding: '12px' }}>86/100[cite: 3]</td><td style={{ padding: '12px' }}>Strong observation supports realism, shading and miniature-detail-oriented work.[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Creative Ideation[cite: 3]</td><td style={{ padding: '12px' }}>88/100[cite: 3]</td><td style={{ padding: '12px' }}>High idea generation supports concept art, folk-art storytelling, mural themes and commercial visual work.[cite: 3]</td></tr>
          </tbody>
        </table>

        {/* 5. PERSONALIZED CAREER DIRECTION */}
        <h2 style={{ fontSize: '20px', color: 'var(--copperwood)', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '16px' }}>5. PERSONALIZED CAREER DIRECTION[cite: 3]</h2>
        <p style={{ fontSize: '14px', marginBottom: '16px' }}>The assessment points toward visual-art careers that combine strong creative ideation with structured technical execution. The highest-fit pathways are presented as opportunities to explore, not guaranteed outcomes.[cite: 3]</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '40px', fontSize: '14px' }}>
          <thead>
            <tr style={{ background: 'var(--black-forest)', color: '#fff', textAlign: 'left' }}>
              <th style={{ padding: '12px' }}>CAREER PATH[cite: 3]</th>
              <th style={{ padding: '12px' }}>FIT[cite: 3]</th>
              <th style={{ padding: '12px' }}>WHY IT FITS THIS PROFILE[cite: 3]</th>
              <th style={{ padding: '12px' }}>DEVELOPMENT PRIORITY[cite: 3]</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Fine Art Painter[cite: 3]</td><td style={{ padding: '12px' }}>High[cite: 3]</td><td style={{ padding: '12px' }}>Strong creative vision, observation and color perception.[cite: 3]</td><td style={{ padding: '12px' }}>Perspective, anatomy, portfolio development.[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Mural Artist[cite: 3]</td><td style={{ padding: '12px' }}>High[cite: 3]</td><td style={{ padding: '12px' }}>Spatial reasoning and composition can support large-scale visual storytelling.[cite: 3]</td><td style={{ padding: '12px' }}>Grid scaling, wall preparation, project execution.[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Commercial Sign & Graphic Artist[cite: 3]</td><td style={{ padding: '12px' }}>High[cite: 3]</td><td style={{ padding: '12px' }}>Color/composition strengths can transfer to applied visual communication.[cite: 3]</td><td style={{ padding: '12px' }}>Lettering, layout consistency, digital conversion.[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Children's Book Illustrator[cite: 3]</td><td style={{ padding: '12px' }}>High[cite: 3]</td><td style={{ padding: '12px' }}>Creative ideation and visual storytelling are strong.[cite: 3]</td><td style={{ padding: '12px' }}>Character anatomy, sequential composition, digital tools.[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Textile Motif Designer[cite: 3]</td><td style={{ padding: '12px' }}>High[cite: 3]</td><td style={{ padding: '12px' }}>Color harmony and motif creation align with visual strengths.[cite: 3]</td><td style={{ padding: '12px' }}>Pattern scaling and repeat design.[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Folk Art Entrepreneur[cite: 3]</td><td style={{ padding: '12px' }}>High[cite: 3]</td><td style={{ padding: '12px' }}>Interest in visual heritage work can combine art with products and local craft ecosystems.[cite: 3]</td><td style={{ padding: '12px' }}>Product photography, pricing, digital presentation.[cite: 3]</td></tr>
          </tbody>
        </table>

        {/* 6. FUTURE OPPORTUNITIES & PATHWAYS */}
        <h2 style={{ fontSize: '20px', color: 'var(--copperwood)', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '16px' }}>6. FUTURE OPPORTUNITIES & PATHWAYS[cite: 3]</h2>
        <p style={{ fontSize: '14px', marginBottom: '16px' }}>TAARA's pathway model connects diagnostic findings to practical next steps. For this candidate, future opportunities should progress from technical strengthening → portfolio evidence → live projects/mentorship → commercial or advanced-art pathways.[cite: 3]</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '40px', fontSize: '14px' }}>
          <thead>
            <tr style={{ background: 'var(--black-forest)', color: '#fff', textAlign: 'left' }}>
              <th style={{ padding: '12px' }}>STAGE[cite: 3]</th>
              <th style={{ padding: '12px' }}>OPPORTUNITY[cite: 3]</th>
              <th style={{ padding: '12px' }}>EXPECTED OUTPUT[cite: 3]</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>0-30 days[cite: 3]</td><td style={{ padding: '12px' }}>Perspective, grid scaling and medium-control practice[cite: 3]</td><td style={{ padding: '12px' }}>Technical practice sheets + 3 finished studies[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>30-60 days[cite: 3]</td><td style={{ padding: '12px' }}>Mentored mural/folk-art/commercial-art project[cite: 3]</td><td style={{ padding: '12px' }}>One documented real-world project[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>60-90 days[cite: 3]</td><td style={{ padding: '12px' }}>Portfolio curation and digital conversion[cite: 3]</td><td style={{ padding: '12px' }}>5-8 polished works with digital copies[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Next pathway[cite: 3]</td><td style={{ padding: '12px' }}>Fine-art institute, art academy, mural project or artisan mentorship[cite: 3]</td><td style={{ padding: '12px' }}>Structured training/apprenticeship/project placement[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Longer term[cite: 3]</td><td style={{ padding: '12px' }}>Fine art, mural, illustration, textile motifs or folk-art entrepreneurship[cite: 3]</td><td style={{ padding: '12px' }}>Specialized portfolio and career direction[cite: 3]</td></tr>
          </tbody>
        </table>

        {/* 7. PERSONALIZED LEARNING RECOMMENDATIONS */}
        <h2 style={{ fontSize: '20px', color: 'var(--copperwood)', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '16px' }}>7. PERSONALIZED LEARNING RECOMMENDATIONS[cite: 3]</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '40px', fontSize: '14px' }}>
          <thead>
            <tr style={{ background: 'var(--black-forest)', color: '#fff', textAlign: 'left' }}>
              <th style={{ padding: '12px' }}>PRIORITY[cite: 3]</th>
              <th style={{ padding: '12px' }}>LEARNING TARGET[cite: 3]</th>
              <th style={{ padding: '12px' }}>METHOD[cite: 3]</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>1[cite: 3]</td><td style={{ padding: '12px' }}>Perspective & grid scaling[cite: 3]</td><td style={{ padding: '12px' }}>3 weeks of guided perspective drawing and enlargement exercises.[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>2[cite: 3]</td><td style={{ padding: '12px' }}>Color/value control[cite: 3]</td><td style={{ padding: '12px' }}>Daily controlled mixing studies; compare light, shadow and hue intensity.[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>3[cite: 3]</td><td style={{ padding: '12px' }}>Brush & medium handling[cite: 3]</td><td style={{ padding: '12px' }}>Short repetitive drills for pressure, edge quality and water-to-paint ratios.[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>4[cite: 3]</td><td style={{ padding: '12px' }}>Digital conversion[cite: 3]</td><td style={{ padding: '12px' }}>Learn basic digital-art tools such as Photoshop/Procreate for converting physical work into digital assets.[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>5[cite: 3]</td><td style={{ padding: '12px' }}>Portfolio building[cite: 3]</td><td style={{ padding: '12px' }}>Select and document finished work with title, medium, process and final image.[cite: 3]</td></tr>
          </tbody>
        </table>

        {/* 8. PRACTICAL PROJECT RECOMMENDATIONS */}
        <h2 style={{ fontSize: '20px', color: 'var(--copperwood)', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '16px' }}>8. PRACTICAL PROJECT RECOMMENDATIONS[cite: 3]</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '40px', fontSize: '14px' }}>
          <thead>
            <tr style={{ background: 'var(--black-forest)', color: '#fff', textAlign: 'left' }}>
              <th style={{ padding: '12px' }}>PROJECT[cite: 3]</th>
              <th style={{ padding: '12px' }}>PURPOSE[cite: 3]</th>
              <th style={{ padding: '12px' }}>SUCCESS EVIDENCE[cite: 3]</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Community/school wall mural[cite: 3]</td><td style={{ padding: '12px' }}>Build large-scale composition and grid-scaling skill.[cite: 3]</td><td style={{ padding: '12px' }}>Completed mural + before/after grid planning.[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>5-piece regional folk-art collection[cite: 3]</td><td style={{ padding: '12px' }}>Strengthen style consistency and cultural storytelling.[cite: 3]</td><td style={{ padding: '12px' }}>Five finished works documented as a collection.[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Custom painted merchandise[cite: 3]</td><td style={{ padding: '12px' }}>Test commercial application of artwork.[cite: 3]</td><td style={{ padding: '12px' }}>Painted totes, kettles or pots + basic pricing sheet.[cite: 3]</td></tr>
          </tbody>
        </table>

        {/* 9. LOCAL COACHING & MENTORSHIP ROUTING */}
        <h2 style={{ fontSize: '20px', color: 'var(--copperwood)', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '16px' }}>9. LOCAL COACHING & MENTORSHIP ROUTING[cite: 3]</h2>
        <p style={{ fontSize: '14px', marginBottom: '16px' }}>Recommended connection points from the reference framework include nearby Fine Arts institutes, cultural hubs such as Lalit Kala Akademi centers, active mural projects, regional artisan guilds, government fine-arts centers and vocational institutes. For live experience, the user can be paired with local muralists, decorative painter crews, commercial sign painters or master folk-artisans for project-based learning.[cite: 3]</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '40px', fontSize: '14px' }}>
          <thead>
            <tr style={{ background: 'var(--black-forest)', color: '#fff', textAlign: 'left' }}>
              <th style={{ padding: '12px' }}>ROUTE[cite: 3]</th>
              <th style={{ padding: '12px' }}>PURPOSE[cite: 3]</th>
              <th style={{ padding: '12px' }}>MATCH TO PROFILE[cite: 3]</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Fine Arts institute / academy[cite: 3]</td><td style={{ padding: '12px' }}>Structured painting, drawing and portfolio learning[cite: 3]</td><td style={{ padding: '12px' }}>High[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Cultural hub / Lalit Kala Akademi center[cite: 3]</td><td style={{ padding: '12px' }}>Exposure to exhibitions, artists and cultural practice[cite: 3]</td><td style={{ padding: '12px' }}>High[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Muralist/decorative painter[cite: 3]</td><td style={{ padding: '12px' }}>Live project execution and large-scale technique[cite: 3]</td><td style={{ padding: '12px' }}>Very High[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Master folk-artisan[cite: 3]</td><td style={{ padding: '12px' }}>Traditional style and heritage-art apprenticeship[cite: 3]</td><td style={{ padding: '12px' }}>High[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Commercial sign/ graphic artist[cite: 3]</td><td style={{ padding: '12px' }}>Applied visual communication and commercial discipline[cite: 3]</td><td style={{ padding: '12px' }}>High[cite: 3]</td></tr>
          </tbody>
        </table>

        {/* 10. 30-DAY ACTION PLAN */}
        <h2 style={{ fontSize: '20px', color: 'var(--copperwood)', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '16px' }}>10. 30-DAY ACTION PLAN[cite: 3]</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '40px', fontSize: '14px' }}>
          <thead>
            <tr style={{ background: 'var(--black-forest)', color: '#fff', textAlign: 'left' }}>
              <th style={{ padding: '12px' }}>WEEK[cite: 3]</th>
              <th style={{ padding: '12px' }}>TARGET[cite: 3]</th>
              <th style={{ padding: '12px' }}>MEASUREMENT[cite: 3]</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Week 1[cite: 3]</td><td style={{ padding: '12px' }}>Perspective fundamentals + color-value studies[cite: 3]</td><td style={{ padding: '12px' }}>5 perspective exercises + 5 value studies[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Week 2[cite: 3]</td><td style={{ padding: '12px' }}>Grid scaling + brush-pressure control[cite: 3]</td><td style={{ padding: '12px' }}>3 scaled drawings + controlled stroke sheets[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Week 3[cite: 3]</td><td style={{ padding: '12px' }}>Apply skills to one finished artwork[cite: 3]</td><td style={{ padding: '12px' }}>1 completed artwork using grid/perspective plan[cite: 3]</td></tr>
            <tr style={{ borderBottom: '1px solid #eee' }}><td style={{ padding: '12px' }}>Week 4[cite: 3]</td><td style={{ padding: '12px' }}>Portfolio review + digital conversion[cite: 3]</td><td style={{ padding: '12px' }}>Select 5-8 works; digitize at least 2; record learning notes[cite: 3]</td></tr>
          </tbody>
        </table>

        {/* 11 & 12. SUMMARY & IMPRESSION */}
        <div style={{ background: '#FFFDF0', padding: '24px', borderRadius: '12px', border: '1px solid #ede8d5' }}>
          <h2 style={{ fontSize: '20px', color: 'var(--copperwood)', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '16px' }}>11. REASSESSMENT & PROGRESSION[cite: 3]</h2>
          <p style={{ fontSize: '14px', marginBottom: '24px' }}><strong>Reassessment window: 30-45 days.</strong> The next TAARA assessment should review portfolio artwork, newly acquired techniques and evidence of practical project completion. Progress should be measured against the identified skill gaps rather than against a generic artistic score. Successful improvement can unlock more advanced art pathways.[cite: 3]</p>

          <h2 style={{ fontSize: '20px', color: 'var(--copperwood)', borderBottom: '1px solid #eee', paddingBottom: '8px', marginBottom: '16px' }}>12. DIAGNOSTIC IMPRESSION[cite: 3]</h2>
          <ul style={{ fontSize: '14px', lineHeight: '1.8', color: '#444' }}>
            <li><strong>Profile:</strong> Creative/Fine Arts — Strong potential.[cite: 3]</li>
            <li><strong>Primary strengths:</strong> creative vision, color perception, observation and composition.[cite: 3]</li>
            <li><strong>Primary skill gaps:</strong> perspective geometry, grid scaling, technical medium control and digital conversion.[cite: 3]</li>
            <li><strong>Recommended direction:</strong> Fine Art Painter, Mural Artist, Commercial Sign & Graphic Artist, Children's Book Illustrator, Textile Motif Designer or Folk Art Entrepreneur.[cite: 3]</li>
            <li><strong>Immediate intervention:</strong> three weeks of perspective/grid-scaling and medium-control practice, followed by a documented practical project.[cite: 3]</li>
            <li><strong>Next review:</strong> 30-45 days with portfolio evidence.[cite: 3]</li>
          </ul>
        </div>
        
      </div>
    </section>
  );
}