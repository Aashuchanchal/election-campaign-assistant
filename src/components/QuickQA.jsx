import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Zap, CheckSquare, Clock, Send, Bot } from 'lucide-react';

const QuickQA = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('chat'); // 'chat', '10s', 'checklist'
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi there! I am your Election Assistant. Ask me anything about voting, registration, or polling results.' }
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (activeTab === 'chat') {
      scrollToBottom();
    }
  }, [messages, activeTab, isOpen]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: 'user', text: chatInput }];
    setMessages(newMessages);
    setChatInput('');

    // Simulate bot response based on keywords
    setTimeout(() => {
      let botResponse = "I'm still learning! But you can find more information in the Journey or Scenarios sections.";
      const lowerInput = chatInput.toLowerCase();
      
      if (lowerInput.includes('register') || lowerInput.includes('apply')) {
        botResponse = "You can register to vote online or at your local election office. Check the 'Quick Links' section on the dashboard for a direct link!";
      } else if (lowerInput.includes('result') || lowerInput.includes('poll')) {
        botResponse = "Live polling and survey results are available in the 'Important Links' section on the right side of your dashboard.";
      } else if (lowerInput.includes('when') || lowerInput.includes('date') || lowerInput.includes('deadline')) {
        botResponse = "Check the Interactive Timeline on your dashboard for all important upcoming deadlines and dates.";
      } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        botResponse = "Hello! How can I help you prepare for the upcoming election today?";
      }

      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    }, 1000);
  };

  if (!isOpen) {
    return (
      <button 
        className="btn-primary animate-scale-in"
        style={{ 
          position: 'fixed', bottom: '2rem', right: '2rem', 
          width: '60px', height: '60px', borderRadius: '50%', 
          padding: 0, boxShadow: '0 10px 25px rgba(79, 70, 229, 0.5)',
          zIndex: 100
        }}
        onClick={() => setIsOpen(true)}
      >
        <MessageSquare size={24} />
      </button>
    );
  }

  return (
    <div 
      className="glass-panel animate-scale-in"
      style={{ 
        position: 'fixed', bottom: '2rem', right: '2rem', 
        width: '350px', height: '500px', 
        display: 'flex', flexDirection: 'column',
        zIndex: 100, overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
      }}
    >
      {/* Header */}
      <div style={{ padding: '1rem', background: 'rgba(0,0,0,0.2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)' }}>
        <h3 style={{ margin: 0, fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Zap size={18} color="var(--accent-yellow)" /> Quick Answers
        </h3>
        <button className="btn-icon" style={{ padding: '0.25rem' }} onClick={() => setIsOpen(false)}>
          <X size={18} />
        </button>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)' }}>
        <button 
          style={{ flex: 1, padding: '0.75rem', background: activeTab === 'chat' ? 'var(--surface-color)' : 'transparent', color: activeTab === 'chat' ? 'var(--primary-light)' : 'var(--text-muted)', borderBottom: activeTab === 'chat' ? '2px solid var(--primary-color)' : '2px solid transparent', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.4rem' }}
          onClick={() => setActiveTab('chat')}
        >
          <Bot size={16} /> Chat
        </button>
        <button 
          style={{ flex: 1, padding: '0.75rem', background: activeTab === '10s' ? 'var(--surface-color)' : 'transparent', color: activeTab === '10s' ? 'var(--primary-light)' : 'var(--text-muted)', borderBottom: activeTab === '10s' ? '2px solid var(--primary-color)' : '2px solid transparent' }}
          onClick={() => setActiveTab('10s')}
        >
          Explain in 10s
        </button>
        <button 
          style={{ flex: 1, padding: '0.75rem', background: activeTab === 'checklist' ? 'var(--surface-color)' : 'transparent', color: activeTab === 'checklist' ? 'var(--primary-light)' : 'var(--text-muted)', borderBottom: activeTab === 'checklist' ? '2px solid var(--primary-color)' : '2px solid transparent' }}
          onClick={() => setActiveTab('checklist')}
        >
          Checklist
        </button>
      </div>

      {/* Content */}
      <div className="scroll-hide" style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
        
        {activeTab === 'chat' && (
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ 
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                background: msg.role === 'user' ? 'var(--primary-color)' : 'var(--surface-color)',
                color: msg.role === 'user' ? 'white' : 'var(--text-main)',
                padding: '0.75rem 1rem',
                borderRadius: msg.role === 'user' ? 'var(--radius-lg) var(--radius-lg) 0 var(--radius-lg)' : 'var(--radius-lg) var(--radius-lg) var(--radius-lg) 0',
                maxWidth: '85%',
                fontSize: '0.95rem'
              }}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
        
        {activeTab === '10s' && (
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ background: 'var(--surface-color)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontWeight: '500', marginBottom: '0.5rem', color: 'var(--accent-blue)' }}>Q: What is an Absentee Ballot?</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>A: A ballot you fill out and mail in if you cannot go to the polling place on election day.</div>
            </div>
            <div style={{ background: 'var(--surface-color)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontWeight: '500', marginBottom: '0.5rem', color: 'var(--accent-blue)' }}>Q: What is a Primary Election?</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-main)' }}>A: An election where political parties choose who their main candidate will be for the final election.</div>
            </div>
          </div>
        )}

        {activeTab === 'checklist' && (
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem', background: 'var(--surface-color)', borderRadius: 'var(--radius-md)' }}>
              <CheckSquare size={18} color="var(--secondary-color)" style={{ flexShrink: 0, marginTop: '0.1rem' }} />
              <div>
                <div style={{ fontWeight: '500', fontSize: '0.95rem' }}>Verify Registration</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Check online if your name is on the electoral roll.</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem', background: 'var(--surface-color)', borderRadius: 'var(--radius-md)' }}>
              <CheckSquare size={18} color="var(--secondary-color)" style={{ flexShrink: 0, marginTop: '0.1rem' }} />
              <div>
                <div style={{ fontWeight: '500', fontSize: '0.95rem' }}>Find Polling Station</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Note down the address and timings.</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem', background: 'var(--surface-color)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ width: '18px', height: '18px', border: '2px solid var(--text-muted)', borderRadius: '4px', flexShrink: 0, marginTop: '0.1rem' }}></div>
              <div>
                <div style={{ fontWeight: '500', fontSize: '0.95rem' }}>Prepare ID</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Keep your Government ID or Voter Card ready.</div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Input area */}
      {activeTab === 'chat' && (
        <div style={{ padding: '1rem', borderTop: '1px solid var(--border-color)', background: 'var(--surface-color)' }}>
          <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '0.5rem' }}>
            <input 
              type="text" 
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Ask anything..." 
              style={{ flex: 1, padding: '0.75rem 1rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)', background: 'var(--bg-color)', color: 'white', outline: 'none' }}
            />
            <button type="submit" className="btn-primary" style={{ padding: '0.75rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '42px', height: '42px' }}>
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default QuickQA;
