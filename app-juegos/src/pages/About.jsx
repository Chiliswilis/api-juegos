export default function About() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Acerca de este Proyecto</h1>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#444' }}>
        Este es el Proyecto Final Integrador del curso de React. Consiste en un catálogo de videojuegos móviles 
        que consume una base de datos propia en formato JSON alojada en GitHub. 
      </p>
      <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#444' }}>
        Aquí aplicamos conceptos clave como componentes, hooks, enrutamiento dinámico, diseño responsivo y consumo de APIs.
      </p>
    </div>
  );
}