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

  const logout = () => {
    setUser(null)
  }

  return (
    <UserContext.Provider value={{ login, logout, user }}>
      {props.children}
    </UserContext.Provider>
  )
}

const useAuth = () => useContext(UserContext)

export { UserProvider, useAuth }
