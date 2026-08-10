import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const F_SORA  = "'Sora', sans-serif"
const F_INTER = "'Inter', sans-serif"

const COOKIE_TYPES = [
  {
    name: 'Strictly Necessary',
    purpose: 'Essential for the website to function. Enables core features like page navigation and form submission.',
    examples: 'Session cookies, CSRF tokens',
    canDisable: 'No'
  },
  {
    name: 'Analytics & Performance',
    purpose: 'Help us understand how visitors interact with our website by collecting anonymous usage data.',
    examples: 'Google Analytics (_ga, _gid)',
    canDisable: 'Yes'
  },
  {
    name: 'Functional',
    purpose: 'Enable enhanced functionality and personalisation, such as language preferences or UI settings.',
    examples: 'Language preferences, UI settings',
    canDisable: 'Yes'
  },
  {
    name: 'Marketing & Advertising',
    purpose: 'Track visitors across websites to deliver relevant, engaging advertising and limit ad frequency.',
    examples: 'Google Ads, Meta Pixel, LinkedIn Insight',
    canDisable: 'Yes'
  }
]

const SECTIONS = [
  {
    title: 'What Are Cookies?',
    body: `Cookies are small text files placed on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the website owner.\n\nCookies may be "session" cookies (expire when you close your browser) or "persistent" cookies (remain on your device until they expire or you delete them).`
  },
  {
    title: 'How We Use Cookies',
    body: `We use cookies for the following purposes:\n\n• To operate our website and ensure it works correctly.\n• To analyse how our website is used so we can improve it.\n• To remember your preferences and personalise your experience.\n• To deliver relevant advertising to you on other websites.\n• To measure the effectiveness of our marketing campaigns.`
  },
  {
    title: 'Third-Party Cookies',
    body: `Some cookies on our site are placed by third-party services. These include analytics providers (such as Google Analytics), advertising platforms (such as Google Ads and Meta), and social media platforms. These third parties have their own privacy policies, and we encourage you to review them.\n\nWe do not control the cookies placed by these third parties and are not responsible for them.`
  },
  {
    title: 'Managing Your Cookie Preferences',
    body: `You can control and manage cookies in several ways:\n\n• Browser settings: Most browsers allow you to refuse or accept cookies, delete existing cookies, and set preferences for specific websites.\n• Opt-out tools: For analytics cookies, you can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on.\n• Ad preferences: You can manage advertising preferences via the Digital Advertising Alliance or equivalent opt-out tools in your region.\n\nPlease note that disabling certain cookies may affect the functionality of our website.`
  },
  {
    title: 'Cookie Lifespan',
    body: `Session cookies expire when you close your browser. Persistent cookies remain on your device for a set period — typically between 30 days and 2 years — depending on the cookie.`
  },
  {
    title: 'Updates to This Policy',
    body: `We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this page periodically.`
  },
  {
    title: 'Contact Us',
    body: `If you have any questions about our use of cookies, please contact us at:\n\nTechAsk\nEmail: hello@techask.in\nWebsite: www.techask.in`
  }
]

export default function CookiePolicy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', fontFamily: F_INTER }}>
      <Navbar theme="white" />

      {/* Page Header */}
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '60px 5% 0',
        boxSizing: 'border-box'
      }}>
        <p style={{
          fontFamily: F_SORA,
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: '#2563EB',
          marginBottom: '12px',
          marginTop: 0
        }}>Legal</p>
        <h1 style={{
          fontFamily: F_SORA,
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 900,
          color: '#0b3b6e',
          margin: '0 0 16px',
          letterSpacing: '-0.03em',
          lineHeight: 1.1
        }}>Cookie Policy</h1>
        <p style={{
          color: '#64748b',
          fontSize: '1rem',
          lineHeight: 1.7,
          maxWidth: '600px',
          margin: '0 0 40px'
        }}>
          Last updated: August 2025. This policy explains how TechAsk uses cookies and similar technologies on our website.
        </p>
        <div style={{ height: '1px', background: '#e2e8f0', marginBottom: '56px' }} />
      </div>

      {/* Body */}
      <main style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 5% 100px',
        boxSizing: 'border-box'
      }}>

        {/* Cookie Types Table */}
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{
            fontFamily: F_SORA,
            fontSize: '1.1rem',
            fontWeight: 700,
            color: '#0b3b6e',
            marginBottom: '20px',
            marginTop: 0,
            paddingBottom: '10px',
            borderBottom: '1px solid #e2e8f0'
          }}>Types of Cookies We Use</h2>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', maxWidth: '860px', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
              <thead>
                <tr style={{ background: '#0b3b6e', color: '#fff' }}>
                  {['Cookie Type', 'Purpose', 'Examples', 'Can You Disable?'].map(h => (
                    <th key={h} style={{
                      padding: '12px 16px',
                      textAlign: 'left',
                      fontFamily: F_SORA,
                      fontWeight: 600,
                      fontSize: '0.78rem',
                      letterSpacing: '0.04em'
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COOKIE_TYPES.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#f8fafc' : '#fff', borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '13px 16px', fontWeight: 600, color: '#0b3b6e', fontFamily: F_SORA, fontSize: '0.83rem', whiteSpace: 'nowrap' }}>{row.name}</td>
                    <td style={{ padding: '13px 16px', color: '#475569', lineHeight: 1.6 }}>{row.purpose}</td>
                    <td style={{ padding: '13px 16px', color: '#64748b', fontStyle: 'italic' }}>{row.examples}</td>
                    <td style={{ padding: '13px 16px', color: row.canDisable === 'No' ? '#dc2626' : '#16a34a', fontWeight: 600, fontFamily: F_SORA, fontSize: '0.83rem', whiteSpace: 'nowrap' }}>{row.canDisable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sections */}
        {SECTIONS.map((s, i) => (
          <div key={i} style={{ marginBottom: '48px', maxWidth: '720px' }}>
            <h2 style={{
              fontFamily: F_SORA,
              fontSize: '1.1rem',
              fontWeight: 700,
              color: '#0b3b6e',
              marginBottom: '12px',
              marginTop: 0,
              paddingBottom: '10px',
              borderBottom: '1px solid #e2e8f0'
            }}>{s.title}</h2>
            <div style={{ fontSize: '0.97rem', lineHeight: 1.85, color: '#475569', whiteSpace: 'pre-line' }}>
              {s.body}
            </div>
          </div>
        ))}

        <div style={{
          maxWidth: '720px',
          marginTop: '16px',
          padding: '20px 24px',
          background: '#eff6ff',
          borderRadius: '10px',
          border: '1px solid #bfdbfe'
        }}>
          <p style={{ fontSize: '0.9rem', color: '#1e40af', margin: 0, lineHeight: 1.7 }}>
            By continuing to browse our website, you agree to our use of cookies as described in this policy. You can withdraw your consent at any time by adjusting your browser settings.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
