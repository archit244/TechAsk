import ServicePageLayout from '../components/ServicePageLayout';
import { WebVisual } from '../components/ServiceVisuals';
import { FiZap, FiUsers, FiCode, FiTrendingUp, FiActivity } from 'react-icons/fi';

export default function WebLandingPages() {
  const shiftTabs = [
    {
      label: 'Load Performance',
      oldTitle: 'Using generic WordPress templates',
      oldDesc: 'Bloated themes loaded with tracking scripts that score a 35/100 on PageSpeed, driving bounce rates.',
      newTitle: 'React/Vite static architecture',
      newDesc: 'Lightning-fast static page builds scoring 95+ on PageSpeed, capturing high-intent clicks instantly.'
    },
    {
      label: 'User Experience',
      oldTitle: 'Designing generic layouts',
      oldDesc: 'Cluttered structural navigation that forces users to search, increasing drop-off rates.',
      newTitle: 'Cognitive-flow structures',
      newDesc: 'Clean, conversion-centered pathways removing friction points and guiding users toward action.'
    },
    {
      label: 'Conversion Optimization',
      oldTitle: 'Launching static forms',
      oldDesc: 'Long, intimidating inputs that users abandon, resulting in flat-line conversion metrics.',
      newTitle: 'Interactive micro-steps',
      newDesc: 'Dynamic multi-step question funnels that double completion rates while securing rich lead info.'
    }
  ];

  const benefits = [
    {
      title: 'Speed Benchmarking',
      desc: 'Secure 95+ performance indices to lower bounce rates and boost organic crawl rankings.'
    },
    {
      title: 'Interactive Conversions',
      desc: 'Deploy multi-step selectors and calculations that capture data without friction.'
    },
    {
      title: 'Clean Mobile Optimization',
      desc: 'Engineer responsive layouts ensuring a seamless browsing journey across all screen sizes.'
    }
  ];

  const pillars = [
    {
      icon: <FiZap />,
      title: 'Performance Engineering',
      desc: 'Minifying JS bundles, lazy-loading files, and optimizing assets to keep load times under 1.5 seconds.'
    },
    {
      icon: <FiUsers />,
      title: 'Conversion Psychology Layout',
      desc: 'Ordering benefits, testimonials, and FAQs based on natural buyer decision frameworks.'
    },
    {
      icon: <FiCode />,
      title: 'Interactive Form Flows',
      desc: 'Building multi-step questionnaires that keep users engaged while verifying high-intent leads.'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Continuous A/B Diagnostics',
      desc: 'Deploying click-maps, scroll-maps, and split-tests to identify and patch friction points.'
    },
    {
      icon: <FiActivity />,
      title: 'Clean Modular Development',
      desc: 'Writing reusable, semantic React elements that scale easily and remain easy to configure.'
    }
  ];

  const steps = [
    {
      title: 'UX Audit',
      desc: 'Analyze performance drops, user recordings, and current tracking logs.'
    },
    {
      title: 'Wireframe Mapping',
      desc: 'Plan content layouts, visual order, copy hierarchies, and interaction flows.'
    },
    {
      title: 'Visual Design',
      desc: 'Design premium glassmorphic mockups and transitions matching brand guidelines.'
    },
    {
      title: 'Vite Development',
      desc: 'Write clean, semantic React code and Tailwind scripts optimized for speed.'
    },
    {
      title: 'Tracking Launch',
      desc: 'Establish UTM trackers, heatmaps, analytical event listeners, and A/B configurations.'
    }
  ];

  const outcomes = [
    {
      value: '95+',
      title: 'PageSpeed Index Score',
      desc: 'Achieved on mobile and desktop performance benchmarks.'
    },
    {
      value: '+112%',
      title: 'Conversion Rate Uplift',
      desc: 'Driven by cognitive copywriting and multi-step interactive forms.'
    },
    {
      value: '-50%',
      title: 'Page Load Reduction',
      desc: 'Cutting load delays to maximize target audience retention.'
    }
  ];

  const faqs = [
    {
      question: 'Which technology stack do you use?',
      answer: 'We build using React, Vite, Tailwind CSS, and headless architectures, providing custom and responsive design styles.'
    },
    {
      question: 'How long does a landing page take to build?',
      answer: 'A high-fidelity landing page from initial diagnostic to deployment takes 2 to 3 weeks, including copy, design, dev, and testing.'
    },
    {
      question: 'Do you write the page copy?',
      answer: 'Yes, our team handles all copywriting, applying conversion frameworks designed around your ideal buyer persona.'
    },
    {
      question: 'Can we integrate this with our CRM?',
      answer: 'Absolutely. We set up direct webhooks syncing submissions straight to HubSpot, Salesforce, Zoho, or email automations.'
    }
  ];

  return (
    <ServicePageLayout
      title="Web & Landing Pages"
      heroSubtitle="A slow website is an expensive leak. We design and build conversion-optimized, lightning-fast digital experiences that turn visitors into pipeline."
      heroVisual={<WebVisual />}
      shiftHeading="Web development standards evolved."
      shiftTabs={shiftTabs}
      philosophyText="Clean code builds speed. Speed builds trust. Trust builds pipeline. Never let load times waste ad spend."
      whatIsHeading="Conversion science meets speed engineering."
      whatIsDescription="Web & Landing Pages at TechAsk are built from the ground up to convert. We blend conversion copywriting, user psychology, responsive grids, and static framework engineering to build digital assets that act as high-converting, round-the-clock sales machines."
      whatIsBenefits={benefits}
      methodologyHeading="The Five Pillars of High-Converting Web Pages"
      methodologySubtext="How we engineering code and layouts to guide visitors from click to consultation."
      methodologyPillars={pillars}
      frameworkHeading="Our Build Loop"
      frameworkSubtext="Five steps to translate goals into fast, high-converting digital assets."
      frameworkSteps={steps}
      outcomesHeading="Expected Outcomes"
      outcomes={outcomes}
      faqs={faqs}
    />
  );
}
