import { FadeUp, StaggerGrid, StaggerItem } from './Motion'

const leaders = [
  { name: 'Imthiyaz Ahmed', role: 'Group Head - Performance Marketing' },
  { name: 'Rachita Sharma', role: 'VP - Client Strategy & Growth' },
  { name: 'Yash Upadhayay', role: 'Head of SMB' },
  { name: 'Dilip Kumar B', role: 'Director of People & Culture' },
  { name: 'Dipikka M', role: 'Director of People & Culture' },
  { name: 'Venkatesh S', role: 'Director - Performance Marketing' },
  { name: 'Karan Mathur', role: 'Sr. Director - SEO' },
]

export default function Leadership() {
  return (
    <section className="leadership-section">
      <div className="container">
        <FadeUp><h2 className="leadership-heading">Leadership</h2></FadeUp>
        <StaggerGrid className="leadership-grid">
          {leaders.map((l) => (
            <StaggerItem key={l.name}>
              <div className="leader-card">
                <div className="leader-photo">
                  <div className="leader-initials">
                    {l.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h4 className="leader-name">{l.name}</h4>
                <p className="leader-role">{l.role}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  )
}
