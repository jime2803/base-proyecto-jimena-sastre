import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/components/styles.css"
import { RouterApp } from './router/RouterApp'
import "./styles/pages/Home.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterApp />
  </StrictMode>,
)
