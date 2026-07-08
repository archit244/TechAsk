import { useSanityData } from '../lib/sanityContext'
import { urlFor } from '../lib/sanityClient'

export default function Navbar() {
  const { navbar: navData } = useSanityData()
  const logoUrl = navData?.logo ? urlFor(navData.logo).url() : "/Gemini_Generated_Image_k3eigvk3eigvk3ei-removebg-preview.png"

  return (
    <nav style={{
      position: 'relative', top: 0, zIndex: 1000, width: '100%',
      background: '#2563EB',
      /* no border-bottom: seamless with hero */
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 5%', height: 64,
    }}>
      {/* Logo */}
      <a id="nav-logo" href="#" style={{ 
        textDecoration: 'none', 
        display: 'flex', 
        alignItems: 'center',
        position: 'relative',
        width: '180px', 
        height: '64px',
        zIndex: 1001
      }}>
        <img 
          src={logoUrl}
          alt="TechAsk Logo" 
          style={{ 
            height: '110px', 
            width: 'auto',
            display: 'block',
            position: 'absolute',
            top: '-15px', 
            left: 0,
            filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.1))'
          }} 
        />
      </a>


    </nav>
  )
}
