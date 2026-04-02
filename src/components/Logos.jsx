const brands = ['Manipal Cigna', 'Cadabams', 'Hombale Films', 'Club Mahindra', 'Vetic', 'Zoomcar', 'Kotak Securities', 'Quantum Leap']
const doubled = [...brands, ...brands]

export default function Logos() {
  return (
    <section className="logos-section">
      <div className="container">
        <h2 className="logos-heading">Trusted by Leading Brands</h2>
      </div>
      <div className="logos-strip">
        <div className="logos-track">
          {doubled.map((b, i) => <div className="logo-chip" key={i}>{b}</div>)}
        </div>
      </div>
    </section>
  )
}
