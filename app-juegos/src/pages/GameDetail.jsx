import { useParams, Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export default function GameDetail() {
  const { id } = useParams(); // Obtenemos el ID desde la URL
  
  // Consumimos tu API con ?v=2 para saltar el caché
  const { data, loading, error } = useFetch(
    'https://raw.githubusercontent.com/Chiliswilis/api-juegos/refs/heads/main/db.json?v=6'
  );

  if (loading) return <h2 style={{ textAlign: 'center', padding: '40px' }}>Cargando detalles...</h2>;
  if (error) return <h2 style={{ textAlign: 'center', padding: '40px', color: 'red' }}>Error: {error}</h2>;

  // Buscamos el juego que coincida con el ID de la URL
  const game = data?.find((g) => g.id === parseInt(id));

  // Si el usuario pone un ID que no existe
  if (!game) return <h2 style={{ textAlign: 'center', padding: '40px' }}>Juego no encontrado</h2>;

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/" style={{ display: 'inline-block', marginBottom: '20px', textDecoration: 'none', color: '#6b21a8', fontWeight: 'bold' }}>
        ← Volver al catálogo
      </Link>
      
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <img 
          src={game.imagen} 
          alt={game.titulo} 
          style={{ width: '300px', borderRadius: '10px', objectFit: 'cover' }} 
        />
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h1 style={{ marginTop: 0, color: '#333' }}>{game.titulo}</h1>
          <p style={{ fontSize: '1.1rem', color: '#444' }}>{game.descripcion}</p>
          
          <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', lineHeight: '1.8' }}>
            <li><strong>🎮 Género:</strong> {game.genero}</li>
            <li><strong>🏢 Desarrollador:</strong> {game.desarrollador}</li>
            <li><strong>⭐ Calificación:</strong> {game.calificacion} / 5</li>
            <li><strong>🌐 Modalidad:</strong> {game.modalidad}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}