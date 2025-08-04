import { useState } from "react"
import { Layout } from "../components/Layout"
import "../styles/pages/Dashboard.css"

const Dashboard = () => {
  const [nombre, setNombre] = useState("")
  const [precio, setPrecio] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    if (!nombre || !precio || !descripcion) {
      setError("Debes completar todos los campos del producto.")
      return
    }

    const newProduct = {
      nombre,
      precio,
      descripcion,
    }

    setSuccess("Producto guardado con éxito.")
    console.log("Nuevo producto:", newProduct)

    setNombre("")
    setPrecio("")
    setDescripcion("")
  }

  return (
    <Layout>
      <section className="dashboard-container">
        <h1>Panel de Administración</h1>
        <h2>Cargar nuevo producto</h2>

        <form className="product-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre del producto</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ej: Camiseta algodón"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
            />
          </div>

          <div className="form-group">
            <label htmlFor="precio">Precio</label>
            <input
              type="number"
              id="precio"
              name="precio"
              placeholder="Ej: 4999.99"
              onChange={(e) => setPrecio(e.target.value)}
              value={precio}
            />
          </div>

          <div className="form-group">
            <label htmlFor="descripcion">Descripción</label>
            <textarea
              id="descripcion"
              name="descripcion"
              rows="4"
              placeholder="Escribí una breve descripción del producto..."
              onChange={(e) => setDescripcion(e.target.value)}
              value={descripcion}
            ></textarea>
          </div>

          <button type="submit" id="submit">
            Guardar producto
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </section>
    </Layout>
  )
}

export { Dashboard }