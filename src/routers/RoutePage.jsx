import { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Racket from "../pages/Racket";
import RacketDetail from "../pages/RacketDetail";
import String from "../pages/String";
import StringDetail from "../pages/StringDetail";
import Profile from "../pages/Profile"

import TestProduct from "../pages/test/TestProduct";
import TestProfile from "../pages/test/TestProfile";


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
        {/* <Route path="/" element={isLogin()}> */}
        {/* jika menggunakan path pada isLogin() 
        maka pengecekan berjalan ketika user menavigasi ke route "/" 
        tapi jika tanpa path, pengecekan dilakukan ke semua route*/}

        <Route element={isLogin()}>
          <Route path="/" element={<Home />} />
          <Route path="/rackets" element={<Racket />} />
          <Route path="/rackets/:id" element={<RacketDetail />} />
          <Route path="/strings" element={<String />} />
          <Route path="/strings/:id" element={<StringDetail />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/test-product" element={<TestProduct />} />
          <Route path="/test-profile" element={<TestProfile />} />
        </Route>
        <Route element={isNotLogin()}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default RoutePage;