
import { Link } from "react-router-dom"
import { useAuth } from "../context/UserContext"


const Header = () => {
  const { user } = useAuth()
  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="nav-content">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlMB8QIUMDZGt49epmEkVmaXzfLiraPRfMJA&s" alt="Logo" className="logo" />
          <ul className="nav-list">


            {
              user && <>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <button className="logout-button" onClick={handleLogout}>Cerrar sesión</button>
              </>
            }
            {
              !user && <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/registrate">Registrate</Link></li>
              </>
            }


          </ul>
        </div>
      </nav>
    </header>
  )
}

export { Header }