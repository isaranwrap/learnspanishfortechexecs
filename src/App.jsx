import React from 'react'

export default function App() {
  return (
    <div style={styles.container}>
      <header style={styles.hero}>
        <h1>Tech‑English Accelerator</h1>
        <p>Habla como un líder global. Pitch, demo y vende en inglés con confianza.</p>
        <a href="https://forms.gle/your-google-form-link" style={styles.cta}>
          Aplica ahora
        </a>
      </header>

      <section style={styles.section}>
        <h2>¿Qué obtienes?</h2>
        <ul>
          <li>4 semanas de simulación de pitch con feedback en vivo</li>
          <li>Frases clave para tu presentación</li>
          <li>Video personalizado con tus avances</li>
          <li>Grupo privado de fundadores</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Video de Introducción</h2>
        <div style={styles.videoWrapper}>
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Tech-English Accelerator"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={styles.video}
          ></iframe>
        </div>
      </section>

      <footer style={styles.footer}>
        <p>Precio early‑access: USD $147 • Garantía de progreso de 30 días</p>
        <a href="https://forms.gle/your-google-form-link" style={styles.ctaTransparent}>
          Sí, quiero mejorar mi pitch
        </a>
      </footer>
    </div>
  )
}

const styles = {
  container: { fontFamily: 'Inter, sans-serif', color: '#333', padding: '0 1rem', maxWidth: '800px', margin: '0 auto' },
  hero: { textAlign: 'center', padding: '4rem 0' },
  cta: { display: 'inline-block', marginTop: '1rem', padding: '0.8rem 1.6rem', background: '#0066FF', color: '#fff', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' },
  section: { margin: '3rem 0' },
  videoWrapper: { position: 'relative', paddingBottom: '56.25%', height: 0 },
  video: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' },
  footer: { textAlign: 'center', padding: '2rem 0', borderTop: '1px solid #eee' },
  ctaTransparent: { display: 'inline-block', marginTop: '1rem', padding: '0.8rem 1.6rem', background: 'transparent', color: '#0066FF', border: '2px solid #0066FF', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold' }
}
