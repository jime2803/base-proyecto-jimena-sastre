import { Layout } from "../components/Layout"
import "../styles/pages/SobreNosotros.css"

const SobreNosotros = () => {
  return (
    <Layout>
      <section className="nosotros-container">
        <h1 className="titulo-principal">Sobre Nosotros</h1>
        <p className="subtitulo">Conocé más sobre nuestro proyecto y nuestra misión</p>

        <div className="nosotros-cards">
          <div className="card-info">
            <h2><span className="icono" role="img" aria-label="Objetivo">🎯</span> Nuestro Proyecto</h2>
            <p>
              Este es un proyecto de e-commerce desarrollado como parte del curso de React. Se trata de una tienda online completa que simula una experiencia real de compra con funcionalidades de autenticación, gestión de productos y navegación intuitiva.
            </p>
            <p>
              El proyecto demuestra buenas prácticas de desarrollo frontend como gestión de estado, routing, formularios controlados y diseño responsive.
            </p>
          </div>

          <div className="card-info">
            <h2><span className="icono" role="img" aria-label="Personas">👥</span> Nuestro Público</h2>
            <p>
              Esta aplicación está dirigida a desarrolladores y estudiantes que quieren aprender React y tecnologías modernas de desarrollo web. También sirve como referencia para implementar funcionalidades comunes.
            </p>
            <p>
              Los usuarios pueden explorar productos, registrarse, iniciar sesión y gestionar el catálogo, ofreciendo una experiencia completa de e-commerce.
            </p>
          </div>

          <div className="card-info">
            <h2><span className="icono" role="img" aria-label="Rayo">⚡</span> Tecnologías y Enfoques</h2>
            <p><strong>Frontend:</strong> React 19, React Router DOM, Vite</p>
            <p><strong>Estilos:</strong> CSS con variables, Grid y Flexbox, diseño responsive</p>
            <p><strong>APIs:</strong> FakeStoreAPI para productos y autenticación</p>
            <p><strong>Enfoques:</strong> Componentes funcionales, Hooks, Context API, formularios controlados, validación en tiempo real</p>
          </div>
        </div>

        <section className="caracteristicas-grid">
          <h2>Características Técnicas</h2>
          <div className="grid-cards">
            <div className="grid-card">
              <h3>🔐 Autenticación y Seguridad</h3>
              <ul>
                <li>Sistema de login/logout con Context API.</li>
                <li>Rutas protegidas con PrivateRoute</li>
                <li>Validación de formularios en tiempo real</li>
                <li>Manejo de errores y feedback al usuario</li>
              </ul>
            </div>

            <div className="grid-card">
              <h3>📱 Diseño Responsive</h3>
              <ul>
                <li>Mobile-first design (hasta 480px)</li>
                <li>Optimización para tabletas (hasta 880px)</li>
                <li>Experiencia desktop (881px+)</li>
                <li>Sistema de grid adaptable</li>
              </ul>
            </div>

            <div className="grid-card">
              <h3>🔍 Funcionalidades Avanzadas</h3>
              <ul>
                <li>Búsqueda de productos en tiempo real</li>
                <li>CRUD completo de productos</li>
                <li>Modal popup para edición</li>
                <li>Loading states y manejo de errores</li>
              </ul>
            </div>

            <div className="grid-card">
              <h3>🎨 Experiencia de Usuario</h3>
              <ul>
                <li>Interfaz intuitiva y moderna</li>
                <li>Animaciones y transiciones suaves</li>
                <li>Mensajes de feedback claros</li>
                <li>Navegación fluida entre páginas</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="cta-final">
          <h2>¿Tenés alguna pregunta?</h2>
          <p>
            Este proyecto fue desarrollado como parte del aprendizaje de React y las tecnologías modernas de desarrollo web.
            Si tenés alguna consulta o sugerencia, no dudes en contactarnos.
          </p>
          <a href="https://github.com/jime2803" target="_blank" rel="noopener noreferrer" className="btn-cta">
            Ver más proyectos
          </a>
        </section>
      </section>
    </Layout>
  )
}

export { SobreNosotros }
