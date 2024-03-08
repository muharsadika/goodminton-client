import { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Profile from "../pages/Profile"
import Cart from "../pages/Cart"
import Racket from "../pages/Racket";
import RacketDetail from "../pages/RacketDetail";
import String from "../pages/String";
import StringDetail from "../pages/StringDetail";
import Shirt from "../pages/Shirt"
import ShirtDetail from "../pages/ShirtDetail"

// import TestProduct from "../pages/test/TestProduct";
// import TestProfile from "../pages/test/TestProfile";
// import TestSlider from "../pages/test/TestSlider";


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
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/rackets" element={<Racket />} />
          <Route path="/rackets/:id" element={<RacketDetail />} />
          <Route path="/strings" element={<String />} />
          <Route path="/strings/:id" element={<StringDetail />} />
          <Route path="/shirts" element={<Shirt />} />
          <Route path="/shirt/:id" element={<ShirtDetail />} />

          {/* <Route path="/test-product" element={<TestProduct />} />
          <Route path="/test-profile" element={<TestProfile />} />
          <Route path="/test-slider" element={<TestSlider />} /> */}
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