import { createContext, useContext, useState } from "react"

const UserContext = createContext()

const UserProvider = (props) => {
  const [user, setUser] = useState(null)

  const login = async (username, password) => {
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      })

      if (!response.ok) {
        console.warn("Respuesta del servidor no OK:", response.status)
        return false
      }

      const data = await response.json()
      console.log("Token recibido:", data)

      if (data.token) {
        setUser({ username, token: data.token })
        return true
      } else {
        return false
      }
    } catch (err) {
      console.error("Error al hacer login:", err)
      return false
    }
  }

  const register = async (form) => {
    try {
      const payload = {
        email: form.email,
        username: form.username,
        password: form.password,
        name: {
          firstname: form.firstName || "Nombre",
          lastname: form.lastName || "Apellido",
        },
        address: {
          city: form.city || "Concepción del Uruguay",
          street: form.street || "Calle Falsa",
          number: Number(form.number || 123),
          zipcode: form.zipcode || "3260",
          geolocation: { lat: "-32.4825", long: "-58.2322" }
        },
        phone: form.phone || "11-0000-0000"
      }

      const res = await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      })

      if (!res.ok) {
        return { ok: false, error: `HTTP ${res.status}` }
      }

      const data = await res.json()
      setUser(true)
      return { ok: true, data }
    } catch (err) {
      console.error("register() error:", err)
      return { ok: false, error: "network-error" }
    }
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <UserContext.Provider value={{ login, register, logout, user }}>
      {props.children}
    </UserContext.Provider>
  )
}

const useAuth = () => useContext(UserContext)

export { UserProvider, useAuth }
