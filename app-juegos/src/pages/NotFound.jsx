import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '3rem', margin: '10px' }}>404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la ruta que buscas no existe en este catálogo.</p>
      <Link to="/" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', backgroundColor: '#6b21a8', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
        Volver al inicio
      </Link>
    </div>
  );
}