import { Layout } from "../components/Layout"
import "../styles/pages/NotFound.css"

const NotFound = () => {
  return (
    <Layout>
      <div className="notfound-container">
        <h1>Error 404</h1>
        <h2>Página no encontrada</h2>
        <p>Lo sentimos, la página que estás buscando no existe o fue movida.</p>
        <Link to="/" className="notfound-link">Volver al inicio</Link>
      </div>
    </Layout>
  )
}
export { NotFound }

