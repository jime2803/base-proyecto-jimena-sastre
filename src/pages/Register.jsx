import { useState } from "react"
import { Layout } from "../components/Layout"
import { use } from "react"

const Register = () => {

  /* con los estados controlamos los formularios*/

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")



  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    setSuccess("")

    /*validacion: para evitar que se envien formularios vacios sin input tengo que agregar un condicional para validar, las dos || se leen "o" y el signo de exclamacion invierte el valor booleano, en este caso seria: "si No hay username, o no hay emal o no hay password, debe retornar..." para completar la validacion, creamos el estado  setError y dentro del condicional lo referenciamos para que arroje un cartel en un parrafo al final y luego para vaciar el parrafo del error, debo validarlo antes de enviar el formulario con el handle submit arriba*/

    if (!username || !email || !password) {
      setError("Debes completar todos los campos")
      return
    }



    /* objeto*/
    const newUSer = {
      username: username,
      email: email,
      password: password,
    }

    setSuccess("Usuario registrado con éxito")
    /* este es el caso/la validacion de exito*/

    setUsername("")
    setEmail("")
    setPassword("")

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
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Ingrese su nombre de usuario"
              className="input-field"
              /*funcion para que guarde los cambios en el input*/
              onChange={(e) => setUsername(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <button type="submit" className="button-submit">
            Ingresar
          </button>
        </form>

        {error && <p id="error">Debes completar todos los campos</p>
        }

        {
          success && <p id="success">{success}</p>
        }

      </section>
    </Layout >
  )
}
export { Register }