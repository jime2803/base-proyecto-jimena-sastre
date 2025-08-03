const Header = () => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="nav-content">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlMB8QIUMDZGt49epmEkVmaXzfLiraPRfMJA&s" alt="Logo" className="logo" />
          <ul className="nav-list">
            <li><a href="/">Home</a></li>
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/registrate">Registrate</a></li>
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