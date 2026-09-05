import { useEffect, useState } from 'react';
import { aptitudeQuestions, situationalQuestions } from '../data/skillData';

interface ReportProps {
  navigateTo: (page: string) => void;
}

export default function Report({ navigateTo }: ReportProps) {
  const [stats, setStats] = useState({
    totalValid: 0,
    attempted: 0,
    correct: 0,
    attemptRate: 0,
    scoreRate: 0
  });

  useEffect(() => {
    // Retrieve the saved answers from the Assessment page
    const savedData = localStorage.getItem('taara_test_answers');

    if (!savedData) return;

    const userAnswers = JSON.parse(savedData);

    let totalValid = 0;
    let attempted = 0;
    let correct = 0;

    // Core Grading Logic Engine
    const processQuestions = (
      questions: any[],
      sectionKey: 'aptitude' | 'situational'
    ) => {
      questions.forEach((q, idx) => {
        // Exclude questions that do not have a defined correct answer
        if (q.correctIdx !== undefined && q.correctIdx !== null) {
          totalValid++;

          const userAnswer = userAnswers[sectionKey]?.[idx];

          // Check if the user attempted it
          if (userAnswer !== undefined) {
            attempted++;

            // Give 1 mark for a correct attempt
            if (userAnswer === q.correctIdx) {
              correct++;
            }
          }
        }
      });
    };

    // Run grading on both arrays
    processQuestions(aptitudeQuestions, 'aptitude');
    processQuestions(situationalQuestions, 'situational');

    // Calculate exact percentages
    setStats({
      totalValid,
      attempted,
      correct,
      attemptRate:
        totalValid > 0
          ? Math.round((attempted / totalValid) * 100)
          : 0,
      scoreRate:
        totalValid > 0
          ? Math.round((correct / totalValid) * 100)
          : 0
    });
  }, []);

  return (
    <section className="assessment-section animate-in visible">
      <div
        className="assessment-card"
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '48px 24px'
        }}
      >
        <div style={{ fontSize: '56px', marginBottom: '16px' }}>
          📊
        </div>

        <h2
          className="section-heading"
          style={{ fontSize: '32px', marginBottom: '8px' }}
        >
          Assessment Analysis
        </h2>

        <p
          style={{
            fontSize: '15px',
            color: '#666',
            marginBottom: '40px'
          }}
        >
          Here is the breakdown of your performance across all valid questions.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '48px'
          }}
        >
          {/* Card 1: Percentage Attempted */}
          <div
            style={{
              background: '#FFFDF0',
              border: '1.5px solid #ede8d5',
              borderRadius: '16px',
              padding: '32px'
            }}
          >
            <h3
              style={{
                fontFamily: "'Baloo 2', sans-serif",
                fontSize: '16px',
                color: '#666',
                textTransform: 'uppercase',
                margin: '0 0 12px 0',
                letterSpacing: '0.5px'
              }}
            >
              Questions Attempted
            </h3>

            <div
              style={{
                fontSize: '54px',
                fontWeight: 'bold',
                color: 'var(--copperwood)',
                lineHeight: '1'
              }}
            >
              {stats.attemptRate}%
            </div>

            <p
              style={{
                margin: '16px 0 0 0',
                fontSize: '15px',
                color: '#777',
                fontWeight: 'bold'
              }}
            >
              You answered {stats.attempted} out of {stats.totalValid} questions.
            </p>
          </div>

          {/* Card 2: Percentage Correct */}
          <div
            style={{
              background: '#FFFDF0',
              border: '1.5px solid #ede8d5',
              borderRadius: '16px',
              padding: '32px'
            }}
          >
            <h3
              style={{
                fontFamily: "'Baloo 2', sans-serif",
                fontSize: '16px',
                color: '#666',
                textTransform: 'uppercase',
                margin: '0 0 12px 0',
                letterSpacing: '0.5px'
              }}
            >
              Questions Correct
            </h3>

            <div
              style={{
                fontSize: '54px',
                fontWeight: 'bold',
                color: 'var(--olive-leaf)',
                lineHeight: '1'
              }}
            >
              {stats.scoreRate}%
            </div>

            <p
              style={{
                margin: '16px 0 0 0',
                fontSize: '15px',
                color: '#777',
                fontWeight: 'bold'
              }}
            >
              You got {stats.correct} out of {stats.totalValid} correct.
            </p>
          </div>
        </div>

        <div
          style={{
            borderTop: '1.5px solid rgba(188,108,37,0.1)',
            paddingTop: '40px'
          }}
        >
          {/* Download Analysis Button */}
          <a
            href="/analysis-report.pdf"
            download="TAARA-Career-Analysis.pdf"
            style={{
              textDecoration: 'none',
              display: 'inline-block',
              marginRight: '16px'
            }}
          >
            <button
              className="btn-primary"
              style={{
                padding: '16px 36px',
                fontSize: '15px'
              }}
            >
              📄 Download Analysis
            </button>
          </a>

          {/* Return to Home Button */}
          <button
            className="btn-primary"
            onClick={() => {
              localStorage.removeItem('taara_test_answers');
              navigateTo('home');
            }}
            style={{
              padding: '16px 36px',
              fontSize: '15px'
            }}
          >
            Return to Home Dashboard
          </button>
        </div>
      </div>
    </section>
  );
}