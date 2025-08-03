const Header = () => {
  return (
    <header className="header">
      <img src="http://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png" alt="Imagen de Logo" />
      <nav>
        <ul>
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