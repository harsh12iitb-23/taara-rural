import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { aptitudeQuestions, situationalQuestions } from '../data/skillData';

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

const DOMAIN_OPTIONS = [
  { value: "technology", label: "Technology" },
  { value: "agriculture", label: "Agriculture" },
  { value: "business", label: "Business" },
  { value: "teaching", label: "Teaching" },
  { value: "engineering", label: "Engineering" },
  { value: "healthcare", label: "Healthcare" },
  { value: "arts", label: "Arts" },
  { value: "media", label: "Media" }
];

export default function Assessment({ navigateTo }: AssessmentProps) {
  const [step, setStep] = useState<'form' | 'instructions' | 'likert' | 'quiz' | 'timeout'>('form');
  
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(['Hindi']);
  const [gender, setGender] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [familyOccupation, setFamilyOccupation] = useState('');
  const [canTravel, setCanTravel] = useState('');
  const [domainId, setDomainId] = useState('not_sure'); 

  const [likertScores, setLikertScores] = useState<Record<string, number>>({
    tech: 2, agri: 2, biz: 2, teach: 2, eng: 2, health: 2, arts: 2, media: 2
  });
  
  // NEW: Dual Section Management
  const [quizSection, setQuizSection] = useState<'aptitude' | 'situational'>('aptitude');
  const [currentIdx, setCurrentIdx] = useState(0);
  
  // Track answers separately so jumping between sections remembers progress
  const [answers, setAnswers] = useState<{ aptitude: Record<number, number>, situational: Record<number, number> }>({
    aptitude: {},
    situational: {}
  });

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('instructions'); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToLikert = () => {
    setStep('likert'); 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startQuiz = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setQuizSection('aptitude');
    setCurrentIdx(0); 
    setStep('quiz');
    // STRICT 20-MINUTE TIMER APPLIED HERE (Covers both sections)
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
      // NEW: Auto-submit when the 20 minutes are up!
      localStorage.setItem('taara_test_answers', JSON.stringify(answers));
      navigateTo('analysis');
    }
    return () => clearInterval(timer);
  }, [step, timeRemaining, answers, navigateTo]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Determine which array we are currently rendering
  const activeQuizSequence = quizSection === 'aptitude' ? aptitudeQuestions : situationalQuestions;
  const currentAnswers = answers[quizSection];

  const handleAnswerSelect = (optionIdx: number) => {
    setAnswers(prev => ({
      ...prev,
      [quizSection]: {
        ...prev[quizSection],
        [currentIdx]: optionIdx
      }
    }));
  };

  const handleNext = () => {
    if (currentIdx < activeQuizSequence.length - 1) {
      setCurrentIdx(prev => prev + 1);
    } else if (quizSection === 'aptitude') {
      setQuizSection('situational');
      setCurrentIdx(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // NEW: Save answers locally so the Analysis page can grade them
      localStorage.setItem('taara_test_answers', JSON.stringify(answers));
      navigateTo('analysis');
    }
  };

  const handlePrevious = () => {
    if (currentIdx > 0) {
      // Normal previous question
      setCurrentIdx(prev => prev - 1);
    } else if (quizSection === 'situational') {
      // Cross back to Aptitude Section
      setQuizSection('aptitude');
      setCurrentIdx(aptitudeQuestions.length - 1);
    }
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

          <form onSubmit={handleFormSubmit}>
            <div className="assessment-form-grid">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your full name" minLength={5} title="Name must be greater than 4 letters" required />
              </div>
              <div className="form-group">
                <label>Age (16-27)</label>
                <input type="number" className="form-control" placeholder="E.g. 21" min="16" max="27" required />
              </div>
              <div className="form-group">
                <label>Gender</label>
                <select className="form-control" value={gender} onChange={(e) => setGender(e.target.value)} required>
                  <option value="" disabled>Select Gender</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <input type="tel" className="form-control" placeholder="10-digit mobile number" pattern="[0-9]{10}" maxLength={10} title="Please enter a valid 10-digit mobile number" required />
              </div>
              <div className="form-group">
                <label>Education Qualification</label>
                <select className="form-control" value={educationLevel} onChange={(e) => setEducationLevel(e.target.value)} required>
                  <option value="" disabled>Select Education</option>
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
                <select className="form-control" value={familyOccupation} onChange={(e) => setFamilyOccupation(e.target.value)} required>
                  <option value="" disabled>Select Occupation</option>
                  <option value="Farming / Agriculture">Farming / Agriculture</option>
                  <option value="Agricultural Laborer">Agricultural Laborer</option>
                  <option value="Dairy / Animal Husbandry">Dairy / Livestock</option>
                  <option value="Handicrafts / Artisan">Handicrafts / Artisan</option>
                  <option value="Daily Wage / Construction">Daily Wage / Construction</option>
                  <option value="Small Shop / Retail">Small Shop / Retail</option>
                  <option value="Self-Employed Service">Self-Employed</option>
                  <option value="Government / Public Service">Government / Public Service</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Can travel outside village to study/work?</label>
                <select className="form-control" value={canTravel} onChange={(e) => setCanTravel(e.target.value)} required>
                  <option value="" disabled>Select Option</option>
                  <option value="Yes">Yes, I can travel</option>
                  <option value="No">No, I need local options</option>
                </select>
              </div>
              <div className="form-group">
                <label>Skill Domain</label>
                <select className="form-control" value={domainId} onChange={(e) => setDomainId(e.target.value)} required>
                  <option value="not_sure">NOT SURE</option>
                  {DOMAIN_OPTIONS.map((dom) => (
                    <option key={dom.value} value={dom.value}>{dom.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div style={{ marginTop: '24px', marginBottom: '32px' }}>
              <label style={{ fontWeight: 700, fontSize: '11.5px', color: 'var(--copperwood)', textTransform: 'uppercase' }}>
                Languages You Speak
              </label>
              <span style={{ fontSize: '12px', color: '#777', display: 'block', marginBottom: '12px' }}>
                Tap a language to select
              </span>
              <div className="lang-pills-container">
                {availableLanguages.map((lang: string) => {
                  const isDisabled = lang !== "Hindi";
                  return (
                    <button
                      key={lang}
                      type="button"
                      className={`lang-pill ${selectedLanguages.includes(lang) ? 'active' : ''}`}
                      onClick={() => !isDisabled && toggleLanguage(lang)}
                      disabled={isDisabled}
                      title={isDisabled ? "in progress" : ""}
                      style={isDisabled ? { opacity: 0.5, cursor: 'not-allowed', backgroundColor: '#f0f0f0', color: '#999' } : {}}
                    >
                      {lang}
                    </button>
                  );
                })}
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '36px' }}>
              <button type="submit" className="btn-primary" style={{ padding: '16px 56px' }}>
                Continue to Instructions →
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ─── STAGE 2: INSTRUCTIONS PAGE ─── */}
      {step === 'instructions' && (
        <div className="assessment-card animate-in visible" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '12px' }}>📋</div>
          <h2 className="section-heading" style={{ fontSize: '28px', marginBottom: '16px' }}>Before You Begin</h2>
          <p style={{ fontSize: '15px', color: '#666', marginBottom: '28px' }}>
            Please read the following instructions carefully to ensure the best experience.
          </p>
          <div style={{ background: '#FFFDF0', border: '1px solid rgba(188,108,37,0.25)', borderRadius: '14px', padding: '24px', textAlign: 'left', marginBottom: '32px' }}>
            <ul style={{ paddingLeft: '20px', color: 'var(--near-black)', fontSize: '15px', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '10px' }}>First, complete an untimed <strong>Interest Survey</strong>.</li>
              <li style={{ marginBottom: '10px' }}>Next, you will have <strong>20 minutes</strong> to answer all 45 questions.</li>
              <li style={{ marginBottom: '10px' }}>The test is split into an Aptitude section (30 questions) and a Situational Judgement section (15 questions).</li>
              <li>Once the timer runs out, the quiz will automatically lock and submit.</li>
            </ul>
          </div>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button type="button" className="btn-secondary" onClick={() => setStep('form')}>← Edit Details</button>
            <button type="button" className="btn-primary" onClick={goToLikert}>Start Interest Survey →</button>
          </div>
        </div>
      )}

      {/* ─── STAGE 3: LIKERT INTEREST SLIDER ─── */}
      {step === 'likert' && (
        <div className="assessment-card animate-in visible" style={{ maxWidth: '850px' }}>
          <div className="assessment-heading-wrap" style={{ margin: '0 auto 28px auto' }}>
            <h2 className="section-heading" style={{ fontSize: '32px', marginBottom: '8px' }}>Interest Discovery</h2>
            <p style={{ fontSize: '15px', color: '#666' }}>Adjust the slider on each statement according to what you enjoy doing most.</p>
          </div>
          <form onSubmit={startQuiz}>
            {LIKERT_STATEMENTS.map((item) => (
              <div key={item.id} className="likert-card-item">
                <span className="likert-domain-tag">{item.domain}</span>
                <p className="likert-statement">"{item.text}"</p>
                <input type="range" min="0" max="4" step="1" className="likert-slider-track" value={likertScores[item.id]} onChange={(e) => handleLikertChange(item.id, parseInt(e.target.value))} />
                <div className="likert-scale-labels">
                  <span>Strongly Dislike</span><span>Dislike</span><span>Neutral</span><span>Like</span><span>Strongly Like</span>
                </div>
                <div className="likert-badge-selected">Selected: <u>{LIKERT_OPTIONS[likertScores[item.id]]}</u></div>
              </div>
            ))}
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '36px' }}>
              <button type="button" className="btn-secondary" onClick={() => setStep('instructions')}>← Back</button>
              <button type="submit" className="btn-primary">Start Aptitude Test ⏱</button>
            </div>
          </form>
        </div>
      )}

      {/* ─── STAGE 4: TIMED QUIZ WITH PORTAL SIDEBAR ─── */}
      {step === 'quiz' && (
        <div className="animate-in visible">
          
          {/* REACT PORTAL SIDEBAR */}
          {createPortal(
            <div className="quiz-sidebar-portal">
              
              {/* Section Tabs in Sidebar */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                <button 
                  onClick={() => { setQuizSection('aptitude'); setCurrentIdx(0); }}
                  style={{ flex: 1, padding: '8px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold', border: 'none', cursor: 'pointer', background: quizSection === 'aptitude' ? 'var(--copperwood)' : 'rgba(255,255,255,0.1)', color: '#fff' }}
                >
                  Aptitude (30)
                </button>
                <button 
                  onClick={() => { setQuizSection('situational'); setCurrentIdx(0); }}
                  style={{ flex: 1, padding: '8px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold', border: 'none', cursor: 'pointer', background: quizSection === 'situational' ? 'var(--copperwood)' : 'rgba(255,255,255,0.1)', color: '#fff' }}
                >
                  SJT (15)
                </button>
              </div>

              <div className="timer-box">⏱ {formatTime(timeRemaining)}</div>
              
              <p>Click to jump to a question:</p>
              
              <div className="quiz-nav-grid-portal">
                {activeQuizSequence.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`quiz-nav-btn-portal ${currentAnswers[idx] !== undefined ? 'answered' : ''} ${currentIdx === idx ? 'active' : ''}`}
                    onClick={() => setCurrentIdx(idx)}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>,
            document.body
          )}

          {/* Main Question View */}
          <div className="assessment-card" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {!activeQuizSequence || activeQuizSequence.length === 0 || !activeQuizSequence[currentIdx] ? (
              <div style={{ textAlign: 'center', padding: '40px' }}>Loading questions...</div>
            ) : (
              <>
                <div className="quiz-header" style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: '16px' }}>
                  <div>
                    <span style={{ fontSize: '13.5px', color: '#666', fontWeight: 'bold' }}>
                      {quizSection === 'aptitude' ? 'APTITUDE SECTION' : 'SJT SECTION'} — Question {currentIdx + 1} of {activeQuizSequence.length}
                    </span>
                    <h2 style={{ fontSize: '18px', marginTop: '6px' }}>
                      Category: {activeQuizSequence[currentIdx].skillName}
                    </h2>
                  </div>
                </div>

                <div className="quiz-progress-track">
                  <div className="quiz-progress-fill" style={{ width: `${((currentIdx + 1) / activeQuizSequence.length) * 100}%` }}></div>
                </div>

                <p className="quiz-question-text" style={{ fontSize: '18px' }}>{activeQuizSequence[currentIdx].question}</p>

                <div className="quiz-options-stack">
                  {activeQuizSequence[currentIdx].options.map((opt: string, idx: number) => (
                    <button
                      key={idx}
                      type="button"
                      className={`quiz-option ${currentAnswers[currentIdx] === idx ? 'selected' : ''}`}
                      onClick={() => handleAnswerSelect(idx)}
                    >
                      <div className="quiz-option-letter">{String.fromCharCode(65 + idx)}</div>
                      <div className="quiz-option-text">{opt}</div>
                    </button>
                  ))}
                </div>
              </>
            )}

            <div className="quiz-footer" style={{ marginTop: '32px' }}>
              <button 
                type="button"
                className="btn-secondary" 
                onClick={handlePrevious}
                disabled={quizSection === 'aptitude' && currentIdx === 0}
              >
                ← Previous
              </button>
              <button 
                type="button"
                className="btn-primary" 
                onClick={handleNext}
              >
                {quizSection === 'situational' && currentIdx === activeQuizSequence.length - 1 ? 'Submit Assessment' : 'Next →'}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}