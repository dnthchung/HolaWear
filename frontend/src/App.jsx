import React, { useState, useEffect, createContext } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "react-day-picker/dist/style.css";
import "./App.scss";
//instance
import instance from "./utils/index";

import HomePage from "./pages/main/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/error/NotFoundPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import UserProfile from "./pages/auth/UserProfile";

//admin
import AdminLayout from "./pages/admin/Layout";
import ProtectedRouteAdmin from "./components/admin/ProtectedRouteAdmin";
import Dashboard from "./pages/admin/Dashboard";
import ManageBrand from "./pages/admin/ManageBrand";
import ManageCategory from "./pages/admin/ManageCategory";
import ManageProduct from "./pages/admin/ManageProduct";
import ManageUser from "./pages/admin/ManageUser";
import ManageOrder from "./pages/admin/ManageOrder";
import ManageColor from "./pages/admin/ManageColor";
import ManageType from "./pages/admin/ManageType";

export const UserContext = createContext({});

function App() {
  const location = useLocation();
  const [userAuth, setUserAuth] = useState({});
  const isAdminRoute = location.pathname.includes("/admin");
  const isUserRoute = location.pathname.includes("/user");

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [loginTypes, setLoginTypes] = useState([]);
  const [orders, setOrders] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    const accessToken = sessionStorage.getItem("accessToken");
    if (user && accessToken) {
      setUserAuth({ accessToken, user: JSON.parse(user) });
    } else {
      setUserAuth({ accessToken: null });
    }
  }, []);

  return (
    <>
      <UserContext.Provider value={{ userAuth, setUserAuth }}>
        <Toaster />
        {!isAdminRoute && <Header />}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/login" element={!userAuth.accessToken ? <LoginPage /> : <Navigate to="/" />} />
            <Route path="/register" element={!userAuth.accessToken ? <RegisterPage /> : <Navigate to="/" />} />
            <Route path="/user/profile" element={userAuth.accessToken ? <UserProfile /> : <Navigate to="/login" />} />
            <Route path="/forgot-password" element={!userAuth.accessToken ? <ForgotPasswordPage /> : <Navigate to="/" />} />
            {/* Admin Routes */}
            <Route element={<ProtectedRouteAdmin />}>
              <Route element={<AdminLayout />}>
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/brands" element={<ManageBrand />} />
                <Route path="/admin/categories" element={<ManageCategory />} />
                <Route path="/admin/products" element={<ManageProduct />} />
                <Route path="/admin/users" element={<ManageUser />} />
                <Route path="/admin/orders" element={<ManageOrder />} />
                <Route path="/admin/colors" element={<ManageColor />} />
                <Route path="/admin/types" element={<ManageType />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        {!isAdminRoute && !isUserRoute && <Footer />}
      </UserContext.Provider>
    </>
  );
}

export default App;
