import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/UserContext"

const Header = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="nav-content">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlMB8QIUMDZGt49epmEkVmaXzfLiraPRfMJA&s"
            alt="Logo"
            className="logo"
          />

          {user ? (
            <div className="nav-menu">
              <ul className="nav-left">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
              </ul>
              <ul className="nav-right">
                <li>
                  <button className="logout-button" onClick={handleLogout}>
                    Cerrar sesión
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <ul className="nav-list">
              <li><Link to="/login">Iniciar Sesión</Link></li>
              <li><Link to="/registrate">Registrarse</Link></li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  )
}

export { Header }
