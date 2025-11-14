import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Home/>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
