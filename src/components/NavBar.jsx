import { NavLink } from 'react-router-dom'
import { CATEGORIES } from '../data'

const linkStyle = ({ isActive }) => ({
  padding: '8px 12px',
  textDecoration: 'none',
  borderRadius: 8,
  fontWeight: 600,
  background: isActive ? '#111' : '#eee',
  color: isActive ? '#fff' : '#111',
})

export default function NavBar() {
  return (
    <nav style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
      <NavLink to="/" style={linkStyle}>Inicio</NavLink>
      {CATEGORIES.map(cat => (
        <NavLink
          key={cat.id}
          to={cat.id === 'all' ? '/' : `/category/${cat.id}`}
          style={linkStyle}
        >
          {cat.label}
        </NavLink>
      ))}
    </nav>
  )
}
