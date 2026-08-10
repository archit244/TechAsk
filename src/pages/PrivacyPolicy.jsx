import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const F_SORA  = "'Sora', sans-serif"
const F_INTER = "'Inter', sans-serif"

const SECTIONS = [
  {
    title: '1. Information We Collect',
    body: `We collect information you provide directly to us, such as when you fill out a contact form, request a consultation, or communicate with us by email. This may include your name, email address, phone number, company name, and the nature of your inquiry.\n\nWe also automatically collect certain technical information when you visit our website, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates and times of your visits. We use cookies and similar tracking technologies to collect this information.`
  },
  {
    title: '2. How We Use Your Information',
    body: `We use the information we collect to:\n\n• Respond to your enquiries and provide the services you request.\n• Send you marketing communications about our services (where you have opted in).\n• Improve and optimise our website and user experience.\n• Comply with legal obligations and protect our legal rights.\n• Conduct analytics and research to better understand how our website is used.\n\nWe will never sell, rent, or trade your personal information to third parties for their marketing purposes.`
  },
  {
    title: '3. Legal Basis for Processing',
    body: `We process your personal data on the following legal bases:\n\n• Contractual necessity — to provide services you have requested.\n• Legitimate interests — for analytics, fraud prevention, and improving our services.\n• Consent — for marketing emails, where required.\n• Legal obligation — where we are required to comply with applicable laws.`
  },
  {
    title: '4. Data Sharing',
    body: `We may share your information with trusted third-party service providers who assist us in operating our website and delivering our services (e.g. email platforms, CRM tools, analytics providers). These providers are contractually required to handle your data securely and only for the purposes we specify.\n\nWe may also disclose your data if required to do so by law, regulation, or in response to a valid legal request.`
  },
  {
    title: '5. Data Retention',
    body: `We retain your personal data for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable laws and regulations. Contact and enquiry data is typically retained for up to 3 years from the last interaction. You may request deletion of your data at any time (see Section 7).`
  },
  {
    title: '6. Cookies',
    body: `Our website uses cookies and similar technologies to enhance your browsing experience, analyse traffic, and personalise content. You can control your cookie preferences through your browser settings. For a full breakdown of the cookies we use, please see our Cookie Policy.`
  },
  {
    title: '7. Your Rights',
    body: `Depending on your jurisdiction, you may have the following rights regarding your personal data:\n\n• Access — request a copy of the personal data we hold about you.\n• Rectification — request correction of inaccurate or incomplete data.\n• Erasure — request deletion of your data in certain circumstances.\n• Restriction — request that we limit how we use your data.\n• Portability — receive your data in a structured, machine-readable format.\n• Objection — object to processing based on legitimate interests.\n\nTo exercise any of these rights, please contact us at the details below.`
  },
  {
    title: '8. Security',
    body: `We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, destruction, or alteration. While no internet transmission is completely secure, we strive to protect your information using industry-standard practices.`
  },
  {
    title: '9. Third-Party Links',
    body: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review their privacy policies before providing any personal information.`
  },
  {
    title: '10. Contact Us',
    body: `If you have any questions about this Privacy Policy or how we handle your personal data, please contact us at:\n\nTechAsk\nEmail: hello@techask.in\nWebsite: www.techask.in`
  }
]

export default function PrivacyPolicy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', fontFamily: F_INTER }}>
      <Navbar theme="white" />

      {/* Page Header — left aligned, matches logo indent */}
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
        }}>Privacy Policy</h1>
        <p style={{
          color: '#64748b',
          fontSize: '1rem',
          lineHeight: 1.7,
          maxWidth: '600px',
          margin: '0 0 40px'
        }}>
          Last updated: August 2025. This policy explains how TechAsk collects, uses, and protects your personal data.
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
        <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#475569', marginBottom: '56px', maxWidth: '720px' }}>
          At <strong style={{ color: '#0b3b6e' }}>TechAsk</strong>, we are committed to protecting your privacy. This Privacy Policy describes how we collect, use, disclose, and safeguard your personal information when you visit our website or engage with our services.
        </p>

        {SECTIONS.map((s, i) => (
          <div key={i} style={{ marginBottom: '52px', maxWidth: '720px' }}>
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
            By using our website, you consent to the terms of this Privacy Policy. We may update this policy periodically — please check this page for the latest version.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
