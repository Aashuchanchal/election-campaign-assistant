import React, { useState } from 'react';
import { CheckCircle, Clock, ArrowRight, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

const stepsData = {
  voter: [
    {
      id: 'reg',
      title: 'Registration',
      description: 'Getting on the voter list',
      details: [
        { label: 'Who is eligible?', text: 'Usually citizens over 18 years old. Rules vary by region.' },
        { label: 'How to register', text: 'Online, by mail, or at local government offices.' },
        { label: 'Deadlines', text: 'Typically 15-30 days before election day. Check local dates.' }
      ],
      jargon: { word: 'Electoral Roll', meaning: 'The official list of people registered to vote.' }
    },
    {
      id: 'camp',
      title: 'Campaign Period',
      description: 'Evaluating your options',
      details: [
        { label: 'What happens?', text: 'Candidates hold rallies, debate, and share their platforms.' },
        { label: 'Evaluating Candidates', text: 'Look at their past voting records, proposed policies, and funding sources.' }
      ],
      jargon: { word: 'Platform', meaning: 'A formal set of principal goals supported by a political party or candidate.' }
    },
    {
      id: 'vote',
      title: 'Voting Day',
      description: 'Casting your ballot',
      details: [
        { label: 'Where to vote', text: 'At your assigned polling station (find it online).' },
        { label: 'What to bring', text: 'Valid photo ID or voter registration card.' },
        { label: 'How it works', text: 'You will receive a paper ballot or use an Electronic Voting Machine (EVM).' }
      ],
      jargon: { word: 'Constituency', meaning: 'Your local voting area that elects one or more representatives.' }
    },
    {
      id: 'count',
      title: 'Counting & Results',
      description: 'Finding out who won',
      details: [
        { label: 'How votes are counted', text: 'Ballots are secured and counted manually or electronically under supervision.' },
        { label: 'When results are announced', text: 'Preliminary results usually same day; official results take weeks.' }
      ],
      jargon: { word: 'Electoral College', meaning: '(In some systems) A group that officially selects the winner based on state/regional votes.' }
    }
  ],
  candidate: [
    {
      id: 'nom',
      title: 'Filing Nominations',
      description: 'Becoming an official candidate',
      details: [
        { label: 'Requirements', text: 'Age, citizenship, and residency requirements.' },
        { label: 'Paperwork', text: 'Filing declarations of assets and criminal records.' },
      ]
    },
    // More candidate steps...
  ]
};

const Journey = ({ role }) => {
  const [expandedStep, setExpandedStep] = useState('reg');
  const steps = stepsData[role] || stepsData.voter;

  return (
    <div className="animate-fade-in" style={{ padding: '2rem 0' }}>
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <BookOpen color="var(--primary-color)" />
          Your Step-by-Step Guide
        </h2>
        <p style={{ color: 'var(--text-muted)' }}>Follow these phases to navigate the election process confidently.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {steps.map((step, index) => {
          const isExpanded = expandedStep === step.id;
          
          return (
            <div 
              key={step.id}
              className="glass-panel"
              style={{ 
                padding: '1.5rem', 
                borderLeft: isExpanded ? '4px solid var(--primary-color)' : '4px solid transparent',
                transition: 'all var(--transition-normal)'
              }}
            >
              <div 
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                onClick={() => setExpandedStep(isExpanded ? null : step.id)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ 
                    width: '32px', height: '32px', 
                    borderRadius: '50%', 
                    background: isExpanded ? 'var(--primary-color)' : 'var(--surface-color)',
                    color: isExpanded ? 'white' : 'var(--text-muted)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 'bold'
                  }}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{step.title}</h3>
                    <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>{step.description}</p>
                  </div>
                </div>
                <button className="btn-icon">
                  {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>

              {isExpanded && (
                <div className="animate-fade-in" style={{ marginTop: '1.5rem', marginLeft: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                    {step.details.map((detail, idx) => (
                      <div key={idx} style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                        <h4 style={{ color: 'var(--primary-light)', marginBottom: '0.5rem', fontSize: '1rem' }}>{detail.label}</h4>
                        <p style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>{detail.text}</p>
                      </div>
                    ))}
                  </div>

                  {step.jargon && (
                    <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(139, 92, 246, 0.1)', borderLeft: '3px solid var(--accent-purple)', borderRadius: '0 var(--radius-md) var(--radius-md) 0' }}>
                      <strong style={{ color: '#A78BFA' }}>Decode Jargon: </strong>
                      <span style={{ fontWeight: '500' }}>{step.jargon.word}</span> — {step.jargon.meaning}
                    </div>
                  )}

                  <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
                     {index < steps.length - 1 && (
                        <button 
                          className="btn btn-primary"
                          onClick={(e) => { e.stopPropagation(); setExpandedStep(steps[index+1].id); }}
                        >
                          Next Phase <ArrowRight size={18} />
                        </button>
                     )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Journey;
