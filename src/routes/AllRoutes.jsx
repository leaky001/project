import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages";
import { ProductList } from "../pages/index.js";
import ProductDetails from "../pages/ProductDetails.jsx";
import CartPage from "../pages/Cart/component/CartPage.jsx";
import { Login } from "../pages/Login.jsx";
import { Register } from "../pages/Register.jsx";
import OrderPages from "../pages/Order/OrderPages.jsx";
import DashboardPage from "../pages/DashBoard/DashboardPage.jsx";


export const AllRoutes = () => {
  return (
    
      <>
      <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/products" element={<ProductList/>}/>
    <Route path="products/:id" element={<ProductDetails/>}/>
    <Route path="login" element={<Login/>}/>
    <Route path="register" element={<Register/>}/>
    <Route path="cart" element={<CartPage/>}/>
    <Route path="order-summary" element={<OrderPages/>}/>
    <Route path="dashboard" element={<DashboardPage/>}/>
      </Routes>
      </>
    
  )
}


