import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Login } from './pages/Login'
import "./styles/components/styles.css"
import { RouterApp } from './router/RouterApp'
import { Home } from './pages/Home'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>,
)
