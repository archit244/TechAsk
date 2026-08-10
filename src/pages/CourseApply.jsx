import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { insertCourseEnquiry } from '../services/courseEnquiryService';

const F = "'Sora', sans-serif";
const F_INTER = "'Inter', sans-serif";

const COURSES = [
  'Practical Digital Marketing Course in Ranchi',
  'Full-Stack Web Development',
  'App Development',
  'Content Creation',
  'Graphic Design',
];

const QUALIFICATIONS = [
  '10th / High School',
  '12th / Intermediate',
  "Bachelor's Degree (Pursuing)",
  "Bachelor's Degree (Completed)",
  "Master's Degree (Pursuing)",
  "Master's Degree (Completed)",
  'Working Professional',
  'Other',
];

const HOW_HEARD = [
  'Instagram',
  'YouTube',
  'Google Search',
  'Friend / Referral',
  'LinkedIn',
  'Facebook',
  'College / University',
  'Other',
];

export default function CourseApply() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const preselectedCourse = searchParams.get('course') || '';

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    course: preselectedCourse,
    qualification: '',
    howHeard: '',
    message: '',
  });

  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    window.scrollTo(0, 0);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Update course if URL param changes
  useEffect(() => {
    if (preselectedCourse) {
      setForm(f => ({ ...f, course: preselectedCourse }));
    }
  }, [preselectedCourse]);

  const isValid =
    form.name.trim() !== '' &&
    form.email.includes('@') &&
    form.phone.length === 10 &&
    form.course !== '' &&
    form.qualification !== '' &&
    form.howHeard !== '';

  const set = k => e => {
    let val = e.target.value;
    if (k === 'phone') val = val.replace(/\D/g, '').slice(0, 10);
    setForm(f => ({ ...f, [k]: val }));
    setError('');
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!isValid) {
      setError('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    if (form.phone.length !== 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    const { error: insertError } = await insertCourseEnquiry({
      full_name: form.name.trim(),
      email: form.email.trim(),
      phone_number: form.phone.trim(),
      course_interest: form.course,
      qualification: form.qualification,
      how_heard: form.howHeard,
      message: form.message.trim() || null,
    });

    if (insertError) {
      setIsSubmitting(false);
      setError('Failed to submit. Please check your connection and try again.');
      return;
    }

    setIsSubmitting(false);
    setTimeout(() => navigate('/thank-you'), 300);
  };

  const labelStyle = {
    fontFamily: F,
    fontSize: '1.15rem',
    fontWeight: 600,
    color: '#0F172A',
    marginBottom: '8px',
    display: 'block',
  };

  const inputStyle = fieldName => ({
    width: '100%',
    border: 'none',
    borderBottom: focusedField === fieldName ? '2px solid #2563EB' : '2px solid #E2E8F0',
    padding: '12px 0 16px',
    fontSize: '1.05rem',
    fontFamily: F,
    color: '#0F172A',
    backgroundColor: 'transparent',
    outline: 'none',
    borderRadius: 0,
    transition: 'border-color 0.25s ease',
    boxSizing: 'border-box',
  });

  const selectStyle = fieldName => ({
    ...inputStyle(fieldName),
    appearance: 'none',
    WebkitAppearance: 'none',
    cursor: 'pointer',
    color: form[fieldName] ? '#0F172A' : 'rgba(15,23,42,0.35)',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpath d='M1.5 3.5l3.5 3.5 3.5-3.5' stroke='%23475569' stroke-width='1.4' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 4px center',
    paddingRight: '24px',
  });

  return (
    <div style={{ backgroundColor: '#FFFFFF', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar theme="white" />

      <main style={{ flex: 1, padding: isMobile ? '60px 6%' : '100px 5% 120px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr',
          gap: isMobile ? '60px' : '100px',
          alignItems: 'start',
        }}>

          {/* ── LEFT: Form ── */}
          <div>
            <span style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              color: '#2563EB',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontFamily: F,
            }}>
              Course Application
            </span>

            <h1 style={{
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              fontWeight: 800,
              color: '#0F172A',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              margin: '12px 0 20px',
              fontFamily: F,
            }}>
              Apply for a Course
            </h1>

            <p style={{
              fontSize: '1rem',
              lineHeight: 1.65,
              color: '#475569',
              fontFamily: F_INTER,
              maxWidth: '520px',
              marginBottom: '56px',
            }}>
              Fill in your details below and our admissions team will reach out within 1 business day to walk you through the next steps.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '40px', maxWidth: '600px' }}>

              {/* Full Name */}
              <div>
                <label htmlFor="apply-name" style={labelStyle}>Your Full Name</label>
                <input
                  id="apply-name"
                  type="text"
                  value={form.name}
                  onChange={set('name')}
                  autoComplete="name"
                  style={inputStyle('name')}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField('')}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="apply-email" style={labelStyle}>Your Email</label>
                <input
                  id="apply-email"
                  type="email"
                  value={form.email}
                  onChange={set('email')}
                  autoComplete="email"
                  style={inputStyle('email')}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField('')}
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="apply-phone" style={labelStyle}>Your Phone Number</label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    bottom: '16px',
                    fontFamily: F,
                    fontSize: '1.05rem',
                    color: isPhoneFocused || form.phone ? '#0F172A' : 'rgba(15,23,42,0.4)',
                    fontWeight: 600,
                    pointerEvents: 'none',
                    transition: 'color 0.2s ease',
                  }}>
                    +91
                  </span>
                  <input
                    id="apply-phone"
                    type="tel"
                    value={form.phone}
                    onChange={set('phone')}
                    onFocus={() => { setIsPhoneFocused(true); setFocusedField('phone'); }}
                    onBlur={() => { setIsPhoneFocused(false); setFocusedField(''); }}
                    style={{ ...inputStyle('phone'), paddingLeft: '38px' }}
                    autoComplete="tel"
                  />
                </div>
              </div>

              {/* Course Interest */}
              <div>
                <label htmlFor="apply-course" style={labelStyle}>Course You're Interested In</label>
                <select
                  id="apply-course"
                  value={form.course}
                  onChange={set('course')}
                  style={selectStyle('course')}
                  onFocus={() => setFocusedField('course')}
                  onBlur={() => setFocusedField('')}
                >
                  <option value="" disabled hidden></option>
                  {COURSES.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Qualification */}
              <div>
                <label htmlFor="apply-qualification" style={labelStyle}>Highest Qualification</label>
                <select
                  id="apply-qualification"
                  value={form.qualification}
                  onChange={set('qualification')}
                  style={selectStyle('qualification')}
                  onFocus={() => setFocusedField('qualification')}
                  onBlur={() => setFocusedField('')}
                >
                  <option value="" disabled hidden></option>
                  {QUALIFICATIONS.map(q => (
                    <option key={q} value={q}>{q}</option>
                  ))}
                </select>
              </div>

              {/* How did you hear */}
              <div>
                <label htmlFor="apply-how-heard" style={labelStyle}>How Did You Hear About Us?</label>
                <select
                  id="apply-how-heard"
                  value={form.howHeard}
                  onChange={set('howHeard')}
                  style={selectStyle('howHeard')}
                  onFocus={() => setFocusedField('howHeard')}
                  onBlur={() => setFocusedField('')}
                >
                  <option value="" disabled hidden></option>
                  {HOW_HEARD.map(h => (
                    <option key={h} value={h}>{h}</option>
                  ))}
                </select>
              </div>

              {/* Optional message */}
              <div>
                <label htmlFor="apply-message" style={{ ...labelStyle, color: '#475569' }}>
                  Any Questions or Message? <span style={{ fontWeight: 400, fontSize: '0.85rem' }}>(optional)</span>
                </label>
                <textarea
                  id="apply-message"
                  value={form.message}
                  onChange={set('message')}
                  rows={3}
                  style={{
                    ...inputStyle('message'),
                    resize: 'vertical',
                    borderBottom: 'none',
                    border: focusedField === 'message' ? '2px solid #2563EB' : '2px solid #E2E8F0',
                    borderRadius: '8px',
                    padding: '12px 14px',
                  }}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField('')}
                />
              </div>

              {/* Submit */}
              <div style={{ marginTop: '8px' }}>
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
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>

              {error && (
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#EF4444', fontFamily: F }}>
                  {error}
                </div>
              )}
            </form>
          </div>

          {/* ── RIGHT: Info Panel ── */}
          {!isMobile && (
            <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '24px' }}>

              {/* What happens next */}
              <div style={{
                background: 'linear-gradient(135deg, #1e40af 0%, #2563EB 100%)',
                borderRadius: '20px',
                padding: '36px 32px',
                color: '#fff',
              }}>
                <p style={{ fontFamily: F, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.7, marginBottom: '16px', marginTop: 0 }}>
                  What Happens Next
                </p>
                {[
                  { step: '01', title: 'Application Received', desc: 'We review your application and course interest within 24 hrs.' },
                  { step: '02', title: 'Counselling Call', desc: 'Our admissions team calls you to answer questions and confirm fit.' },
                  { step: '03', title: 'Enrolment & Batch Allocation', desc: 'Secure your seat with a deposit and join your assigned batch.' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: i < 2 ? '24px' : 0 }}>
                    <div style={{
                      flexShrink: 0,
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: F,
                      fontWeight: 800,
                      fontSize: '0.75rem',
                    }}>
                      {item.step}
                    </div>
                    <div>
                      <p style={{ fontFamily: F, fontWeight: 700, fontSize: '0.95rem', margin: '0 0 4px' }}>{item.title}</p>
                      <p style={{ fontFamily: F_INTER, fontSize: '0.85rem', opacity: 0.75, margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}>
                {[
                  { icon: '🏆', text: 'Top 100 at Ranchi Tech Hub' },
                  { icon: '🎓', text: 'Assured Internship on Completion' },
                  { icon: '⭐', text: '4.9/5 rating from 980+ students' },
                  { icon: '💼', text: 'Industry mentors & live project work' },
                ].map((badge, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontSize: '1.3rem' }}>{badge.icon}</span>
                    <span style={{ fontFamily: F_INTER, fontSize: '0.9rem', color: '#334155', fontWeight: 500 }}>{badge.text}</span>
                  </div>
                ))}
              </div>

            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
