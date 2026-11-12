export default function Contact() {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center' }}>Contáctanos</h1>
      <div style={{ backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <p><strong>Email:</strong> soporte@catalogomobile.com</p>
        <p><strong>Teléfono:</strong> +52 555 123 4567</p>
        <p><strong>Ubicación:</strong> Ciudad de México, México</p>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
          <input type="text" placeholder="Tu Nombre" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          <input type="email" placeholder="Tu Correo" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          <textarea placeholder="Tu Mensaje" rows="4" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}></textarea>
          <button type="button" style={{ padding: '10px', backgroundColor: '#6b21a8', color: 'white', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
}