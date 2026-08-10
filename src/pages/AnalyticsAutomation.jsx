import ServicePageLayout from '../components/ServicePageLayout';
import { AnalyticsVisual } from '../components/ServiceVisuals';
import { FiDatabase, FiActivity, FiZap, FiCode, FiUsers } from 'react-icons/fi';

export default function AnalyticsAutomation() {
  const shiftTabs = [
    {
      label: 'Event Tracking',
      oldTitle: 'Relying on basic page view logs',
      oldDesc: 'Knowing that users visited a page, but missing which specific sections, scrolls, or form fields they interacted with.',
      newTitle: 'Deep custom event maps',
      newDesc: 'Logging precise interaction patterns, scroll-depths, and selector clicks to build user profiles.'
    },
    {
      label: 'Lead Operations',
      oldTitle: 'Passing forms manually to sales',
      oldDesc: 'Relying on employees to copy leads from emails to CRMs, introducing delays and data errors.',
      newTitle: 'Real-time webhook routing',
      newDesc: 'Instantly scoring, routing, and assigning leads to reps within 10 seconds of submission.'
    },
    {
      label: 'Nurturing Flow',
      oldTitle: 'Sending generic weekly blasts',
      oldDesc: 'Spamming your entire contact list with identical email updates, driving unsubscribes.',
      newTitle: 'Behavioral nurture triggers',
      newDesc: 'Deploying automated email sequences triggered by user actions (like viewing pricing structures).'
    }
  ];

  const benefits = [
    {
      title: 'Attribution Traceability',
      desc: 'Trace every dollar of closed-won revenue directly back to the original creative, ad, or keyword.'
    },
    {
      title: 'Lead Response Speeds',
      desc: 'Automate intake workflows to drop rep response times to under 5 minutes, boosting conversions.'
    },
    {
      title: 'Behavior-Driven Nurturing',
      desc: 'Initialize tailored sequences based on customer actions rather than arbitrary schedules.'
    }
  ];

  const pillars = [
    {
      icon: <FiDatabase />,
      title: 'Server-side Attribution Setup',
      desc: 'Mapping clean customer profiles directly from server logs to bypass client restrictions.'
    },
    {
      icon: <FiActivity />,
      title: 'CRM System Integration',
      desc: 'Mapping fields and statuses to synchronize marketing leads with sales representative loops.'
    },
    {
      icon: <FiZap />,
      title: 'Instant Lead Routing Loops',
      desc: 'Configuring logic gates that score and assign incoming leads to sales reps automatically.'
    },
    {
      icon: <FiCode />,
      title: 'Attribution Dashboard Builds',
      desc: 'Constructing unified dashboards (Looker, custom charts) showing real-time CAC, LTV, and ROI metrics.'
    },
    {
      icon: <FiUsers />,
      title: 'Behavioral Triggers Loop',
      desc: 'Programming action-based logic triggers (email alerts, SMS nudges) based on website actions.'
    }
  ];

  const steps = [
    {
      title: 'Stack Audit',
      desc: 'Audit current CRM settings, email tools, and data leaks.'
    },
    {
      title: 'Data Mapping',
      desc: 'Define user traits, lifecycle events, and data fields.'
    },
    {
      title: 'Integration Build',
      desc: 'Configure APIs, server-side pixels, and lead delivery webhooks.'
    },
    {
      title: 'Flow Automation',
      desc: 'Set up auto-responders, lead scoring systems, and alerts.'
    },
    {
      title: 'Control Setup',
      desc: 'Launch Looker reports, verify logs, and run simulated leads.'
    }
  ];

  const outcomes = [
    {
      value: '100%',
      title: 'Data Attribution Sync',
      desc: 'Connecting CRM accounts directly to active marketing channels.'
    },
    {
      value: '<5m',
      title: 'Average Lead Response Time',
      desc: 'Automated routing loops delivering leads to sales reps instantly.'
    },
    {
      value: '+45%',
      title: 'Sales Output Lift',
      desc: 'Driven by automated follow-ups and automated lead scoring.'
    }
  ];

  const faqs = [
    {
      question: 'Which tools and CRMs do you integrate with?',
      answer: 'We regularly configure HubSpot, Salesforce, Zoho, Pipedrive, ActiveCampaign, Mailchimp, Zapier, Make, and custom webhooks.'
    },
    {
      question: 'Do we need custom software or databases?',
      answer: 'Usually no. We optimize your existing software stack or suggest affordable, off-the-shelf automation hubs.'
    },
    {
      question: 'How do you ensure GDPR and privacy compliance?',
      answer: 'We set up first-party anonymous data trackers, strict cookie-consent scripts, and handle PII data strictly inside encrypted CRM platforms.'
    },
    {
      question: 'What metrics can we expect to track?',
      answer: 'You will gain clear insight into cost-per-lead (CPL), CAC, pipeline velocity, cost-per-acquisition (CPA), and multi-touch channel ROI.'
    }
  ];

  return (
    <ServicePageLayout
      title="Analytics & Automation"
      heroSubtitle="Decisions without data are guesses. We establish clean event tracking and automated pipelines that convert leads into revenue without human intervention."
      heroVisual={<AnalyticsVisual />}
      shiftHeading="How marketing operations scale."
      shiftTabs={shiftTabs}
      philosophyText="What gets measured gets managed. What gets automated gets scaled. Eliminate manual friction to unlock speed."
      whatIsHeading="Operational automation built for speed."
      whatIsDescription="Analytics & Automation at TechAsk turns data silos into efficient operational systems. We connect server-side tracking, CRM records, and marketing automations to establish a closed-loop pipeline showing exactly which channel yields profit."
      whatIsBenefits={benefits}
      methodologyHeading="The Five Pillars of Data & Loop Operations"
      methodologySubtext="Connecting customer touchpoints into a unified, compounding revenue machine."
      methodologyPillars={pillars}
      frameworkHeading="Our Operations Loop"
      frameworkSubtext="A five-step operational roadmap designed to audit, integrate, automate, and monitor systems."
      frameworkSteps={steps}
      outcomesHeading="Expected Outcomes"
      outcomes={outcomes}
      faqs={faqs}
    />
  );
}
