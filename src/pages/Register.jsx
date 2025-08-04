import { Layout } from "../components/Layout"

const Register = () => {
  return (
    <Layout>
      <h1>Registrate</h1>
      <section>
        <h2>Bienvenido</h2>
        <form className="register-form">

          <div className="form-register-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Ingrese su nombre de usuario"
              className="input-field"
            />
          </div>

          <div className="form-register-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="correo-electronico"
              placeholder="Ingrese su correo electrónico aquí"
              className="input-field"
            />
          </div>

          <div className="form-register-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              className="input-field"
            />
          </div>

          <button type="submit" className="button-submit">
            Ingresar
          </button>
        </form>
      </section>
    </Layout>
  )
}
export { Register }