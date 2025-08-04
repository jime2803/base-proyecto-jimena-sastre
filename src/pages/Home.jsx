import { Layout } from "../components/Layout"
import "../styles/pages/Home.css"
import { useEffect, useState } from "react"

const Home = () => {

  const [products, setProducts] = useState([])

  const fetchingProducts = async () => {
    const response = await fetch("http://fakestoreapi.com/Products", { method: "GET" })
    const data = await response.json()

    /*esta es una funcion asincrónica (demora porque nosotros no tenemos el control del tiempo), para esperar que el fetch me traiga (GET) la respuesta. si en lugar de usar el metodo GET usara el metodo POST, entenderia que estoy intentando "enviar" un producto. hay otros metodos: PUSH, PUT, DELETE.. */

    console.log(data)
  }

  useEffect(() => {
    fetchingProducts()
  }, [])
  /* useEffect es una funcion y espera dos parametros: un callback-una funcion y un array-Lista de dependencias, separados por una coma*/
  /*el Array vacio (dependencias) espera a que ejecute el return del jsx. si tiene algo, useEffect se va a ejecutar cada vez que se modifique lo que este adentro de la dependencia.*/



  /*Voy a pedir al react que primero muestre en el navegador la visual de lo que hay en return mientras espera que el fecth me traiga la data (primero muestra el return y luego ejecuta la funcion) - se aplica un efecto secundario --> un hook (use) */

  return (
    <Layout>
      <section>
        <h1>Bienvenido a Nuestra Tienda Virtual</h1>
        <p>Descubrí una sección exclusiva de productos para vos. Calidad, confianza y  atención personalizada.</p>
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
          products.map((product) => <h2></h2>)
        }

        {/* map es como el forEach que itera cada elemento  */}
        {/* <div className="product-loading">
          <p>Cargando productos...</p>
        </div> */}
      </section>
    </Layout>
  )
}
export { Home }