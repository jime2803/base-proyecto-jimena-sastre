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

        <section className="caracteristicas">
          <h2>Características Técnicas</h2>
          <p>Este proyecto incluye diseño adaptativo, estructura modular y uso de buenas prácticas en frontend.</p>
        </section>
      </section>
    </Layout>
  )
}

export { SobreNosotros }
