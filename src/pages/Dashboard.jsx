import { useState } from "react"
import { Layout } from "../components/Layout"
import "../styles/pages/Dashboard.css"

const Dashboard = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (!name || !price || !description) {
      setError("Debes completar todos los campos del producto.")
      return
    }

    if (name.length < 3) {
      setError("El nombre debe tener al menos 4 caracteres")
      return
    }

    const newProduct = {
      id: crypto.randomUUID(),
      title: name,
      price: price,
      description: description,
      category: "",
      image: ""
    }

    // petición al backend mediante fetch -> método POST https://fakestoreapi.com/products
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    })

    const data = await response.json()
    setProduct(data)
    setName("")
    setPrice("")
    setDescription("")
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
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div className="form-group">
            <label htmlFor="precio">Precio</label>
            <input
              type="number"
              id="precio"
              name="precio"
              placeholder="Ej: 4999.99"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </div>

          <div className="form-group">
            <label htmlFor="descripcion">Descripción</label>
            <textarea
              id="descripcion"
              name="descripcion"
              rows="4"
              placeholder="Escribí una breve descripción del producto..."
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></textarea>
          </div>


          {error && <p className="error-message">{error}</p>}

          <button type="submit" id="submit">
            Guardar producto
          </button>
        </form>



        {
          product && <div>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>
          </div>
        }
      </section>
    </Layout>
  )
}

export { Dashboard }