import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ background: '#333', padding: '15px 30px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
      <h2 style={{ margin: 0 }}>🎮 Catálogo Mobile</h2>
      <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Inicio</Link>
        <Link to="/acerca-de" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Acerca de</Link>
        <Link to="/contacto" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>Contacto</Link>
      </div>
    </nav>
  );
}