import ServicePageLayout from '../components/ServicePageLayout';
import { PerformanceVisual } from '../components/ServiceVisuals';
import { FiUsers, FiActivity, FiTrendingUp, FiCode, FiZap } from 'react-icons/fi';

export default function PerformanceMarketing() {
  const shiftTabs = [
    {
      label: 'Creative Strategy',
      oldTitle: 'A/B testing minor headline tweaks',
      oldDesc: 'Wasting thousands testing "Click Here" vs "Buy Now" while conversion rates remain flat.',
      newTitle: 'Dynamic hook-based creative matrix',
      newDesc: 'Developing custom creative variations mapped directly to user psychological triggers.'
    },
    {
      label: 'Attribution',
      oldTitle: 'Relying on platform-reported pixel data',
      oldDesc: 'Relying on skewed iOS tracking metrics that double-count sales and misattribute revenue.',
      newTitle: 'Server-side attribution models',
      newDesc: 'Direct server-to-server connection mapping customer journeys straight to your CRM.'
    },
    {
      label: 'Scaling Strategy',
      oldTitle: 'Increasing daily budgets randomly',
      oldDesc: 'Bumping budgets 20% only to see CPAs double and campaigns reset to the learning phase.',
      newTitle: 'Systematic audience segment scaling',
      newDesc: 'Duplicating workflows across separate demographic nodes to scale without performance drops.'
    }
  ];

  const benefits = [
    {
      title: 'Data-Driven Budget Allocation',
      desc: 'Automatically route budgets to campaigns with the highest customer lifetime value (LTV).'
    },
    {
      title: 'Speed & Scale Readiness',
      desc: 'Deploy campaigns that can handle high volume traffic without CPA inflation.'
    },
    {
      title: 'Omnichannel Funnel Design',
      desc: 'Coordinate search, social, programmatic, and retargeting signals for a seamless user journey.'
    }
  ];

  const pillars = [
    {
      icon: <FiUsers />,
      title: 'First-Party Data Integration',
      desc: 'Leveraging your database to train ad platform algorithms with exact buyer signals.'
    },
    {
      icon: <FiActivity />,
      title: 'Server-side Pixel Syncing',
      desc: 'Circumventing ad blockers and cookies to capture 100% of conversion signals.'
    },
    {
      icon: <FiTrendingUp />,
      title: 'Funnel Drop-off Auditing',
      desc: 'Identifying exactly where prospects exit your pipeline and deploying patch hooks.'
    },
    {
      icon: <FiCode />,
      title: 'Continuous Copy Testing',
      desc: 'Deploying high-impact creative variations based on user psychological profiles.'
    },
    {
      icon: <FiZap />,
      title: 'Bid Strategy Optimization',
      desc: 'Structuring programmatic bidding caps to shield your margins from platform bidding wars.'
    }
  ];

  const steps = [
    {
      title: 'Deep Audit',
      desc: 'Scrutinize current tracking errors, funnel bottlenecks, and historical data.'
    },
    {
      title: 'Infrastructure Setup',
      desc: 'Establish clean server-side pixels, attribution models, and dashboard logs.'
    },
    {
      title: 'Creative Sandbox',
      desc: 'Test 15-20 distinct creative hooks to locate the lowest CAC segments.'
    },
    {
      title: 'Scale Scaling',
      desc: 'Funnel budgets to winning combinations while testing new audience cohorts.'
    },
    {
      title: 'LTV Optimization',
      desc: 'Align retargeting loops and email flows to maximize customer lifetime value.'
    }
  ];

  const outcomes = [
    {
      value: '3.4x',
      title: 'Average ROAS Lift',
      desc: 'Comparing pre and post integration performance indicators.'
    },
    {
      value: '-42%',
      title: 'Reduction in Blended CAC',
      desc: 'Driven by clean attribution and hook-based creative optimization.'
    },
    {
      value: '100%',
      title: 'Pixel Attribution Clarity',
      desc: 'Circumventing iOS 14.5+ cookie blocking.'
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to see improvements in CPA?',
      answer: 'Most clients see positive trends in blended CPA within the first 14 to 21 days as our tracking infrastructure clean-up takes effect and creative sandbox winners emerge.'
    },
    {
      question: 'Do you handle creative production?',
      answer: 'Yes, we produce video hooks, static ads, copy variations, and landing page designs in-house based on data indicators.'
    },
    {
      question: 'What budgets do you work with?',
      answer: 'We typically partner with brands spending a minimum of $5,000/month up to enterprise brands spending $150,000+/month on ad networks.'
    },
    {
      question: 'How do you handle cookie-less tracking?',
      answer: 'We set up Server-Side Conversions API (CAPI) mapping interactions directly from your web server, rendering client-side cookie blockers obsolete.'
    }
  ];

  return (
    <ServicePageLayout
      title="Performance Marketing"
      heroSubtitle="We build revenue engines that attract, convert, and scale. Stop wasting budget on vanity clicks and start paying for actual customer acquisitions."
      heroVisual={<PerformanceVisual />}
      shiftHeading="The old [ad buying] model is broken."
      shiftTabs={shiftTabs}
      philosophyText="Most agencies build campaigns to get clicks. We build acquisition infrastructure to drive profits."
      whatIsHeading="Smarter media buying built for [margins]."
      whatIsDescription="Performance marketing at TechAsk isn't just about setting up Facebook Ads. We look at the entire lifecycle: from hook, landing page experience, lead quality, pipeline velocity, all the way to closed won revenue."
      whatIsBenefits={benefits}
      methodologyHeading="The Five Pillars of [High-Performing] Campaigns"
      methodologySubtext="How we ensure every single ad dollar converts into compounding business growth."
      methodologyPillars={pillars}
      frameworkHeading="Our [Scale] Framework"
      frameworkSubtext="Five phases designed to build, optimize, and compound your paid media channels."
      frameworkSteps={steps}
      outcomesHeading="Expected Outcomes"
      outcomes={outcomes}
      faqs={faqs}
    />
  );
}
