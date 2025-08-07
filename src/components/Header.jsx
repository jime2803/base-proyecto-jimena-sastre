import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/UserContext"
import { useState } from "react"

const Header = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
    setMenuOpen(false)
    navigate("/login")
  }
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
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

          {/* Botón hamburguesa */}
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>

          <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
            {user ? (
              <>
                <li>
                  <Link to="/" onClick={closeMenu}>Inicio</Link>
                </li>
                <li>
                  <Link to="/dashboard" onClick={closeMenu}>Dashboard</Link>
                </li>
                <li>
                  <Link to="/sobre-nosotros">Sobre Nosotros</Link>
                </li>
                <li>
                  <button className="logout-button" onClick={handleLogout}>
                    Cerrar sesión
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" onClick={closeMenu}>Login</Link>
                </li>
                <li>
                  <Link to="/registrate" onClick={closeMenu}>Registrate</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export { Header }
