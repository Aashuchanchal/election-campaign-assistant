'use client';

import React, { useState } from 'react';
import RoleSelector from '../components/RoleSelector';
import Journey from '../components/Journey';
import Timeline from '../components/Timeline';
import ScenarioHelp from '../components/ScenarioHelp';
import QuickQA from '../components/QuickQA';
import UsefulLinks from '../components/UsefulLinks';
import { ArrowLeft } from 'lucide-react';

function App() {
  const [role, setRole] = useState(null);

  const handleReset = () => setRole(null);

  return (
    <div className="app-layout">
      {/* Header */}
      <header style={{ padding: '1.5rem', background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--border-color)', position: 'sticky', top: 0, zIndex: 10 }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold', fontSize: '1.2rem', color: 'white' }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '4px', background: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✓</div>
            ElectionAssistant
          </div>
          
          {role && (
            <button className="btn btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }} onClick={handleReset}>
              <ArrowLeft size={16} /> Change Role
            </button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content container">
        {!role ? (
          <RoleSelector onSelectRole={setRole} />
        ) : (
          <div className="animate-fade-in" style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '2rem', alignItems: 'start' }}>
            {/* Left Column - Journey */}
            <div style={{ paddingRight: '1rem' }}>
              <div style={{ marginBottom: '2rem' }}>
                <div className="tag tag-purple" style={{ marginBottom: '0.5rem' }}>
                  {role.charAt(0).toUpperCase() + role.slice(1)} Mode
                </div>
                <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Your Election Guide</h1>
              </div>
              
              <Journey role={role} />
            </div>

            {/* Right Column - Sidebar */}
            <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '1.5rem', height: 'calc(100vh - 120px)', overflowY: 'auto', paddingBottom: '2rem' }} className="scroll-hide">
              <Timeline />
              <UsefulLinks />
              <ScenarioHelp />
            </div>
          </div>
        )}
      </main>

      {/* Floating Q&A Layer */}
      <QuickQA />
    </div>
  );
}

export default App;
