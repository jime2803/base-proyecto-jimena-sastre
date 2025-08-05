import { Layout } from "../components/Layout"
import "../styles/pages/Home.css"
import { useEffect, useState } from "react"
import { useAuth } from "../context/UserContext"


const Home = () => {
  const [products, setProducts] = useState([])
  const [showPopup, setShowPopup] = useState(null)
  const [productToEdit, setProductToEdit] = useState(null)
  const [titleEdit, setTitleEdit] = useState("")
  const [priceEdit, setPriceEdit] = useState("")
  const [descriptionEdit, setDescriptionEdit] = useState("")
  const [categoryEdit, setCategoryEdit] = useState("")
  const [imageEdit, setImageEdit] = useState("")


  // simulando existencia del usuario, proximamente este estado será global
  const { user } = useAuth()


  /*esta es una funcion asincrónica (demora porque nosotros no tenemos el control del tiempo), para esperar que el fetch me traiga (GET) la respuesta. si en lugar de usar el metodo GET usara el metodo POST, entenderia que estoy intentando "enviar" un producto. hay otros metodos: PUSH, PUT, DELETE.. */
  const fetchingProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products", { method: "GET" })
    const data = await response.json()
    setProducts(data)
  }



  /* useEffect es una funcion y espera dos parametros: un callback-una funcion y un array-Lista de dependencias, separados por una coma*/
  /*el Array vacio (dependencias) espera a que ejecute el return del jsx. si tiene algo, useEffect se va a ejecutar cada vez que se modifique lo que este adentro de la dependencia.*/
  /*Voy a pedir al react que primero muestre en el navegador la visual de lo que hay en return mientras espera que el fecth me traiga la data (primero muestra el return y luego ejecuta la funcion) - se aplica un efecto secundario --> un hook (use) */

  useEffect(() => {
    fetchingProducts()
  }, [])
  const handleDelete = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, { method: "DELETE" })

    if (response.ok) {
      setProducts(prevProduct => prevProduct.filter((product) => product.id != id))
      // fetchingProducts()
    }
  }

  const handleOpenEdit = (product) => {
    setShowPopup(true)
    setProductToEdit(product)
    setTitleEdit(product.title)
    setPriceEdit(product.price)
    setDescriptionEdit(product.description)
    setCategoryEdit(product.category)
    setImageEdit(product.image)
  }

  // petición al backend mediante fetch para modificar-> método PATCH / PUT https://fakeproductapi.com/products
  const handleUpdate = async (e) => {
    e.preventDefault()

    const updatedProduct = {
      id: productToEdit.id,
      title: titleEdit,
      price: Number(priceEdit),
      description: descriptionEdit,
      category: categoryEdit,
      image: imageEdit
    }

    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productToEdit.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedProduct)
      })

      if (response.ok) {
        const data = await response.json()
        setProducts(prevProduct =>
          prevProduct.map((product) =>
            product.id === productToEdit.id
              ? data
              : product
          ))
        // fetchingProducts()
      }
      setShowPopup(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Layout>
      <section>
        <h1>Bienvenido a Nuestra Tienda Virtual</h1>
        <p>Descubrí una sección exclusiva de productos para vos. Calidad, confianza y atención personalizada.</p>
      </section>
      <section>
        <h2>¿Porqué elegirnos?</h2>
        <ul>
          <li>
            <h3>Envíos a todo el país</h3>
            <p>Recibí tu compra en la puerta de tu casa estés donde estés.</p>
          </li>
          <li>
            <h3>Pagos seguros</h3>
            <p>Trabajamos con plataformas que garantizan tu seguridad.</p>
          </li>
          <li>
            <h3>Atención personalizada</h3>
            <p>Estamos para ayudarte en todo momento.</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Nuestros productos</h2>
        <p>Elegí nuestras categorías más populares.</p>


        {
          showPopup && <section className="popup-edit">
            <h2>Editando producto.</h2>
            <button onClick={() => setShowPopup(null)}>Cerrar</button>
            <form onSubmit={handleUpdate}>
              <input
                type="text"
                placeholder="Ingrese el titulo"
                value={titleEdit}
                onChange={(e) => setTitleEdit(e.target.value)}
              />
              <input
                type="number"
                placeholder="Ingrese el precio"
                value={priceEdit}
                onChange={(e) => setPriceEdit(e.target.value)}
              />
              <textarea
                placeholder="Ingrese la descripción"
                value={descriptionEdit}
                onChange={(e) => setDescriptionEdit(e.target.value)}
              ></textarea>
              <input
                type="text"
                placeholder="Ingrese la categoria"
                value={categoryEdit}
                onChange={(e) => setCategoryEdit(e.target.value)}
              />
              <input
                type="text"
                placeholder="Ingrese la URL de la imagen"
                value={imageEdit}
                onChange={(e) => setImageEdit(e.target.value)}
              />
              <button>Actualizar</button>
            </form>
          </section>
        }
        <div>
          {/* map es como el forEach que itera cada elemento. siempre que hago un map neceitso una propiedad KEY, qsiempre uso el ID como identificador  */}

          {/* <div className="product-loading">
          <p>Cargando productos...</p>
        </div> */}
          {
            products.map((product) => <div key={product.id}>
              <h2 key={product.id}>{product.title}</h2>
              <img width="80px" src={product.image} alt={`Imagen de ${product.title}`} />
              <p>${product.price}</p>
              <p>{product.description}</p>
              <p><strong>{product.category}</strong></p>
              {
                user && <div className="product-actions">
                  <button onClick={() => handleOpenEdit(product)}>Actualizar</button>
                  <button onClick={() => handleDelete(product.id)}>Borrar</button>
                </div>
              }
            </div>)
          }
        </div>

      </section>
    </Layout>
  )
}
export { Home }