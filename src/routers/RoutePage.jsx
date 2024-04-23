import { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import AuthRegister from "../pages/auth/AuthRegister";
import AuthLogin from "../pages/auth/AuthLogin";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile"
import Cart from "../pages/cart/Cart"

import AllProducts from "../pages/_products/AllProducts/AllProducts"
import Rackets from "../pages/_products/rackets/Rackets"
import Strings from "../pages/_products/strings/Strings"


function RoutePage() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const tokenListener = setInterval(() => {
      const currentToken = localStorage.getItem("token");
      if (currentToken !== token) {
        setToken(currentToken);
      }
    }, 1000);

    return () => {
      clearInterval(tokenListener);
    };
  }, [token]);

  function isLogin() {
    if (!token) {
      return <Navigate to="/login" />;
    } else {
      return <Outlet />;
    }
  }

  function isNotLogin() {
    if (token) {
      return <Navigate to="/" />;
    } else {
      return <Outlet />;
    }
  }

  return (
    <>
      <Routes>
        <Route element={isLogin()}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/category/racket" element={<Rackets />} />
          <Route path="/category/string" element={<Strings />} />
        </Route>
        <Route element={isNotLogin()}>
          <Route path="/register" element={<AuthRegister />} />
          <Route path="/login" element={<AuthLogin />} />
        </Route>
      </Routes>
    </>
  );
}

export default RoutePage;