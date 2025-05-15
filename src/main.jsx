import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { FilterProvider } from './context/FilterContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import ScrolToTop from './components/Other/ScrolToTop.js'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
     
        <CartProvider>
        <FilterProvider>
          <ScrolToTop />
          <ToastContainer closeButton={false} autoClose={3000} position={"bottom-right"}/>
          <App />
          </FilterProvider>
        </CartProvider>
     
    </BrowserRouter>
  </StrictMode>
);