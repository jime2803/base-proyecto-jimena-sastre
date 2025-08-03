import { Layout } from "../components/Layout"
import "../styles/pages/Login.css"

const Login = () => {
  return (
    <Layout>
      <h1>Inicia Sesión</h1>
      <section>
        <h2>Hola, bienvenido de nuevo</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre aquí" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="correo-electronico" placeholder="Ingrese su correo electrónico aquí" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <textarea id="password" name="password" placeholder="Contraseña"></textarea>
          </div>

          <button type="submit" disabled>Inresar</button>
        </form>
      </section>
    </Layout>
  )
}
export { Login }