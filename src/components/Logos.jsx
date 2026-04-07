import { useSanity } from '../lib/useSanity'

const LOGOS_QUERY = `*[_type == "logos" && _id == "logos"][0]{ heading, brands }`

const FALLBACK = {
  heading: 'Trusted By Leading Brands',
  brands: ['Google Ads', 'Meta Business', 'HubSpot', 'Salesforce', 'Shopify', 'LinkedIn', 'Semrush', 'Klaviyo', 'Notion', 'Stripe'],
}

export default function Logos() {
  // const { data: logos } = useSanity(LOGOS_QUERY)
  const logos = null
  const heading = logos?.heading || FALLBACK.heading
  const brands  = (logos?.brands && logos.brands.length > 0) ? logos.brands : FALLBACK.brands
  const doubled = [...brands, ...brands]  // seamless loop

  return (
    <section className="py-16 overflow-hidden bg-white" style={{ fontFamily: "'Sora', sans-serif" }}>
      <div className="w-full max-w-[1160px] mx-auto px-6">
        <h2 className="text-center text-clamp-h2 mb-10 text-black tracking-tight" style={{ fontFamily: "'Sora', sans-serif" }}>
          {heading}
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
