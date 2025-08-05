import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/UserContext"

const Header = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login") // Redirige al login después de cerrar sesión
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
          <ul className="nav-list">
            {user ? (
              <>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li>
                  <button className="logout-button" onClick={handleLogout}>
                    Cerrar sesión
                  </button>
                </li>
              </>
            ) : (
              <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/registrate">Registrate</Link></li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export { Header }
