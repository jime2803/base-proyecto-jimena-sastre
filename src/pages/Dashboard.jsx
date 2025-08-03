import { Layout } from "../components/Layout"
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <Layout>
      <section className="dashboard-container">
        <h1>Panel de Administración</h1>
        <h2>Cargar nuevo producto</h2>

        <form className="product-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre del producto</label>
            <input type="text" id="nombre" name="nombre" placeholder="Ej: Camiseta algodón" />
          </div>

          <div className="form-group">
            <label htmlFor="precio">Precio</label>
            <input type="number" id="precio" name="precio" placeholder="Ej: 4999.99" />
          </div>

          <div className="form-group">
            <label htmlFor="descripcion">Descripción</label>
            <textarea id="descripcion" name="descripcion" rows="4" placeholder="Escribí una breve descripción del producto..."></textarea>
          </div>

          <button type="submit" disabled>Guardar producto</button>
        </form>
      </section>
    </Layout>
  )
}

export default Dashboard;
