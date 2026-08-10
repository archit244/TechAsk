import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { insertLead } from '../services/leadService';

const F = "'Sora', sans-serif";

export default function ContactUs() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', budget: '' });
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    window.scrollTo(0, 0);
    return () => window.removeEventListener('resize', check);
  }, []);

  const isValid = form.name.trim() !== '' && form.email.includes('@') && form.phone.length === 10 && form.company.trim() !== '' && form.budget !== '';

  const set = k => e => {
    let val = e.target.value;
    if (k === 'phone') {
      val = val.replace(/\D/g, '').slice(0, 10);
    }
    setForm(f => ({ ...f, [k]: val }));
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim() || !form.company.trim() || !form.budget) {
      setError('All fields are required');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      setError('Please enter a valid email address');
      return;
    }

    if (form.phone.length !== 10) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    setIsSubmitting(true);
    setError('');
    setSuccess('');

    const { error: insertError } = await insertLead({
      full_name: form.name.trim(),
      email: form.email.trim(),
      phone_number: form.phone.trim(),
      company_name: form.company.trim(),
      budget: form.budget
    });

    if (insertError) {
      setIsSubmitting(false);
      setError('Failed to submit form. Please check your connection and try again.');
      return;
    }

    setSuccess('Strategy call booked successfully!');
    setForm({ name: '', email: '', phone: '', company: '', budget: '' });
    setIsSubmitting(false);

    setTimeout(() => {
      navigate('/thank-you');
    }, 1500);
  };

  const labelStyle = {
    fontFamily: F,
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#0F172A',
    marginBottom: '8px',
    display: 'block'
  };

  const inputStyle = (fieldName) => ({
    width: '100%',
    border: 'none',
    borderBottom: focusedField === fieldName ? '2px solid #2563EB' : '2px solid #E2E8F0',
    padding: '12px 0 16px',
    fontSize: '1.1rem',
    fontFamily: F,
    color: '#0F172A',
    backgroundColor: 'transparent',
    outline: 'none',
    borderRadius: 0,
    transition: 'border-color 0.25s ease',
    boxSizing: 'border-box'
  });

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar theme="white" />

      <main style={{ flex: 1, padding: isMobile ? '60px 6%' : '100px 5% 120px' }}>
        <div style={{ width: '100%' }}>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr', 
            gap: isMobile ? '60px' : '100px',
            alignItems: 'start'
          }}>
            
            {/* Left Column: Got an Idea? + Form */}
            <div>
              <span style={{ 
                fontSize: '0.85rem', 
                fontWeight: 700, 
                color: '#2563EB', 
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontFamily: F
              }}>
                Got an Idea?
              </span>
              <h1 style={{ 
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', 
                fontWeight: 800, 
                color: '#0F172A', 
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                margin: '12px 0 24px',
                textTransform: 'capitalize',
                fontFamily: F
              }}>
                Drop us a message
              </h1>
              
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: 1.6, 
                color: '#475569', 
                fontFamily: "'Inter', sans-serif",
                maxWidth: '560px',
                marginBottom: '60px'
              }}>
                We're excited to work with you soon! Please drop an email with your details &amp; requirements to{' '}
                <a href="mailto:bd@techask.in" style={{ color: '#2563EB', fontWeight: 700, textDecoration: 'none' }}>
                  bd@techask.in
                </a>.<br /><br />
                You can also fill this form &amp; we'll get back in 2 business days.
              </p>

              {/* Form elements stacked directly under the subtext in the flow (Schbang style) */}
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '40px', maxWidth: '640px' }}>
                
                <div>
                  <label htmlFor="contact-name" style={labelStyle}>Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={set('name')}
                    placeholder=""
                    autoComplete="name"
                    style={inputStyle('name')}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                  />
                </div>

                <div>
                  <label htmlFor="contact-company" style={labelStyle}>Your Organization's Name</label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={set('company')}
                    placeholder=""
                    autoComplete="organization"
                    style={inputStyle('company')}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField('')}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" style={labelStyle}>Your Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={set('email')}
                    placeholder=""
                    autoComplete="email"
                    style={inputStyle('email')}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" style={labelStyle}>Your Number</label>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <span style={{ 
                      position: 'absolute', 
                      left: 0, 
                      bottom: '16px', 
                      fontFamily: F, 
                      fontSize: '1.1rem', 
                      color: isPhoneFocused || form.phone ? '#0F172A' : 'rgba(15,23,42,0.4)', 
                      fontWeight: 600,
                      pointerEvents: 'none',
                      transition: 'color 0.2s ease'
                    }}>
                      +91 
                    </span>
                    <input 
                      id="contact-phone"
                      type="tel" 
                      name="phone" 
                      value={form.phone} 
                      onChange={set('phone')} 
                      onFocus={() => { setIsPhoneFocused(true); setFocusedField('phone'); }}
                      onBlur={() => { setIsPhoneFocused(false); setFocusedField(''); }}
                      placeholder=""
                      style={{ 
                        ...inputStyle('phone'), 
                        paddingLeft: '36px'
                      }}
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-budget" style={labelStyle}>Your Estimated Monthly Budget</label>
                  <div style={{ position: 'relative' }}>
                    <select
                      id="contact-budget"
                      name="budget"
                      value={form.budget}
                      onChange={set('budget')}
                      autoComplete="off"
                      style={{
                        ...inputStyle('budget'),
                        appearance: 'none',
                        WebkitAppearance: 'none',
                        cursor: 'pointer',
                        color: form.budget ? '#0F172A' : 'rgba(15,23,42,0.4)',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpath d='M1.5 3.5l3.5 3.5 3.5-3.5' stroke='%23475569' stroke-width='1.4' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 2px center',
                        paddingRight: '20px',
                      }}
                      onFocus={() => setFocusedField('budget')}
                      onBlur={() => setFocusedField('')}
                    >
                      <option value="" disabled hidden></option>
                      <option value="10k-25k">₹10k – ₹25k</option>
                      <option value="25k-50k">₹25k – ₹50k</option>
                      <option value="50k+">₹50k+</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                  <button
                    type="submit"
                    disabled={!isValid || isSubmitting}
                    style={{
                      backgroundColor: isValid && !isSubmitting ? '#2563EB' : '#94A3B8',
                      color: '#FFFFFF',
                      border: 'none',
                      borderRadius: '14px',
                      padding: '16px 40px',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      fontFamily: F,
                      cursor: isValid && !isSubmitting ? 'pointer' : 'not-allowed',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      boxShadow: isValid && !isSubmitting ? '0 10px 20px rgba(37, 99, 235, 0.15)' : 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      if (isValid && !isSubmitting) {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.backgroundColor = '#1D4ED8';
                      }
                    }}
                    onMouseLeave={e => {
                      if (isValid && !isSubmitting) {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.backgroundColor = '#2563EB';
                      }
                    }}
                  >
                    {isSubmitting ? "Sending..." : "Submit"}
                  </button>
                </div>

                {error && (
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#EF4444', fontFamily: F }}>
                    {error}
                  </div>
                )}

                {success && (
                  <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#10B981', fontFamily: F }}>
                    {success}
                  </div>
                )}
              </form>
            </div>

            {/* Right Column: Visual showcases (matching Schbang portfolio showcase column) */}
            {!isMobile && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', position: 'sticky', top: '100px' }}>
                <div style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  position: 'relative',
                  aspectRatio: '4/3',
                  background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 15px 35px rgba(37,99,235,0.1)'
                }}>
                  <div style={{ textAlign: 'center', color: '#FFFFFF', padding: '30px' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.8 }}>TechAsk Creative</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: F, marginTop: '8px', lineHeight: 1.2 }}>Shot by TechAsk Motion Pictures</div>
                  </div>
                </div>

                <div style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  position: 'relative',
                  aspectRatio: '4/3',
                  background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 15px 35px rgba(124,58,237,0.1)'
                }}>
                  <div style={{ textAlign: 'center', color: '#FFFFFF', padding: '30px' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.8 }}>TechAsk Media</div>
                    <div style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: F, marginTop: '8px', lineHeight: 1.2 }}>Digital Scaling &amp; Acquisitions</div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
