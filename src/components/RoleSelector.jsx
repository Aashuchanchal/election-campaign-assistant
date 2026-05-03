import React from 'react';
import { User, Briefcase, Eye, Globe } from 'lucide-react';

const RoleSelector = ({ onSelectRole }) => {
  return (
    <div className="container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem' }} className="animate-fade-in">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }} className="tag tag-purple">
          <Globe size={14} /> Global Edition
        </div>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
          Your <span className="text-gradient">Election</span> Journey
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
          Let's make democracy simple. Tell us who you are so we can personalize your guide.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', width: '100%', maxWidth: '1000px' }}>
        
        {/* Voter Card */}
        <button 
          className="glass-panel glass-panel-hover animate-scale-in" 
          style={{ padding: '2.5rem 2rem', textAlign: 'left', animationDelay: '0.1s', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}
          onClick={() => onSelectRole('voter')}
        >
          <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(79, 70, 229, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#818CF8' }}>
            <User size={32} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>I'm a Voter</h3>
            <p style={{ color: 'var(--text-muted)' }}>Learn how to register, where to vote, and understand your ballot.</p>
          </div>
          <div className="tag tag-blue" style={{ marginTop: 'auto' }}>Most Common</div>
        </button>

        {/* Candidate Card */}
        <button 
          className="glass-panel glass-panel-hover animate-scale-in" 
          style={{ padding: '2.5rem 2rem', textAlign: 'left', animationDelay: '0.2s', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}
          onClick={() => onSelectRole('candidate')}
        >
          <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(245, 158, 11, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FBBF24' }}>
            <Briefcase size={32} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>I'm a Candidate</h3>
            <p style={{ color: 'var(--text-muted)' }}>Navigate filing, campaign rules, and compliance requirements.</p>
          </div>
        </button>

        {/* Observer Card */}
        <button 
          className="glass-panel glass-panel-hover animate-scale-in" 
          style={{ padding: '2.5rem 2rem', textAlign: 'left', animationDelay: '0.3s', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'flex-start' }}
          onClick={() => onSelectRole('observer')}
        >
          <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34D399' }}>
            <Eye size={32} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>I'm an Observer</h3>
            <p style={{ color: 'var(--text-muted)' }}>Understand monitoring protocols and how to report issues.</p>
          </div>
        </button>

      </div>
    </div>
  );
};

export default RoleSelector;
