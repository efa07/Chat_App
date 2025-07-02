import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import './index.css'
import {SocketContextProvider} from "./context/socketContex.jsx"
import {AuthContextProvider} from "./context/authContext.jsx"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <SocketContextProvider>
    <App />
      </SocketContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
)
