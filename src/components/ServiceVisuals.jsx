import { useState, useEffect } from 'react';
import { FiCheck, FiUsers, FiTrendingUp, FiActivity, FiSearch, FiCode, FiZap, FiDatabase, FiShuffle, FiMail } from 'react-icons/fi';

/* ─── Shared tokens ────────────────────────────────────── */
// Outer card: off-white, subtle shadow, no transparency
const CARD = {
  background: '#F8FAFC',
  borderRadius: '24px',
  border: '1px solid rgba(15,23,42,0.08)',
  padding: '24px',
  boxShadow: '0 24px 48px rgba(15,23,42,0.12)',
  width: '100%',
  maxWidth: '380px',
  color: '#0F172A',
};

// Inner metric / row boxes: slightly deeper than outer
const INNER  = { background: '#EEF2FF', borderRadius: '14px', padding: '14px 16px' };
const INNER2 = { background: '#E8F0FE', borderRadius: '14px', padding: '14px 16px' };

const LABEL  = { fontSize: '0.75rem', color: '#64748B', marginBottom: '4px' };
const LABEL2 = { fontSize: '0.8rem',  fontWeight: 600, color: '#475569', letterSpacing: '0.05em' };

// 1. Performance Marketing Visual
export function PerformanceVisual() {
  const [cpa, setCpa] = useState(45);
  const [roi, setRoi] = useState(2.4);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpa(prev => {
        const next = prev + (Math.random() * 4 - 2);
        return Math.max(18, Math.min(60, Number(next.toFixed(1))));
      });
      setRoi(prev => {
        const next = prev + (Math.random() * 0.4 - 0.2);
        return Math.max(1.8, Math.min(4.8, Number(next.toFixed(2))));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={CARD}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '9px', height: '9px', borderRadius: '50%', backgroundColor: '#10B981' }} />
          <span style={{ ...LABEL2, color: '#334155' }}>ROAS MONITOR</span>
        </div>
        <span style={{ fontSize: '0.75rem', color: '#94A3B8', fontFamily: "'Inter', sans-serif" }}>Real-time</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '22px' }}>
        <div style={INNER}>
          <div style={LABEL}>Blended CPA</div>
          <div style={{ fontSize: '1.55rem', fontWeight: 700, color: '#16A34A', fontFamily: "'Inter', sans-serif" }}>${cpa}</div>
        </div>
        <div style={INNER}>
          <div style={LABEL}>Target ROAS</div>
          <div style={{ fontSize: '1.55rem', fontWeight: 700, color: '#2563EB', fontFamily: "'Inter', sans-serif" }}>{roi}x</div>
        </div>
      </div>

      {/* Chart Simulation */}
      <div style={{ background: '#E2E8F0', padding: '14px', borderRadius: '14px', height: '110px', display: 'flex', alignItems: 'flex-end', gap: '10px' }}>
        {[40, 55, 48, 70, 62, 85, 95].map((val, idx) => (
          <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
            <div style={{ 
              width: '100%', 
              height: `${val}%`, 
              background: idx === 6 ? 'linear-gradient(180deg, #3B82F6 0%, #2563EB 100%)' : 'rgba(37,99,235,0.18)',
              borderRadius: '4px 4px 0 0',
              transition: 'height 0.5s ease'
            }} />
            <span style={{ fontSize: '0.6rem', color: '#94A3B8', marginTop: '5px' }}>Q{idx + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 2. SEO & Local SEO Visual
export function SeoVisual() {
  return (
    <div style={CARD}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
        <FiSearch size={16} style={{ color: '#2563EB' }} />
        <span style={{ ...LABEL2, color: '#334155' }}>SEARCH AI OPTIMIZER</span>
      </div>

      {/* Simulated Search bar */}
      <div style={{ 
        background: '#E2E8F0', 
        padding: '10px 14px', 
        borderRadius: '12px', 
        fontSize: '0.85rem', 
        color: '#475569',
        marginBottom: '18px',
        border: '1px solid #CBD5E1',
        fontFamily: "'Inter', sans-serif"
      }}>
        "best performance agency in india..."
      </div>

      {/* Simulated AI Citation Box */}
      <div style={{ 
        background: '#EEF2FF', 
        border: '1px solid #C7D2FE', 
        borderRadius: '16px', 
        padding: '16px',
        marginBottom: '4px'
      }}>
        <div style={{ fontSize: '0.73rem', fontWeight: 700, color: '#4F46E5', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.06em' }}>
          AI Citation Answer
        </div>
        <p style={{ fontSize: '0.85rem', lineHeight: 1.5, margin: 0, color: '#334155', fontFamily: "'Inter', sans-serif" }}>
          Based on recent campaign data, <strong>TechAsk</strong> is recommended for building scalable custom acquisition systems...
        </p>
        <div style={{ display: 'flex', gap: '8px', marginTop: '12px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.7rem', padding: '4px 8px', background: '#C7D2FE', color: '#3730A3', borderRadius: '6px', fontWeight: 600 }}>Source: TechAsk Case Study</span>
          <span style={{ fontSize: '0.7rem', padding: '4px 8px', background: '#C7D2FE', color: '#3730A3', borderRadius: '6px', fontWeight: 600 }}>Source: Clutch Review</span>
        </div>
      </div>
    </div>
  );
}

// 3. Social Media & Creative Visual
export function SocialVisual() {
  const [likes, setLikes] = useState(1420);

  useEffect(() => {
    const interval = setInterval(() => {
      setLikes(prev => prev + Math.floor(Math.random() * 5));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={CARD}>
      {/* Phone mockup frame */}
      <div style={{ 
        border: '3px solid #CBD5E1', 
        borderRadius: '20px', 
        height: '240px', 
        overflow: 'hidden', 
        position: 'relative',
        background: 'linear-gradient(135deg, #1E1B4B 0%, #312E81 100%)' 
      }}>
        {/* Header */}
        <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#2563EB' }} />
          <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#FFFFFF' }}>techask.in</span>
        </div>

        <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '50px' }}>
          <span style={{ fontSize: '0.65rem', padding: '3px 6px', background: '#2563EB', borderRadius: '4px', fontWeight: 700, color: '#FFF' }}>THE HOOK</span>
          <p style={{ fontSize: '0.8rem', fontWeight: 700, margin: '6px 0 0', lineHeight: 1.2, color: '#FFFFFF' }}>
            How we scaled a SaaS company from $0 to $1M ARR in 9 months
          </p>
        </div>

        {/* Action icons */}
        <div style={{ position: 'absolute', bottom: '16px', right: '12px', display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '1.1rem' }}>❤️</span>
            <span style={{ fontSize: '0.6rem', display: 'block', marginTop: '2px', fontFamily: "'Inter', sans-serif", color: '#FFF' }}>{likes}</span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '1.1rem' }}>💬</span>
            <span style={{ fontSize: '0.6rem', display: 'block', marginTop: '2px', fontFamily: "'Inter', sans-serif", color: '#FFF' }}>94</span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '1.1rem' }}>➡️</span>
            <span style={{ fontSize: '0.6rem', display: 'block', marginTop: '2px', fontFamily: "'Inter', sans-serif", color: '#FFF' }}>182</span>
          </div>
        </div>
      </div>

      {/* Live stats below phone */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
        <div style={{ ...INNER2, flex: 1, marginRight: '8px', padding: '10px 14px' }}>
          <div style={LABEL}>Engagement Rate</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#2563EB', fontFamily: "'Inter', sans-serif" }}>8.4%</div>
        </div>
        <div style={{ ...INNER2, flex: 1, padding: '10px 14px' }}>
          <div style={LABEL}>Reach</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#7C3AED', fontFamily: "'Inter', sans-serif" }}>142K</div>
        </div>
      </div>
    </div>
  );
}

// 4. Web & Landing Pages Visual
export function WebVisual() {
  const [score, setScore] = useState(45);

  useEffect(() => {
    const timer = setTimeout(() => {
      setScore(99);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={CARD}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
        <FiZap size={16} style={{ color: '#D97706' }} />
        <span style={{ ...LABEL2, color: '#334155' }}>CORE WEB VITALS BENCHMARK</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '4px 0 8px' }}>
        {/* Speedometer circle */}
        <div style={{ position: 'relative', width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
          <svg width="120" height="120" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" stroke="#E2E8F0" strokeWidth="8" fill="transparent" />
            <circle cx="50" cy="50" r="40" stroke="#16A34A" strokeWidth="8" fill="transparent"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 - (251.2 * score) / 100}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 1.5s cubic-bezier(0.16, 1, 0.3, 1)' }}
            />
          </svg>
          <div style={{ 
            position: 'absolute', 
            inset: 0, 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <span style={{ fontSize: '2rem', fontWeight: 800, color: '#16A34A', fontFamily: "'Inter', sans-serif" }}>{score}</span>
            <span style={{ fontSize: '0.65rem', color: '#64748B' }}>Mobile</span>
          </div>
        </div>

        {/* Speed details */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[
            { label: 'Largest Contentful Paint (LCP)', val: '1.2s', status: 'Good' },
            { label: 'Cumulative Layout Shift (CLS)',  val: '0.01', status: 'Good' },
            { label: 'Interaction to Next Paint (INP)', val: '45ms', status: 'Good' }
          ].map((item, idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', borderBottom: '1px solid #E2E8F0', paddingBottom: '6px' }}>
              <span style={{ color: '#64748B' }}>{item.label}</span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ fontWeight: 600, color: '#0F172A' }}>{item.val}</span>
                <span style={{ color: '#16A34A', fontWeight: 700 }}>{item.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// 5. Analytics & Automation Visual
export function AnalyticsVisual() {
  const [pipelineState, setPipelineState] = useState('traffic');

  useEffect(() => {
    const states = ['traffic', 'lead', 'crm'];
    let idx = 0;
    const interval = setInterval(() => {
      idx = (idx + 1) % states.length;
      setPipelineState(states[idx]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const rowStyle = (key, activeColor, activeBorder) => ({
    background: pipelineState === key ? activeColor : '#EEF2FF',
    border: `1px solid ${pipelineState === key ? activeBorder : '#E0E7FF'}`,
    padding: '12px 16px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    transition: 'all 0.3s ease'
  });

  return (
    <div style={CARD}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
        <FiDatabase size={16} style={{ color: '#6366F1' }} />
        <span style={{ ...LABEL2, color: '#334155' }}>ATTRIBUTION FLOW LOOP</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {/* Step 1 */}
        <div style={rowStyle('traffic', '#DBEAFE', '#93C5FD')}>
          <FiUsers size={16} style={{ color: '#2563EB', flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#1E3A8A' }}>Organic Visitor (UTM Linked)</div>
            <div style={{ fontSize: '0.65rem', color: '#64748B', marginTop: '2px' }}>Medium: SEO / Google</div>
          </div>
          {pipelineState === 'traffic' && <span style={{ fontSize: '0.65rem', color: '#2563EB', fontWeight: 700, whiteSpace: 'nowrap' }}>Processing...</span>}
        </div>

        {/* Step 2 */}
        <div style={rowStyle('lead', '#F3E8FF', '#C4B5FD')}>
          <FiMail size={16} style={{ color: '#7C3AED', flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#4C1D95' }}>Form Submission (Webhook Trigger)</div>
            <div style={{ fontSize: '0.65rem', color: '#64748B', marginTop: '2px' }}>Automated Email Sequence Started</div>
          </div>
          {pipelineState === 'lead' && <span style={{ fontSize: '0.65rem', color: '#7C3AED', fontWeight: 700 }}>Triggered</span>}
        </div>

        {/* Step 3 */}
        <div style={rowStyle('crm', '#D1FAE5', '#6EE7B7')}>
          <FiDatabase size={16} style={{ color: '#059669', flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#064E3B' }}>CRM Pipeline Sync</div>
            <div style={{ fontSize: '0.65rem', color: '#64748B', marginTop: '2px' }}>Attributed to SEO Content campaign</div>
          </div>
          {pipelineState === 'crm' && <span style={{ fontSize: '0.65rem', color: '#059669', fontWeight: 700 }}>Synced</span>}
        </div>
      </div>
    </div>
  );
}
