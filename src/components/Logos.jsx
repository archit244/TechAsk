import GradientText from './GradientText'
import { useSanityData } from '../lib/sanityContext'
import { renderFormattedText } from '../lib/renderFormattedText'

const FALLBACK = {
  heading: 'Trusted By Leading Brands',
  brands: ['Google Ads', 'Meta Business', 'HubSpot', 'Salesforce', 'Shopify', 'LinkedIn', 'Semrush', 'Klaviyo', 'Notion', 'Stripe'],
}

export default function Logos() {
  const { logos } = useSanityData()
  const heading = logos?.heading || "Trusted by [Growth-Focused] Brands"
  const brands  = (logos?.brands && logos.brands.length > 0) ? logos.brands : FALLBACK.brands
  const doubled = [...brands, ...brands]  // seamless loop

  return (
    <section className="py-16 overflow-hidden bg-white" style={{ fontFamily: "'Sora', sans-serif" }}>
      <div className="w-full max-w-[1160px] mx-auto px-6 text-center">
        <h2 className="text-clamp-h2 mb-10 text-black inline-block" style={{ whiteSpace: 'pre-line' }}>
          {renderFormattedText(heading, ["#2563EB", "#7C3AED", "#2563EB"], 6)}
        </h2>
      </div>

      <div className="logos-strip">
        <div className="logos-track">
          {doubled.map((brand, i) => (
            <span
              key={i}
              className="px-10 py-3 font-bold text-[0.82rem] text-black/30
                         uppercase tracking-[0.08em] whitespace-nowrap"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
