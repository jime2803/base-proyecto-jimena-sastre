import { Layout } from "../components/Layout"

const Home = () => {
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
        <p>Elegí nuetsras categorías más populares.</p>

        {/* {Seccion reservada para carga diferida de productos} */}

        <div className="product-loading">
          <p>Cargando productos...</p>
        </div>
      </section>
    </Layout>
  )
}
export { Home }