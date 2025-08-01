import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './index.css' // Descomentar o añadir esta línea
import 'antd/dist/reset.css'; // Resetear los estilos de browser
import { BrowserRouter } from 'react-router-dom'; // Envuelve App con BrowserRouter

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
