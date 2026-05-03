import React from 'react';
import { Calendar, AlertCircle } from 'lucide-react';

const Timeline = () => {
  const events = [
    { days: -30, label: 'Voter Registration Deadline', active: false },
    { days: -15, label: 'Early Voting Begins', active: false },
    { days: -7, label: 'Deadline to request Mail Ballot', active: true, warning: true },
    { days: 0, label: 'Election Day', active: true, primary: true },
    { days: 7, label: 'Official Results Certified', active: false }
  ];

  return (
    <div className="glass-panel animate-slide-in-right" style={{ padding: '1.5rem', height: '100%' }}>
      <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
        <Calendar color="var(--accent-blue)" />
        Interactive Timeline
      </h3>

      <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
        {/* Vertical Line */}
        <div style={{ position: 'absolute', left: '7px', top: '10px', bottom: '10px', width: '2px', background: 'var(--border-color)' }}></div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {events.map((event, idx) => (
            <div key={idx} style={{ position: 'relative', opacity: event.active ? 1 : 0.6 }}>
              {/* Node */}
              <div style={{ 
                position: 'absolute', 
                left: '-1.5rem', 
                top: '4px',
                width: '16px', 
                height: '16px', 
                borderRadius: '50%', 
                background: event.primary ? 'var(--primary-color)' : (event.active ? 'var(--accent-blue)' : 'var(--surface-color)'),
                border: `2px solid ${event.primary ? 'var(--primary-light)' : 'var(--bg-color)'}`,
                zIndex: 1,
                boxShadow: event.primary ? '0 0 10px var(--primary-color)' : 'none'
              }}></div>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontWeight: '600', color: event.primary ? 'var(--primary-light)' : 'var(--text-main)' }}>
                    {event.label}
                  </div>
                  {event.warning && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--accent-yellow)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
                      <AlertCircle size={14} /> Approaching soon!
                    </div>
                  )}
                </div>
                <div className={`tag ${event.days === 0 ? 'tag-purple' : 'tag-blue'}`} style={{ whiteSpace: 'nowrap' }}>
                  {event.days === 0 ? 'Today' : (event.days < 0 ? `T${event.days} Days` : `T+${event.days} Days`)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="btn btn-secondary" style={{ width: '100%', marginTop: '2rem' }}>
        Sync to Calendar
      </button>
    </div>
  );
};

export default Timeline;
