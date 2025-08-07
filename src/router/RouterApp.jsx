import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Dashboard } from "../pages/Dashboard"
import { Register } from "../pages/Register"
import { NotFound } from "../pages/NotFound"
import { Login } from "../pages/Login"
import { PrivateRoute } from "../components/PrivateRoute"
import { SobreNosotros } from "../pages/SobreNosotros"

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrate" element={<Register />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  )
}

export { RouterApp }