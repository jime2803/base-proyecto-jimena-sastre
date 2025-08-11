import { useState, useEffect } from "react"
import { Layout } from "../components/Layout"
import { useAuth } from "../context/UserContext"
import { useNavigate } from "react-router-dom"
import "../styles/pages/Register.css"

const Register = () => {

  /* con los estados controlamos los formularios*/

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  const { register } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!success) return
    const t = setTimeout(() => navigate("/"), 1200)
    return () => clearTimeout(t)
  }, [success, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    setLoading(true)

    /*validacion: para evitar que se envien formularios vacios sin input tengo que agregar un condicional para validar, las dos || se leen "o" y el signo de exclamacion invierte el valor booleano, en este caso seria: "si No hay username, o no hay emal o no hay password, debe retornar..." para completar la validacion, creamos el estado  setError y dentro del condicional lo referenciamos para que arroje un cartel en un parrafo al final y luego para vaciar el parrafo del error, debo validarlo antes de enviar el formulario con el handle submit arriba*/

    if (!username || !email || !password) {
      setError("Debes completar usuario, email y contraseña")
      setLoading(false)
      return
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!emailOk) {
      setError("Formato de email inválido")
      setLoading(false)
      return
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres")
      setLoading(false)
      return
    }

    const { ok, error: apiError } = await register({
      username, email, password, firstName, lastName, phone
    })

    // /* objeto*/
    // const newUSer = {
    //   username: username,
    //   email: email,
    //   password: password,
    // }

    if (ok) {
      setSuccess("Usuario registrado con éxito")
      /* este es el caso/la validacion de exito*/
      setUsername(""); setEmail(""); setPassword("")
      setFirstName(""); setLastName(""); setPhone("")
      // setTimeout(() => navigate("/"), 1200)
    } else {
      setError(apiError || "Fallo el registro")
    }
    setLoading(false)

    /*limpia el valor de los estados*/
  }

  /*el onsubmit del formulario abajo necesita de muchas fucniones y cosas, por lo tanto no podemos hacerlo en una linea como el email, password y username, abajo. y debemos hacer una funcion completa aparte y luego referenciarla por ejemplo con handleSubmit */


  return (
    <Layout>
      <h1>Registrate</h1>
      <section>
        <h2>Bienvenido</h2>
        <form className="register-form" onSubmit={handleSubmit} >

          <div className="form-register-group">
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Ingrese su nombre de usuario"
              className="input-field"
              /*funcion para que guarde los cambios en el input*/
              onChange={(e) => setUsername(e.target.value)} disabled={loading}
              value={username} /*cuando se limpien los estados, de esta forma tambien se va a limpiar el valor del formulario al darle el mismo valor que le puse en el objeto de username, es decir, "username", de igual manera hago con el email y el password*/
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
              onChange={(e) => setEmail(e.target.value)} disabled={loading}
              value={email}
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
              onChange={(e) => setPassword(e.target.value)} disabled={loading}
              value={password}
            />
          </div>

          <div className="form-register-group">
            <label htmlFor="firstName">Nombre</label>
            <input
              type="text"
              id="firstName"
              className="input-field"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)} disabled={loading}
            />
          </div>

          <div className="form-register-group">
            <label htmlFor="lastName">Apellido</label>
            <input
              id="lastName"
              type="text"
              className="input-field"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} disabled={loading}
            />
          </div>

          <div className="form-register-group">
            <label htmlFor="phone">Teléfono</label>
            <input
              id="phone"
              type="tel"
              className="input-field"
              value={phone}
              onChange={(e) => setPhone(e.target.value)} disabled={loading}
            />
          </div>

          <button type="submit" className="button-submit" disabled={loading}>
            Ingresar
          </button>
        </form>

        {error && <p id="error">{error}</p>}

        {success && <p id="success">{success}</p>}

      </section>
    </Layout >
  )
}
export { Register }