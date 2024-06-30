import React, { useState, useEffect, createContext } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.scss";
import HomePage from "./pages/main/HomePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WishList from "./pages/main/Wishlist";

export const UserContext = createContext({});

function App() {
  const location = useLocation();
  const [userAuth, setUserAuth] = useState({});
  const isAdminRoute = location.pathname.includes("/admin1");
  const isUserRoute = location.pathname.includes("/user1");

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
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/login" element={!userAuth.accessToken ? <LoginPage /> : <Navigate to="/" />} />
            <Route path="/register" element={!userAuth.accessToken ? <RegisterPage /> : <Navigate to="/" />} />
          </Routes>
        </main>
        {!isAdminRoute && !isUserRoute && <Footer />}
      </UserContext.Provider>
    </>
  );
}

export default App;
