import { useFetch } from '../hooks/useFetch';
import GameCard from '../components/GameCard';

export default function Home() {
  // Consumimos tu API personalizada alojada en GitHub con ?v=2 para saltar el caché
  const { data, loading, error } = useFetch(
    'https://raw.githubusercontent.com/Chiliswilis/api-juegos/refs/heads/main/db.json?v=6'
  );

  if (loading) return <h2 style={{ textAlign: 'center', padding: '40px' }}>Cargando catálogo...</h2>;
  if (error) return <h2 style={{ textAlign: 'center', padding: '40px', color: 'red' }}>Error: {error}</h2>;

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Juegos Móviles Destacados</h1>
      
      {/* Cuadrícula responsiva para las tarjetas */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '25px' 
      }}>
        {data && data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}