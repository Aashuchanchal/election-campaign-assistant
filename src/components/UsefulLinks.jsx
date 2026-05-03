import React from 'react';
import { ExternalLink, Link as LinkIcon, BarChart2, PieChart } from 'lucide-react';

const UsefulLinks = () => {
  const links = [
    {
      title: 'Apply for Voter Registration',
      description: 'Official portal to register to vote or update your details.',
      icon: <ExternalLink size={20} color="var(--primary-color)" />,
      url: '#registration-link'
    },
    {
      title: 'Live Polling Results',
      description: 'View real-time updates and counts on election day.',
      icon: <BarChart2 size={20} color="var(--secondary-color)" />,
      url: '#polling-results'
    },
    {
      title: 'Latest Survey & Exit Polls',
      description: 'Analyze the latest demographic surveys and trends.',
      icon: <PieChart size={20} color="var(--accent-purple)" />,
      url: '#survey-results'
    }
  ];

  return (
    <div className="glass-panel animate-slide-in-right" style={{ padding: '1.5rem', marginTop: '1.5rem', animationDelay: '0.2s' }}>
      <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
        <LinkIcon color="var(--primary-color)" />
        Important Links
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {links.map((link, idx) => (
          <a 
            key={idx} 
            href={link.url} 
            className="glass-panel-hover"
            style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: '1rem', 
              padding: '1rem', 
              background: 'var(--surface-color)', 
              borderRadius: 'var(--radius-md)',
              textDecoration: 'none',
              border: '1px solid var(--border-color)'
            }}
          >
            <div style={{ padding: '0.5rem', background: 'var(--bg-color)', borderRadius: 'var(--radius-sm)' }}>
              {link.icon}
            </div>
            <div>
              <div style={{ fontWeight: '500', color: 'var(--text-main)', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {link.title}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                {link.description}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default UsefulLinks;
