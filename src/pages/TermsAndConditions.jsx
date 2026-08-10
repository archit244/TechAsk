import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const F_SORA  = "'Sora', sans-serif"
const F_INTER = "'Inter', sans-serif"

const SECTIONS = [
  {
    title: '1. Acceptance of Terms',
    body: `By accessing or using the TechAsk website (www.techask.in) or any of our services, you confirm that you are at least 18 years of age and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please discontinue use of our website and services immediately.\n\nThese Terms and Conditions apply to all visitors, users, clients, and others who access or use our services.`
  },
  {
    title: '2. Description of Services',
    body: `TechAsk is a performance marketing agency offering services including, but not limited to:\n\n• Paid Media & Performance Marketing (Google Ads, Meta Ads)\n• Search Engine Optimisation (SEO) & Local SEO\n• Social Media Marketing & Creative Production\n• Web Design & Landing Page Development\n• Analytics, Tracking & Marketing Automation\n• Digital Marketing Education & Courses\n\nWe reserve the right to modify, suspend, or discontinue any service at any time without notice.`
  },
  {
    title: '3. Client Responsibilities',
    body: `As a client or user of our services, you agree to:\n\n• Provide accurate, current, and complete information as required for service delivery.\n• Grant us the necessary access to accounts, platforms, and resources required to perform the agreed services.\n• Review and provide timely feedback on strategies, content, and reports.\n• Ensure that any materials you provide (logos, images, content) do not infringe on third-party intellectual property rights.\n• Maintain the confidentiality of any login credentials shared with you.`
  },
  {
    title: '4. Intellectual Property',
    body: `All content on this website — including text, graphics, logos, images, and software — is the property of TechAsk or its content suppliers and is protected by applicable intellectual property laws.\n\nWork product created specifically for a client (e.g. ad creatives, landing pages) becomes the client's property upon full payment. General methodologies, frameworks, templates, and internal tools developed by TechAsk remain our intellectual property.`
  },
  {
    title: '5. Fees, Payment & Refunds',
    body: `Service fees are agreed upon in a separate proposal or contract. Payment terms will be specified in the applicable agreement.\n\n• Invoices are due within the period stated on the invoice unless otherwise agreed.\n• Late payments may attract interest at the rate specified in the agreement.\n• Retainer fees are non-refundable once a billing cycle has commenced.\n• Project deposits are non-refundable if work has already commenced.\n\nWe reserve the right to pause or terminate services in the event of non-payment.`
  },
  {
    title: '6. Confidentiality',
    body: `Both parties agree to keep confidential any proprietary information, business data, strategies, or trade secrets shared during the course of the engagement. This obligation survives the termination of any agreement.\n\nTechAsk will not disclose your business information to third parties except as required to deliver the agreed services, or as required by law.`
  },
  {
    title: '7. Results & Performance Disclaimer',
    body: `While TechAsk applies best-in-class strategies and methods, we cannot guarantee specific results, including but not limited to revenue targets, return on ad spend (ROAS), lead volumes, or search engine rankings. Marketing outcomes are influenced by numerous external factors outside our control, including market conditions, competition, platform algorithm changes, and client-side execution.\n\nAny case studies, examples, or projected outcomes shared with you are illustrative and not guarantees of future performance.`
  },
  {
    title: '8. Limitation of Liability',
    body: `To the maximum extent permitted by law, TechAsk shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including loss of profits, data, goodwill, or business interruption — arising from your use of our services or website.\n\nOur total liability in respect of any claim arising out of or in connection with our services shall not exceed the total fees paid by you to TechAsk in the 3 months preceding the claim.`
  },
  {
    title: '9. Termination',
    body: `Either party may terminate a service agreement by providing written notice as specified in the applicable contract. Upon termination:\n\n• Any outstanding invoices become immediately due and payable.\n• Each party shall return or destroy confidential information of the other party.\n• Any licences granted under the agreement will cease unless otherwise agreed.`
  },
  {
    title: '10. Governing Law',
    body: `These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in India.`
  },
  {
    title: '11. Changes to These Terms',
    body: `We reserve the right to update or modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our website or services after any changes constitutes your acceptance of the revised terms.`
  },
  {
    title: '12. Contact Us',
    body: `If you have any questions about these Terms and Conditions, please contact us at:\n\nTechAsk\nEmail: hello@techask.in\nWebsite: www.techask.in`
  }
]

export default function TermsAndConditions() {
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
        }}>Terms &amp; Conditions</h1>
        <p style={{
          color: '#64748b',
          fontSize: '1rem',
          lineHeight: 1.7,
          maxWidth: '600px',
          margin: '0 0 40px'
        }}>
          Last updated: August 2025. Please read these terms carefully before using our website or engaging our services.
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
          These Terms and Conditions govern your use of the <strong style={{ color: '#0b3b6e' }}>TechAsk</strong> website and the services we provide. By accessing our website or engaging our services, you agree to be bound by these terms. Please read them carefully.
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
            By using our website or engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
