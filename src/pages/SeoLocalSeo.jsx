import ServicePageLayout from '../components/ServicePageLayout';
import { SeoVisual } from '../components/ServiceVisuals';
import { FiSearch, FiActivity, FiCode, FiUsers, FiZap } from 'react-icons/fi';

export default function SeoLocalSeo() {
  const shiftTabs = [
    {
      label: 'Google AI Overviews',
      oldTitle: 'Targeting basic high-volume keywords',
      oldDesc: 'Writing 2000-word blog posts stuffed with keywords that AI overviews extract and answer instantly.',
      newTitle: 'GEO & AEO Schema Structures',
      newDesc: 'Formatting data with precise entity hooks so LLMs cite your brand as the answer.'
    },
    {
      label: 'Link Building',
      oldTitle: 'Buying low-quality guest posts',
      oldDesc: 'Spamming websites for backlinks that Google algorithms flag and penalize.',
      newTitle: 'Entity Authority Mapping',
      newDesc: 'Establishing verified relationships between your brand, founders, and core topics.'
    },
    {
      label: 'Local Search',
      oldTitle: 'Listing citations in random directories',
      oldDesc: 'Creating listings with mismatched NAP (Name, Address, Phone) details, confusing search bots.',
      newTitle: 'Geotargeted Cluster Hubs',
      newDesc: 'Building local authority pages answering localized search intent for each service area.'
    }
  ];

  const benefits = [
    {
      title: 'Zero-Click Search Capture',
      desc: 'Engineer pages specifically designed to win AI Overviews and featured snippets.'
    },
    {
      title: 'Attributed Revenue Signals',
      desc: 'Connect organic visitor nodes to your CRM to verify which articles generate deals.'
    },
    {
      title: 'Local Map-Pack Domination',
      desc: 'Optimize Google Business Profiles and location structures to win high-intent local queries.'
    }
  ];

  const pillars = [
    {
      icon: <FiSearch />,
      title: 'GEO & AEO Engineering',
      desc: 'Structuring pages so Perplexity, ChatGPT, and Gemini cite your brand on category shortlists.'
    },
    {
      icon: <FiActivity />,
      title: 'Entity & Schema Mapping',
      desc: 'Defining relationships between entities in your code to help search engine crawlers understand context.'
    },
    {
      icon: <FiCode />,
      title: 'Semantic Core Optimization',
      desc: 'Designing hub-and-spoke content systems that dominate thematic clusters rather than lone keywords.'
    },
    {
      icon: <FiUsers />,
      title: 'Intent Mapping Diagnostics',
      desc: 'Structuring landing pages to address informational, commercial, and transactional intents.'
    },
    {
      icon: <FiZap />,
      title: 'Core Web Vitals Engineering',
      desc: 'Optimizing load speed, layout stability, and responsiveness to meet strict crawler benchmarks.'
    }
  ];

  const steps = [
    {
      title: 'Entity Audit',
      desc: 'Analyze search patterns, indexing errors, and current AI visibility footprint.'
    },
    {
      title: 'Architecture Fix',
      desc: 'Remedy Core Web Vitals issues, schema setups, and nested page taxonomy.'
    },
    {
      title: 'Topic Mapping',
      desc: 'Establish keyword maps covering commercial intent and informational hubs.'
    },
    {
      title: 'Content Engineering',
      desc: 'Produce optimized landing pages built for extraction and user engagement.'
    },
    {
      title: 'Local Scale',
      desc: 'Expand Google Map structures, citations, and geotargeted authority hubs.'
    }
  ];

  const outcomes = [
    {
      value: '4.8x',
      title: 'AI Citation Increase',
      desc: 'Citations across ChatGPT, Perplexity, and Google AI Overviews.'
    },
    {
      value: '185%',
      title: 'Growth in High-Intent Traffic',
      desc: 'Traffic landing directly on landing pages, not just low-intent blog posts.'
    },
    {
      value: 'Top 3',
      title: 'Local Pack Presence',
      desc: 'Map pack visibility for critical target geographical search items.'
    }
  ];

  const faqs = [
    {
      question: 'What is GEO / AEO?',
      answer: 'Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) involve structuring your site\'s data, schema, and syntax so LLMs like ChatGPT and Google\'s Gemini can extract and cite your brand as the answer.'
    },
    {
      question: 'How long does SEO take to drive revenue?',
      answer: 'While technical fixes and local schema optimization can show results in 4 to 8 weeks, core semantic cluster dominance typically takes 4 to 6 months to start compounding.'
    },
    {
      question: 'Do you write the content?',
      answer: 'Yes, our team of subject-matter copywriters drafts search-optimized content guided by clear technical briefs and search intent maps.'
    },
    {
      question: 'How do you track organic conversions?',
      answer: 'We establish multi-touch attribution setups linking unique organic URL patterns back to your CRM hub, measuring exact lead sources.'
    }
  ];

  return (
    <ServicePageLayout
      title="SEO & Local SEO"
      heroSubtitle="Google's AI Overviews and engines like ChatGPT, Gemini, and Perplexity changed how buyers find solutions. We optimize your brand for extraction and citation."
      heroVisual={<SeoVisual />}
      shiftHeading="The old [SEO playbook] is broken."
      shiftTabs={shiftTabs}
      philosophyText="Own the answer, not just the link. If you aren't structured for AI extraction, you lose the search before it even starts."
      whatIsHeading="Search Engine Optimization for the [AI Era]."
      whatIsDescription="Traditional SEO focuses on driving traffic. Search Engineering focuses on driving pipeline. We configure your technical architecture, semantic graph relationships, and local density signals so your business becomes the ultimate authority in your space."
      whatIsBenefits={benefits}
      methodologyHeading="The Five Pillars of Modern [Search Optimization]"
      methodologySubtext="Building semantic relationships that turn search presence into a predictable pipeline."
      methodologyPillars={pillars}
      frameworkHeading="Our [Organic] Loop"
      frameworkSubtext="A five-step roadmap designed to rank, cite, and monetize your organic footprint."
      frameworkSteps={steps}
      outcomesHeading="Expected Outcomes"
      outcomes={outcomes}
      faqs={faqs}
    />
  );
}
