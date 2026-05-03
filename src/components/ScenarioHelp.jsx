import React, { useState } from 'react';
import { HelpCircle, ChevronRight } from 'lucide-react';

const scenarios = [
  { q: "I missed registration—can I still vote?", a: "In some regions with 'Same-Day Registration', yes! You'll need to bring valid proof of residence (like a utility bill) and ID to the polling place. If your region doesn't support this, you unfortunately cannot vote in this election." },
  { q: "What if my name isn't on the voter list?", a: "First, check if you are at the correct polling location. If you are, ask for a 'Provisional Ballot'. This allows you to vote now, and officials will verify your eligibility later before counting it." },
  { q: "Can I vote if I'm abroad?", a: "Yes, usually via an Absentee Ballot. You must request this ballot well in advance (often 30+ days before the election), fill it out, and mail it back so it arrives before the deadline." }
];

const ScenarioHelp = () => {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <div className="glass-panel animate-slide-in-right" style={{ padding: '1.5rem', marginTop: '1.5rem', animationDelay: '0.1s' }}>
      <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
        <HelpCircle color="var(--accent-pink)" />
        Scenario Help
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {scenarios.map((scenario, idx) => (
          <div key={idx} style={{ background: 'var(--surface-color)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            <button 
              style={{ width: '100%', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', color: 'var(--text-main)', background: activeIdx === idx ? 'rgba(236, 72, 153, 0.1)' : 'transparent' }}
              onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
            >
              <span style={{ fontWeight: '500' }}>{scenario.q}</span>
              <ChevronRight size={18} style={{ transform: activeIdx === idx ? 'rotate(90deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
            </button>
            
            {activeIdx === idx && (
              <div style={{ padding: '0 1rem 1rem 1rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                <div style={{ padding: '1rem', background: 'var(--bg-color)', borderRadius: 'var(--radius-sm)', borderLeft: '3px solid var(--accent-pink)' }}>
                  {scenario.a}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScenarioHelp;
