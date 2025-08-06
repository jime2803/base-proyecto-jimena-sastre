import { useState } from "react"
import { Layout } from "../components/Layout"
import "../styles/pages/Dashboard.css"

const Dashboard = () => {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)
  const [image, setImage] = useState(null)
  const [success, setSuccess] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!name || !price || !description || !image) {
      setError("Debes completar todos los campos del producto.")
      return
    }

    if (name.length < 4) {
      setError("El nombre debe tener al menos 4 caracteres")
      return
    }

    if (isNaN(price)) {
      setError("Debes ingresar un número válido para el precio.")
      return
    }

    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"]
    if (!allowedTypes.includes(image.type)) {
      setError("Solo se permiten imágenes JPG o PNG.")
      return
    }

    const newProduct = {
      id: crypto.randomUUID(),
      title: name,
      price: price,
      description: description,
      category: "",
      image: "",
      image: URL.createObjectURL(image)
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
    setSuccess("Producto agregado satisfactoriamente.")
    setName("")
    setPrice("")
    setDescription("")
    setImage(null)
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
              type="text"
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

          <div className="form-group">
            <label htmlFor="imagen">Imagen del producto</label>
            <input
              type="file"
              id="imagen"
              name="imagen"
              accept=".jpg, .jpeg, .png"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}


          <button type="submit" id="submit">
            Guardar producto
          </button>
        </form>



        {
          product &&
          <div className="product-preview">
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <p>{product.description}</p>
            {product.image && <img src={product.image} alt={product.title} className="preview-img" />}
          </div>
        }
      </section>
    </Layout>
  )
}

export { Dashboard }