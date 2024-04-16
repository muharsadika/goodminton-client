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
import Racket from "../pages/racket/Racket";
import RacketDetail from "../pages/racket/RacketDetail";
import String from "../pages/string/String";
import StringDetail from "../pages/string/StringDetail";
import Shirt from "../pages/shirt/Shirt"
import ShirtDetail from "../pages/shirt/ShirtDetail"

// import TestProduct from "../pages/test/TestProduct";
// import TestProfile from "../pages/test/TestProfile";
// import TestSlider from "../pages/test/TestSlider";
// import TestTransaction from '../pages/test/TestTransaction';


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

          {/* <Route path="/test-product" element={<TestProduct />} /> */}
          {/* <Route path="/test-profile" element={<TestProfile />} /> */}
          {/* <Route path="/test-slider" element={<TestSlider />} /> */}
          {/* <Route path="/test-transaction" element={<TestTransaction />} /> */}
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