
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="nav-content">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlMB8QIUMDZGt49epmEkVmaXzfLiraPRfMJA&s" alt="Logo" className="logo" />
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/registrate">Registrate</Link></li>
            <li>
              <button className="logout-button">Cerrar sesión</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export { Header }