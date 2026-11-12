import { Link } from 'react-router-dom';

export default function GameCard({ game }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '15px',
      textAlign: 'center',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      backgroundColor: '#fff'
    }}>
      <img 
        src={game.imagen} 
        alt={game.titulo} 
        style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '8px' }} 
      />
      <h3 style={{ margin: '15px 0 5px 0' }}>{game.titulo}</h3>
      <p style={{ color: '#666', margin: '0 0 15px 0' }}>{game.genero}</p>
      
      <Link 
        to={`/juego/${game.id}`} 
        style={{
          display: 'inline-block',
          padding: '8px 16px',
          backgroundColor: '#6b21a8', // Color morado combinando con el logo
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          fontWeight: 'bold'
        }}
      >
        Ver Detalles
      </Link>
    </div>
  );
}