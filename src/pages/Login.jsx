import { useState } from "react"
import { Layout } from "../components/Layout"
import "../styles/pages/Login.css"
import { useAuth } from "../context/UserContext"
import { useNavigate } from "react-router-dom"


const Login = () => {
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { login } = useAuth()

  const nagivate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    console.log({ email, username, password })
    const isLogin = await login(email, username, password)
    setError("")
    setSuccess("")

    if (isLogin) {
      setEmail("")
      // setUsername("")
      setPassword("")
      nagivate("/")
    }
  }

  if (!email || !password) {
    setError("Debes completar todos los campos")
    return
  }

  const userLogin = {
    email: email,
    password: password,
  }

  setSuccess("Inicio de sesión exitoso")
  console.log("Datos de inicio de sesión:", userLogin)

  setEmail("")
  setPassword("")


  return (
    <Layout>
      <h1>Inicia Sesión</h1>
      <section>
        <h2>Bienvenido</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-login-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="correo-electronico"
              placeholder="Ingrese su correo electrónico aquí"
              className="input-field"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
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