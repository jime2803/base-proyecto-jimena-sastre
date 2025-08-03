const Header = () => {
  return (
    <header className="header">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6r66wSgNLORR5YsgEqjdHTxpbRq7afXJPow&s" alt="Logo" />
      <nav className="nav">
        <ul className="nav-list">
          {/* Cambiar elementos a por componentes Link to de react-router-dom. De esta manera el navegador no se refresca y solo cambia de un componente a otro  */}
          <li><a href="/">Inicio</a></li>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/registrate">Registrate</a></li>
          <button>Cerrar sesión</button>
        </ul>
      </nav>
    </header >
  )
}

export { Header }