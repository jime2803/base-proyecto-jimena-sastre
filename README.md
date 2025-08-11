# Base proyecto final
# Tienda React – FakeStoreAPI

## Objetivo
Extender y personalizar la plantilla base incorporando diseño responsive, búsqueda dinámica, manejo de usuarios (registro/login) y buenas prácticas de entrega.

## Funcionalidades implementadas
- **Diseño y Estilo**
  - Estilos globales coherentes (header, layout, footer).
  - Responsive:
    - Mobile: ≤ 480px
    - Tablet: ≤ 880px
    - Desktop: > 880px
  - **Home** con grid responsive de productos.

- **Interfaz**
  - **Búsqueda parcial en Home**: filtra mientras el usuario escribe (match parcial, sin recargar).
  - **Sobre Nosotros**: página pública con secciones de propósito, público y tecnologías.
  - Formularios con **mensajes UX claros** (requeridos/formatos).

- **Lógica y Usuarios**
  - **Registro** contra `https://fakestoreapi.com/users` (payload conforme a la API).
  - Integración con **Context API**: `register()` y `login()`.
  - **Simulación de sesión**: `setUser(true)` al registrarse.
  - **Login** contra `https://fakestoreapi.com/auth/login`.

## Estructura principal
src/
components/
Header.jsx
Footer.jsx
Layout.jsx
PrivateRoute.jsx
context/
UserContext.jsx
pages/
Home.jsx
Dashboard.jsx
Login.jsx
Register.jsx
SobreNosotros.jsx
NotFound.jsx
styles/
components/styles.css
pages/Home.css
pages/Dashboard.css
pages/Login.css
pages/Register.css
pages/SobreNosotros.css


## Requisitos previos
- Node.js 18+ y npm

## Instalación
```bash
git clone <tu-repo>
cd <tu-repo>
npm install

npm run dev

Abrí el navegador en la URL que indica Vite (por defecto, http://localhost:5173).
Uso
-Home: lista y búsqueda de productos en tiempo real.
-Login: credenciales de prueba
    -Usuario: mor_2314
    -Contraseña: 83r5^_
-Registro: crea un usuario en FakeStoreAPI y simula inicio de sesión (setUser(true)).
-Dashboard: formulario para alta de producto (demo), con validaciones y vista previa.

Validaciones de formularios
-Register
    -Requeridos: usuario, email, contraseña.
    -Email con formato válido.
    -Contraseña: mínimo 6 caracteres.
    -Feedback de error/éxito visible y estados de carga.

-Login
    -Requeridos: usuario y contraseña.
    -Contraseña: mínimo 6 caracteres.

-Dashboard
    -Requeridos: nombre, precio, descripción, imagen.
    -Nombre: mínimo 4 caracteres.
    -Precio: numérico y > 0.
    -Descripción: mínimo 10 caracteres.
    -Imagen: tipos permitidos JPG/PNG.

-APIs utilizadas
    -Productos: https://fakestoreapi.com/products
    -Login: https://fakestoreapi.com/auth/login
    -Usuarios: https://fakestoreapi.com/users

-Buenas prácticas de entrega
    -Proyecto basado en la plantilla indicada en clase.
    -Subido a repositorio personal.
    -Commits frecuentes y descriptivos.

-Créditos
    -FakeStoreAPI
    -React, React Router, Vite