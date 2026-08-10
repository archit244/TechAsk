import ServicePageLayout from '../components/ServicePageLayout';
import { SocialVisual } from '../components/ServiceVisuals';
import { FiZap, FiUsers, FiTrendingUp, FiCode, FiActivity } from 'react-icons/fi';

export default function SocialMediaCreative() {
  const shiftTabs = [
    {
      label: 'Creative Formats',
      oldTitle: 'Posting stock imagery with long copy',
      oldDesc: 'Spamming generic company updates that feed algorithms and get ignored by users.',
      newTitle: 'Short-form vertical video loops',
      newDesc: 'Engineering high-retention vertical reels, shorts, and TikToks designed around hook-structures.'
    },
    {
      label: 'Brand Positioning',
      oldTitle: 'Publishing generic corporate quotes',
      oldDesc: 'Posting dry, anonymous company announcements that fail to build human affinity.',
      newTitle: 'Founder personal branding',
      newDesc: 'Positioning leadership nodes as industry thought leaders to drive direct authority.'
    },
    {
      label: 'Algorithm Optimization',
      oldTitle: 'Posting at exact peak hours',
      oldDesc: 'Obsessing over posting times rather than optimizing hook retention metrics.',
      newTitle: 'Retention-first scripting',
      newDesc: 'Writing scripts designed to spike completion rate metrics, triggering algorithmic pushes.'
    }
  ];

  const benefits = [
    {
      title: 'Algorithmic Push Optimization',
      desc: 'Engineer vertical short-form content designed to win high organic reach curves.'
    },
    {
      title: 'Founder Trust Bridges',
      desc: 'Convert anonymous executive bios into highly-trusted brand assets that source inbound inquiries.'
    },
    {
      title: 'High-Intent Demand Generation',
      desc: 'Produce creative loops that trigger direct Google search lookups for your brand.'
    }
  ];

  const pillars = [
    {
      icon: <FiZap />,
      title: 'Visual Hook Architecture',
      desc: 'Optimizing the first 3 seconds visually and copy-wise to prevent user swipe-offs.'
    },
    {
      icon: <FiUsers />,
      title: 'Founder Personal Branding',
      desc: 'Mapping ghost-written LinkedIn loops for leadership nodes to establish organic authority.'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Multi-Platform Repurposing',
      desc: 'Structuring master content assets to scale across LinkedIn, Reels, YouTube Shorts, and X.'
    },
    {
      icon: <FiCode />,
      title: 'Video Completion Engineering',
      desc: 'Designing video pacing, cuts, transitions, and caption loops to maintain high watch times.'
    },
    {
      icon: <FiActivity />,
      title: 'Brand Asset Packaging',
      desc: 'Constructing custom typography, colors, and layout templates to guarantee instant recall.'
    }
  ];

  const steps = [
    {
      title: 'Persona Audit',
      desc: 'Decode target customer demographics, content gaps, and competitor formats.'
    },
    {
      title: 'Visual Identity',
      desc: 'Develop custom templates, brand palettes, typography, and styling systems.'
    },
    {
      title: 'Sandbox Scripting',
      desc: 'Draft 10-15 hook scripts based on high-retention structural setups.'
    },
    {
      title: 'Execution & Edit',
      desc: 'Record, color-grade, and design animations matching strict retention guidelines.'
    },
    {
      title: 'Distribution Boost',
      desc: 'Schedule cross-platform distributions and deploy organic amplification loops.'
    }
  ];

  const outcomes = [
    {
      value: '10x',
      title: 'Organic Impressions Lift',
      desc: 'Achieved via vertical video engineering and algorithmic hooks.'
    },
    {
      value: '240%',
      title: 'Founder Account Traffic',
      desc: 'Growth in inbound visits to leadership profiles.'
    },
    {
      value: '3.2s',
      title: 'Increase in Watch Time',
      desc: 'Average extension of viewer retention across vertical assets.'
    }
  ];

  const faqs = [
    {
      question: 'Do you shoot the videos?',
      answer: 'We offer both: remote recording guidance where we provide scripts, prompts, and editing; and complete local production coordination.'
    },
    {
      question: 'How do you measure social media ROI?',
      answer: 'We map self-reported attribution (e.g. "How did you hear about us?" forms) and track search volume spikes to attribute pipeline to social creative.'
    },
    {
      question: 'Which platforms should we prioritize?',
      answer: 'For B2B brands, we focus on LinkedIn and YouTube. For B2C brands, we lean heavily into Instagram Reels and TikTok.'
    },
    {
      question: 'How much time is required from our team?',
      answer: 'We require only 2 to 3 hours per month for a recording session or interviews, handling all scripts, design, editing, and distribution.'
    }
  ];

  return (
    <ServicePageLayout
      title="Social Media & Creative"
      heroSubtitle="Interruptive advertising is dead. We build attention-capturing video and personal branding loops that build brand affinity and compound recall."
      heroVisual={<SocialVisual />}
      shiftHeading="Modern organic [social] changed."
      shiftTabs={shiftTabs}
      philosophyText="Attention is the new currency. Stop trying to sell in the first 3 seconds, and start earning the user's next 30 seconds."
      whatIsHeading="Story-driven creative built to [dominate feeds]."
      whatIsDescription="Social Media & Creative at TechAsk isn't about scheduling random posts. We structure short-form video hooks, founder-led LinkedIn personal branding systems, and multi-format design assets to create persistent organic recall and trigger direct buyer search demand."
      whatIsBenefits={benefits}
      methodologyHeading="The Five Pillars of [Content Dominance]"
      methodologySubtext="Turning passive social media feeds into premium pipelines of inbound demand."
      methodologyPillars={pillars}
      frameworkHeading="Our [Attention] Loop"
      frameworkSubtext="A five-phase workflow engineered to brainstorm, execute, distribute, and scale creative assets."
      frameworkSteps={steps}
      outcomesHeading="Expected Outcomes"
      outcomes={outcomes}
      faqs={faqs}
    />
  );
}
