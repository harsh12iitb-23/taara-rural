import { useState, useEffect } from 'react';
import { skillJsonData, aptitudeQuestions, situationalQuestions, domainSkillQuestions } from '../data/skillData';

interface AssessmentProps {
  navigateTo: (page: string) => void;
}

const LIKERT_OPTIONS = ['Strongly Dislike', 'Dislike', 'Neutral', 'Like', 'Strongly Like'];
const LIKERT_STATEMENTS = [
  { id: 'tech', domain: 'Technology', text: 'I enjoy solving problems using computers.' },
  { id: 'agri', domain: 'Agriculture', text: 'I like working outdoors with plants and animals.' },
  { id: 'biz', domain: 'Business', text: 'I enjoy buying, selling or managing money.' },
  { id: 'teach', domain: 'Teaching', text: 'I enjoy explaining things to others.' },
  { id: 'eng', domain: 'Engineering', text: 'I enjoy repairing machines or electrical items.' },
  { id: 'health', domain: 'Healthcare', text: 'I like helping sick or elderly people.' },
  { id: 'arts', domain: 'Arts', text: 'I enjoy drawing, designing, or making things by hand.' },
  { id: 'media', domain: 'Media', text: 'I enjoy speaking, storytelling, or creating videos.' }
];

export default function Assessment({ navigateTo }: AssessmentProps) {
  const [step, setStep] = useState<'form' | 'likert' | 'instructions' | 'quiz' | 'timeout'>('form');
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(['Hindi']);
  
  const [domainId, setDomainId] = useState('not_sure'); 
  const [educationLevel, setEducationLevel] = useState('10th Pass');
  const [familyOccupation, setFamilyOccupation] = useState('Farming / Agriculture');
  const [canTravel, setCanTravel] = useState('Yes');

  const [likertScores, setLikertScores] = useState<Record<string, number>>({
    tech: 2, agri: 2, biz: 2, teach: 2, eng: 2, health: 2, arts: 2, media: 2
  });
  
  // NEW: Dynamic Array State for the compiled test
  const [activeQuizSequence, setActiveQuizSequence] = useState<any[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeRemaining, setTimeRemaining] = useState(0);

  const availableLanguages = ["Hindi", "Tamil", "Bengali", "Punjabi", "Telugu", "Marathi", "Bhojpuri", "English", "Odia"];

  const toggleLanguage = (lang: string) => {
    if (selectedLanguages.includes(lang)) {
      setSelectedLanguages(selectedLanguages.filter(l => l !== lang));
    } else {
      setSelectedLanguages([...selectedLanguages, lang]);
    }
  };

  const handleLikertChange = (id: string, value: number) => {
    setLikertScores(prev => ({ ...prev, [id]: value }));
  };

  // NEW: Engine Logic to compile the 10-question sequence
  const startQuiz = () => {
    const compiledQuiz = [
      ...aptitudeQuestions.slice(0, 4),      // 4 Aptitude Questions
      ...situationalQuestions.slice(0, 3),   // 3 SJT Questions
      ...domainSkillQuestions.slice(0, 3)    // 3 Domain Questions
    ];
    setActiveQuizSequence(compiledQuiz);
    setStep('quiz');
    setTimeRemaining(20 * 60);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    let timer: number;
    if (step === 'quiz' && timeRemaining > 0) {
      timer = window.setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0 && step === 'quiz') {
      setStep('timeout');
    }
    return () => clearInterval(timer);
  }, [step, timeRemaining]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <section className="assessment-section">
      
      {/* ─── STAGE 1: PROFILE DETAILS FORM ─── */}
      {step === 'form' && (
        <div className="assessment-card animate-in visible">
          <div className="assessment-heading-wrap" style={{ margin: '0 auto 32px auto' }}>
            <h2 className="section-heading" style={{ fontSize: '34px', marginBottom: '8px' }}>Your Assessment</h2>
            <p style={{ fontSize: '15px', color: '#666' }}>Fill in your details and choose your skill domain to begin</p>
          </div>

          <div style={{ borderBottom: '1.5px solid rgba(188,108,37,0.1)', paddingBottom: '8px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '16px' }}>👤</span>
            <h3 style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 700, fontSize: '13.5px', letterSpacing: '1px', color: 'var(--copperwood)', textTransform: 'uppercase', margin: 0 }}>
              Personal & Background Details
            </h3>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setStep('likert'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <div className="assessment-form-grid">
              
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" className="form-control" defaultValue="ate" required />
              </div>
              
              <div className="form-group">
                <label>Age (21-65)</label>
                <input type="number" className="form-control" defaultValue="54" min="21" max="65" required />
              </div>

              <div className="form-group">
                <label>Gender</label>
                <select className="form-control" defaultValue="Prefer not to say">
                  <option value="Prefer not to say">Prefer not to say</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Mobile Number</label>
                <input type="tel" className="form-control" defaultValue="96xxxxxx45" required />
              </div>

              <div className="form-group">
                <label>Education Qualification</label>
                <select className="form-control" value={educationLevel} onChange={(e) => setEducationLevel(e.target.value)}>
                  <option value="Below 10th">Below 10th Standard</option>
                  <option value="10th Pass">10th Pass (Matriculation)</option>
                  <option value="12th Pass">12th Pass (Intermediate)</option>
                  <option value="ITI">ITI / Vocational Training</option>
                  <option value="Diploma">Diploma (Polytechnic)</option>
                  <option value="Graduate">Graduate / Degree</option>
                </select>
              </div>

              <div className="form-group">
                <label>Family Occupation</label>
                <select className="form-control" value={familyOccupation} onChange={(e) => setFamilyOccupation(e.target.value)}>
                  <option value="Farming / Agriculture">Farming / Agriculture (Own Land)</option>
                  <option value="Agricultural Laborer">Agricultural Laborer</option>
                  <option value="Dairy / Animal Husbandry">Dairy / Livestock / Fishing</option>
                  <option value="Handicrafts / Artisan">Handicrafts / Artisan (Weaving, Pottery, etc.)</option>
                  <option value="Daily Wage / Construction">Daily Wage / Construction</option>
                  <option value="Small Shop / Retail">Small Shop / Retail / Trading</option>
                  <option value="Self-Employed Service">Self-Employed (Tailor, Mechanic, Driver)</option>
                  <option value="Government / Public Service">Government / Public Service</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Can travel outside village to study/work?</label>
                <select className="form-control" value={canTravel} onChange={(e) => setCanTravel(e.target.value)}>
                  <option value="Yes">Yes, I can travel</option>
                  <option value="No">No, I need local options</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Skill Domain</label>
                <select className="form-control" value={domainId} onChange={(e) => setDomainId(e.target.value)}>
                  <option value="not_sure">NOT SURE</option>
                  {skillJsonData.dropdown_options.map((dom) => (
                    <option key={dom.value} value={dom.value}>{dom.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ marginTop: '24px', marginBottom: '32px' }}>
              <label style={{ fontWeight: 700, fontSize: '11.5px', color: 'var(--copperwood)', textTransform: 'uppercase' }}>
                Languages You Speak
              </label>
              <span style={{ fontSize: '12px', color: '#777', display: 'block', marginBottom: '12px', fontFamily: "'Nunito', sans-serif" }}>
                Tap a language to select (Basic / Medium / Expert)
              </span>
              <div className="lang-pills-container">
                {availableLanguages.map((lang: string) => (
                  <button
                    key={lang}
                    type="button"
                    className={`lang-pill ${selectedLanguages.includes(lang) ? 'active' : ''}`}
                    onClick={() => toggleLanguage(lang)}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '36px' }}>
              <button type="submit" className="btn-primary" style={{ padding: '16px 56px', width: '100%', maxWidth: '320px', justifyContent: 'center' }}>
                Continue to Interest Survey →
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ─── STAGE 2: LIKERT INTEREST SLIDER ─── */}
      {step === 'likert' && (
        <div className="assessment-card animate-in visible" style={{ maxWidth: '850px' }}>
          <div className="assessment-heading-wrap" style={{ margin: '0 auto 28px auto' }}>
            <h2 className="section-heading" style={{ fontSize: '32px', marginBottom: '8px' }}>Interest Discovery</h2>
            <p style={{ fontSize: '15px', color: '#666' }}>
              Adjust the slider on each statement according to what you enjoy doing most.
            </p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setStep('instructions'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            {LIKERT_STATEMENTS.map((item) => (
              <div key={item.id} className="likert-card-item">
                <span className="likert-domain-tag">{item.domain}</span>
                <p className="likert-statement">"{item.text}"</p>
                
                <input 
                  type="range" 
                  min="0" 
                  max="4" 
                  step="1"
                  className="likert-slider-track"
                  value={likertScores[item.id]} 
                  onChange={(e) => handleLikertChange(item.id, parseInt(e.target.value))}
                />

                <div className="likert-scale-labels">
                  <span>Strongly Dislike</span>
                  <span>Dislike</span>
                  <span>Neutral</span>
                  <span>Like</span>
                  <span>Strongly Like</span>
                </div>

                <div className="likert-badge-selected">
                  Selected: <u>{LIKERT_OPTIONS[likertScores[item.id]]}</u>
                </div>
              </div>
            ))}

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '36px' }}>
              <button type="button" className="btn-secondary" onClick={() => { setStep('form'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                ← Edit Details
              </button>
              <button type="submit" className="btn-primary" style={{ padding: '16px 44px' }}>
                Continue to Instructions →
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ─── STAGE 3: INSTRUCTIONS PAGE ─── */}
      {step === 'instructions' && (
        <div className="assessment-card animate-in visible" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>📋</div>
          <h2 className="section-heading" style={{ fontSize: '28px', marginBottom: '16px' }}>Before You Begin</h2>
          <p style={{ fontSize: '15px', color: '#666', marginBottom: '28px' }}>
            Please read the following instructions carefully to ensure the best experience.
          </p>

          <div style={{ background: '#FFFDF0', border: '1px solid rgba(188,108,37,0.25)', borderRadius: '14px', padding: '24px', textAlign: 'left', marginBottom: '32px' }}>
            <ul style={{ paddingLeft: '20px', color: 'var(--near-black)', fontFamily: "'Nunito', sans-serif", fontSize: '15px', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '10px' }}>You will have <strong>20 minutes</strong> to complete this assessment.</li>
              <li style={{ marginBottom: '10px' }}>There are <strong>10 questions</strong> testing basic aptitude, workplace judgement, and specific skills.</li>
              <li style={{ marginBottom: '10px' }}>Do not refresh your browser window, or your progress will be lost.</li>
              <li>Once the timer runs out, the quiz will automatically lock and submit.</li>
            </ul>
          </div>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button type="button" className="btn-secondary" onClick={() => { setStep('likert'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} style={{ padding: '14px 28px' }}>
              ← Back to Survey
            </button>
            <button type="button" className="btn-primary" onClick={startQuiz} style={{ padding: '14px 28px' }}>
              Start Assessment ⏱
            </button>
          </div>
        </div>
      )}

      {/* ─── STAGE 4: TIMED QUIZ ─── */}
      {step === 'quiz' && activeQuizSequence.length > 0 && (
        <div className="assessment-card animate-in visible">
          <div className="quiz-header">
            <div>
              <span style={{ fontSize: '13.5px', color: '#666' }}>Question {currentIdx + 1} of {activeQuizSequence.length}</span>
              <h2 style={{ fontSize: '18px', marginTop: '2px' }}>
                Skill: {activeQuizSequence[currentIdx].skillName}
              </h2>
            </div>
            <div className="quiz-timer-box">
              ⏱ <span>{formatTime(timeRemaining)}</span>
            </div>
          </div>

          <div className="quiz-progress-track">
            <div className="quiz-progress-fill" style={{ width: `${((currentIdx + 1) / activeQuizSequence.length) * 100}%` }}></div>
          </div>

          <div className="mcq-tag">{activeQuizSequence[currentIdx].type}</div>

          <p className="quiz-question-text">{activeQuizSequence[currentIdx].question}</p>

          <div className="quiz-options-stack">
            {activeQuizSequence[currentIdx].options.map((opt: string, idx: number) => (
              <button
                key={idx}
                type="button"
                className={`quiz-option ${answers[currentIdx] === idx ? 'selected' : ''}`}
                onClick={() => setAnswers({ ...answers, [currentIdx]: idx })}
              >
                <div className="quiz-option-letter">{String.fromCharCode(65 + idx)}</div>
                <div className="quiz-option-text">{opt}</div>
              </button>
            ))}
          </div>

          <div className="quiz-footer">
            <button 
              type="button"
              className="btn-secondary" 
              onClick={() => setCurrentIdx((prev: number) => Math.max(0, prev - 1))}
              disabled={currentIdx === 0}
            >
              ← Back
            </button>
            <button 
              type="button"
              className="btn-primary" 
              onClick={() => {
                if (currentIdx < activeQuizSequence.length - 1) {
                  setCurrentIdx((prev: number) => prev + 1);
                } else {
                  navigateTo('analysis');
                }
              }}
            >
              {currentIdx === activeQuizSequence.length - 1 ? 'Submit Assessment' : 'Next →'}
            </button>
          </div>
        </div>
      )}

    </section>
  );
}