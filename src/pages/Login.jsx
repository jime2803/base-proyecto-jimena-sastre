import { Layout } from "../components/Layout";
import "../styles/pages/Login.css";

const Login = () => {
  return (
    <Layout>
      <h1>Inicia Sesión</h1>
      <section>
        <h2>Bienvenido</h2>
        <form className="login-form">
          <div className="form-login-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="correo-electronico"
              placeholder="Ingrese su correo electrónico aquí"
              className="input-field"
            />
          </div>

          <div className="form-login-group">
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
  );
};

export { Login };
