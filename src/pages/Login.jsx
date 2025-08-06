import { useState } from "react"
import { Layout } from "../components/Layout"
import "../styles/pages/Login.css"
import { useAuth } from "../context/UserContext"
import { useNavigate } from "react-router-dom"


const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const { login } = useAuth()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      setError("")
      setSuccess("")

      if (!username || !password) {
        setError("Debes completar todos los campos")
        return
      }

      const isLogin = await login(username, password)

      if (isLogin) {
        const userLogin = {
          username,
          password,
        }

        setSuccess("Inicio de sesión exitoso")
        console.log("Datos de inicio de sesión:", userLogin)
        setUsername("")
        setPassword("")
        navigate("/")
      } else {
        setError("Credenciales incorrectas")
      }
    } catch (err) {
      setError("Ocurrió un error. Inténtalo de nuevo.")
      console.error(err)
    }
  }

  return (
    <Layout>
      <h1>Inicia Sesión</h1>
      <section>
        <h2>Bienvenido</h2>
        <p><b>Credenciales de prueba:</b>
          <br />
          <b>Usuario:</b> mor_2314,
          <br />
          <b>Contraseña:</b> 83r5^_</p>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-login-group">
            <label htmlFor="username">Nombre de Usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Ingrese su nombre de usuario"
              className="input-field"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <button type="submit" className="button-submit">
            Ingresar
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}
        {success && <p className="success-message">{success}</p>}
      </section>
    </Layout>
  )
}

export { Login }